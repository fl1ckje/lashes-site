<script setup>
import { STATS } from '@/data/home'
</script>

<template>
  <section class="bg-tint py-[42px] max-sm:py-[25px]">
    <div class="container-x grid grid-cols-4 gap-5 max-md:grid-cols-2 max-sm:gap-3">
      <div
        v-for="stat in STATS"
        :key="stat.caption"
        class="border-r border-tint-line py-2.5 pr-5 last:border-r-0 max-md:[&:nth-child(-n+2)]:border-b max-md:[&:nth-child(-n+2)]:pb-[23px] max-md:[&:nth-child(2)]:border-r-0"
      >
        <div class="font-serif text-[clamp(35px,4vw,60px)] leading-none tracking-[-.045em] max-sm:text-[36px]">
          {{ stat.num }}
        </div>
        <p class="mt-[9px] max-w-[210px] text-xs text-soft max-sm:text-[11px]">{{ stat.caption }}</p>
      </div>
    </div>
  </section>
</template>
