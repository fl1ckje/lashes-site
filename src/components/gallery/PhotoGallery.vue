<script setup>
import { ref } from 'vue'
import ImageLightbox from './ImageLightbox.vue'

const props = defineProps({
  /** [{ src, alt, w, h, caption? }] */
  photos: { type: Array, required: true },
  /** 'square' (1:1) | 'portrait' (3:4) */
  layout: { type: String, default: 'square' },
})

const current = ref(null)
const origin = ref(null)

function open(index, event) {
  const r = event.currentTarget.getBoundingClientRect()
  origin.value = { x: r.left + r.width / 2, y: r.top + r.height / 2 }
  current.value = index
}
</script>

<template>
  <!-- 
    grid-flow-row-dense помогает широкому кадру занимать пустые места.
    Если он стоит не в конце ряда, он автоматически поднимется выше.
  -->
  <ul
    :class="[
      'grid grid-flow-row-dense gap-2.5',
      layout === 'portrait' ? 'grid-cols-4 max-md:grid-cols-2' : 'grid-cols-5 max-md:grid-cols-2',
    ]"
  >
    <li
      v-for="(p, i) in photos"
      :key="p.src"
      :class="[
        'group relative overflow-hidden bg-surface-gray',
        // Если фото горизонтальное — занимает 2 колонки и имеет точную пропорцию
        p.w > p.h
          ? (layout === 'portrait' ? 'col-span-2 aspect-3/2' : 'col-span-2 aspect-2/1')
          // Если вертикальное или квадратное — занимает 1 колонку
          : (layout === 'portrait' ? 'col-span-1 aspect-3/4' : 'col-span-1 aspect-square')
      ]"
    >
      <button
        type="button"
        class="absolute inset-0 h-full w-full cursor-zoom-in focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
        :aria-label="`Увеличить фото ${i + 1}`"
        @click="open(i, $event)"
      >
        <!-- object-cover гарантирует, что фото идеально заполнит ячейку без искажений -->
        <img
          :src="p.src"
          :alt="p.alt"
          :width="p.w"
          :height="p.h"
          loading="lazy"
          class="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </button>

      <!-- Подпись поверх фото, чтобы не влиять на сетку -->
      <figcaption
        v-if="p.caption"
        class="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 via-black/20 to-transparent px-3 pb-2.5 pt-8 text-xs leading-[1.4] text-white"
      >
        {{ p.caption }}
      </figcaption>
    </li>
  </ul>

  <ImageLightbox v-model="current" :photos="photos" :origin="origin" />
</template>