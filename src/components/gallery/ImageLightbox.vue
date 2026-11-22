<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import GlassButton from './GlassButton.vue'
import ChevronIcon from '@/assets/svg/chevron.svg?component'
import CloseIcon from '@/assets/svg/close.svg?component'

const props = defineProps({
  photos: { type: Array, required: true },
  /** индекс открытого фото или null */
  modelValue: { type: Number, default: null },
  /** центр миниатюры, из которой «вылетает» фото */
  origin: { type: Object, default: null },
})
const emit = defineEmits(['update:modelValue'])

const SWIPE_THRESHOLD = 60

const root = ref(null)
const direction = ref('next')
const dragX = ref(0)
const dragging = ref(false)

const photo = computed(() => (props.modelValue === null ? null : props.photos[props.modelValue] ?? null))
const hasPrev = computed(() => props.modelValue !== null && props.modelValue > 0)
const hasNext = computed(() => props.modelValue !== null && props.modelValue < props.photos.length - 1)

const zoomVars = computed(() => {
  if (!props.origin) return {}
  return {
    '--lb-from-x': `${props.origin.x - window.innerWidth / 2}px`,
    '--lb-from-y': `${props.origin.y - window.innerHeight / 2}px`,
  }
})

const close = () => emit('update:modelValue', null)

function go(step) {
  const i = props.modelValue + step
  if (i < 0 || i >= props.photos.length) return
  direction.value = step > 0 ? 'next' : 'prev'
  emit('update:modelValue', i)
}
const prev = () => go(-1)
const next = () => go(1)

/* ── клавиатура, блокировка прокрутки, фокус ── */
let lastFocused = null

function onKey(e) {
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowLeft') prev()
  else if (e.key === 'ArrowRight') next()
}

function lockPage() {
  const html = document.documentElement
  const scrollbar = window.innerWidth - html.clientWidth
  html.style.overflow = 'hidden'
  if (scrollbar > 0) html.style.paddingRight = `${scrollbar}px`
  window.addEventListener('keydown', onKey)
}

function unlockPage() {
  const html = document.documentElement
  html.style.overflow = ''
  html.style.paddingRight = ''
  window.removeEventListener('keydown', onKey)
}

watch(
  () => photo.value !== null,
  async (isOpen) => {
    if (isOpen) {
      lastFocused = document.activeElement
      lockPage()
      await nextTick()
      root.value?.focus({ preventScroll: true })
    } else {
      unlockPage()
      lastFocused?.focus?.({ preventScroll: true })
      lastFocused = null
    }
  },
)
onBeforeUnmount(unlockPage)

/* ── подгружаем соседние фото, чтобы листать без паузы ── */
watch(
  () => props.modelValue,
  (i) => {
    if (i === null) return
    for (const n of [i - 1, i + 1]) {
      const p = props.photos[n]
      if (p) new Image().src = p.src
    }
  },
  { immediate: true },
)

/* ── свайп ── */
let startX = 0
let startY = 0
let tracking = false
let swiped = false
let suppressClick = false

function onDown(e) {
  if (e.pointerType === 'mouse' && e.button !== 0) return
  if (e.target.closest('button')) return
  tracking = true
  swiped = false
  startX = e.clientX
  startY = e.clientY
}

function onMove(e) {
  if (!tracking) return
  const dx = e.clientX - startX
  const dy = e.clientY - startY
  if (!swiped && Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
    swiped = true
    dragging.value = true
  }
  if (!swiped) return
  const blocked = (dx > 0 && !hasPrev.value) || (dx < 0 && !hasNext.value)
  dragX.value = blocked ? dx / 4 : dx // у края — «резинка»
}

function onUp() {
  if (!tracking) return
  tracking = false
  const dx = dragX.value
  dragging.value = false
  dragX.value = 0
  if (!swiped) return
  if (dx <= -SWIPE_THRESHOLD) next()
  else if (dx >= SWIPE_THRESHOLD) prev()
  // жест не должен закрывать фото «кликом» по фону
  suppressClick = true
  setTimeout(() => (suppressClick = false), 0)
}

function onBackdropClick() {
  if (!suppressClick) close()
}
</script>

<template>
  <Teleport to="body">
    <Transition name="lb">
      <div
        v-if="photo"
        ref="root"
        tabindex="-1"
        role="dialog"
        aria-modal="true"
        aria-label="Просмотр фотографии"
        class="fixed inset-0 z-[100] flex touch-pan-y items-center justify-center bg-page/60 outline-none backdrop-blur-xl select-none"
        :style="zoomVars"
        @click.self="onBackdropClick"
        @pointerdown="onDown"
        @pointermove="onMove"
        @pointerup="onUp"
        @pointercancel="onUp"
      >
        <div
          :style="{
            transform: `translateX(${dragX}px)`,
            transition: dragging ? 'none' : 'transform .25s ease',
          }"
        >
          <Transition :name="`lb-${direction}`" mode="out-in">
            <img
              :key="photo.src"
              :src="photo.src"
              :alt="photo.alt"
              draggable="false"
              class="lb-img block max-h-[86dvh] max-w-[min(92vw,1200px)] object-contain shadow-soft"
            />
          </Transition>
        </div>

        <GlassButton label="Закрыть" class="top-6 right-6 max-sm:top-3 max-sm:right-3" @click="close">
          <CloseIcon />
        </GlassButton>
        <GlassButton
          v-if="hasPrev"
          label="Предыдущее фото"
          class="top-1/2 left-6 -translate-y-1/2 max-sm:left-3"
          @click="prev"
        >
          <ChevronIcon class="rotate-180" />
        </GlassButton>
        <GlassButton
          v-if="hasNext"
          label="Следующее фото"
          class="top-1/2 right-6 -translate-y-1/2 max-sm:right-3"
          @click="next"
        >
          <ChevronIcon />
        </GlassButton>

        <div
          class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/35 px-3 py-1 text-xs text-white backdrop-blur-sm"
        >
          {{ modelValue + 1 }} / {{ photos.length }}
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
/* Открытие/закрытие: фон проявляется, фото «вылетает» из миниатюры */
.lb-enter-active,
.lb-leave-active {
  transition: opacity 0.25s ease;
}
.lb-enter-from,
.lb-leave-to {
  opacity: 0;
}
.lb-enter-active .lb-img,
.lb-leave-active .lb-img {
  transition: transform 0.32s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.lb-enter-from .lb-img {
  transform: translate(var(--lb-from-x, 0), var(--lb-from-y, 0)) scale(0.35);
}
.lb-leave-to .lb-img {
  transform: scale(0.9);
}

/* Переключение между фото */
.lb-next-enter-active,
.lb-next-leave-active,
.lb-prev-enter-active,
.lb-prev-leave-active {
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}
.lb-next-enter-from,
.lb-prev-leave-to {
  opacity: 0;
  transform: translateX(36px);
}
.lb-next-leave-to,
.lb-prev-enter-from {
  opacity: 0;
  transform: translateX(-36px);
}
</style>
