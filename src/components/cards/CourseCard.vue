<script setup>
import { telegramLink } from '@/data/site'

defineProps({
  course: { type: Object, required: true },
})
</script>

<template>
  <article
    :id="course.id"
    :class="[
      'flex min-h-[540px] scroll-mt-[90px] flex-col border p-[30px] max-lg:p-[23px] max-md:min-h-0',
      course.featured ? 'border-sky bg-sky text-night' : 'border-edu-rule bg-edu-card text-white',
    ]"
  >
    <div :class="['text-[11px] tracking-[.14em] uppercase', course.featured ? 'text-[#4d7388]' : 'text-edu-accent']">
      {{ course.meta }}
    </div>
    <h3 class="mt-5 mb-2 font-serif text-[46px] leading-none tracking-[-.055em]">{{ course.title }}</h3>
    <div class="text-[13px] opacity-80">{{ course.duration }}</div>

    <ul class="my-7 mb-[30px] grid list-disc gap-[11px] pl-5 text-[13px] leading-[1.5]">
      <li v-for="item in course.items" :key="item">{{ item }}</li>
    </ul>

    <a
      :href="telegramLink(course.title)"
      :class="[
        'mt-auto flex items-center justify-between border-t pt-[17px] text-[13px] font-bold',
        course.featured ? 'border-[#9ebdc9]' : 'border-edu-rule',
      ]"
    >
      Спросить про {{ course.short }} <span>↗</span>
    </a>
  </article>
</template>
