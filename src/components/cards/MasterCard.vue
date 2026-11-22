<script setup>
import PillLink from '../ui/PillLink.vue'
import { BOOKING_URL } from '@/data/site'

defineProps({
  master: { type: Object, required: true },
})
</script>

<template>
  <article class="border border-line bg-page">
    <div class="px-[30px] pt-[27px] pb-[30px]">
      <h3 class="font-serif text-[38px] leading-[normal] tracking-[-.05em]">{{ master.name }}</h3>
      <PillLink :href="BOOKING_URL" external>{{ master.bookLabel }}</PillLink>
      <a :href="master.worksHref" class="mt-2.5 ml-1 inline-block underline underline-offset-4">
        Посмотреть работы мастера ↓
      </a>
      <div class="mt-[9px] text-xs tracking-[.11em] text-accent-soft uppercase">{{ master.role }}</div>

      <p
        v-for="(text, i) in master.paragraphs"
        :key="i"
        :class="[
          'mb-[18px] text-sm text-muted max-[600px]:text-base max-[600px]:leading-[1.55]',
          i === 0 ? 'mt-[17px]' : 'mt-[1em]',
        ]"
      >
        {{ text }}
      </p>

      <div class="flex flex-wrap gap-[7px]">
        <span v-for="chip in master.chips" :key="chip" class="rounded-full border border-line px-[11px] py-2 text-[11px] text-soft">
          {{ chip }}
        </span>
      </div>
    </div>
  </article>
</template>
