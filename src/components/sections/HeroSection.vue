<script setup>
import AppButton from '../ui/AppButton.vue'
import Eyebrow from '../ui/Eyebrow.vue'
import LashDraw from '../ui/LashDraw.vue'
import { imageUrl } from '@/assets/images'
import { BOOKING_URL } from '@/data/site'
import { HERO_TRUST } from '@/data/home'

const heroImage = imageUrl('top_image.webp')
</script>

<template>
  <section
    id="top"
    class="relative isolate flex min-h-[min(780px,88vh)] items-center overflow-hidden bg-tint max-lg:min-h-170 max-md:min-h-197.5 max-md:items-start max-sm:min-h-192.5"
  >
    <div class="absolute top-0 right-0 bottom-0 left-[34%] -z-20 max-md:bottom-auto max-md:left-0 max-md:h-110 max-sm:h-102.5">
      <img
        :src="heroImage"
        alt="Крупный план реальной работы по наращиванию ресниц"
        fetchpriority="high"
        class="h-full w-full object-cover object-[right_46%] max-md:object-center dark:brightness-90"
      />
    </div>
    <div class="hero-fade absolute inset-0 -z-10" />

    <div class="container-x">
      <div
        class="w-[min(520px,49%)] pt-19 pb-21 max-lg:w-[min(510px,55%)] max-md:w-[min(100%,570px)] max-md:pt-87.5 max-md:pb-13.75"
      >
        <LashDraw class="mb-3 block h-auto w-[clamp(110px,14vw,180px)] text-faint" />
        <Eyebrow dash>Наращивание ресниц в Челябинске</Eyebrow>
        <h1
          class="mt-6 mb-6.25 font-serif text-[clamp(48px,5.5vw,78px)] leading-[.96] tracking-[-.047em] max-md:text-[clamp(48px,9vw,75px)] max-sm:text-[52px] max-sm:tracking-[-.062em]"
        >
          Твой взгляд<br /><span class="text-accent-soft italic">в бизнес-классе</span>
        </h1>
        <p class="max-w-116.25 text-base leading-[1.56] text-soft max-sm:text-sm">
          Ты отдыхаешь на реклайнере, а мы подбираем изгиб, оттенок и эффект под твои глаза.
        </p>

        <div
          class="mt-7.75 flex flex-wrap gap-2.5 max-sm:gap-1.75 max-sm:[&>a]:px-4 max-sm:[&>a]:py-3.25 max-sm:[&>a]:text-xs"
        >
          <AppButton :href="BOOKING_URL" external>Записаться на ресницы ↗</AppButton>
          <AppButton href="#education" variant="ghost">Выбрать обучение ↓</AppButton>
        </div>

        <div
          class="mt-14 flex flex-wrap items-center gap-4.5 text-[11px] font-[650] tracking-widest uppercase max-md:mt-6 max-sm:gap-2.5 max-sm:text-[9px]"
        >
          <template v-for="(item, i) in HERO_TRUST" :key="item">
            <i v-if="i" class="size-1.25 rounded-full bg-[#6f9cb1]" />
            <span>{{ item }}</span>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Плавный переход фото → цвет фона: слева на десктопе, снизу на мобильных */
.hero-fade {
  background: linear-gradient(
    90deg,
    var(--hero-fade) 0%,
    color-mix(in srgb, var(--hero-fade) 99%, transparent) 26%,
    color-mix(in srgb, var(--hero-fade) 84%, transparent) 44%,
    color-mix(in srgb, var(--hero-fade) 11%, transparent) 72%,
    transparent 100%
  );
}
@media (max-width: 790px) {
  .hero-fade {
    background: linear-gradient(0deg, var(--tint) 0%, var(--tint) 39%, transparent 76%);
  }
}
</style>
