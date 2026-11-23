<script setup>
import { ref } from 'vue'
import ImageLightbox from './ImageLightbox.vue'

defineProps({
  /** [{ src, alt, caption?, wide? }] */
  photos: { type: Array, required: true },
  /** колонок на десктопе / на телефоне */
  cols: { type: Number, default: 4 },
  colsMobile: { type: Number, default: 2 },
  /** пропорции ячейки: ширина / высота */
  ratio: { type: Number, default: 1 },
})

const current = ref(null)
const origin = ref(null)

function open(index, event) {
  // откуда «вылетает» увеличенное фото
  const r = event.currentTarget.getBoundingClientRect()
  origin.value = { x: r.left + r.width / 2, y: r.top + r.height / 2 }
  current.value = index
}
</script>

<template>
  <!--
    Сетка одинаковых ячеек. Горизонтальный кадр (wide) занимает две колонки:
    на десктопе тянется на высоту ряда, на телефоне (один в ряду) получает свою пропорцию.
  -->
  <ul
    class="grid grid-cols-[repeat(var(--cols),minmax(0,1fr))] gap-2.5 max-md:grid-cols-[repeat(var(--cols-m),minmax(0,1fr))]"
    :style="{ '--cols': cols, '--cols-m': colsMobile, '--wide-ratio': ratio * 2 }"
  >
    <li
      v-for="(p, i) in photos"
      :key="p.src"
      :class="['relative overflow-hidden', p.wide && 'col-span-2 max-md:aspect-(--wide-ratio)']"
      :style="p.wide ? undefined : { aspectRatio: ratio }"
    >
      <button
        type="button"
        class="absolute inset-0 block size-full cursor-zoom-in focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
        :aria-label="`Увеличить фото ${i + 1}`"
        @click="open(i, $event)"
      >
        <img :src="p.src" :alt="p.alt" loading="lazy" class="size-full object-cover" />
      </button>
      <span
        v-if="p.caption"
        class="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/65 to-transparent px-3 pt-10 pb-2.5 text-xs leading-[1.3] text-white"
      >
        {{ p.caption }}
      </span>
    </li>
  </ul>

  <ImageLightbox v-model="current" :photos="photos" :origin="origin" />
</template>
