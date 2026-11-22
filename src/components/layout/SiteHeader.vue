<script setup>
import { ref } from 'vue'
import AppButton from '../ui/AppButton.vue'
import { BOOKING_URL, NAV_LINKS } from '@/data/site'

const open = ref(false)
</script>

<template>
  <header class="sticky top-0 z-[55] border-b border-line bg-header backdrop-blur-[18px]">
    <div class="container-x flex h-20 items-center justify-between gap-4 max-sm:h-[68px]">
      <a href="#top" class="flex min-w-[185px] flex-col leading-[1.1]">
        <strong class="font-serif text-[29px] font-normal tracking-[-.065em] max-sm:text-[25px]">Делаем красиво.</strong>
        <span class="mt-[7px] text-[9px] tracking-[.14em] text-muted uppercase max-sm:text-[8px]">
          Школа-студия оформления взгляда · Челябинск
        </span>
      </a>

      <nav
        id="menu"
        aria-label="Основная навигация"
        :class="[
          'flex items-center gap-6 text-xs font-[650] max-lg:gap-3',
          'max-md:absolute max-md:inset-x-0 max-md:top-20 max-md:flex-col max-md:items-start max-md:border-b max-md:border-line max-md:bg-menu max-md:px-[25px] max-md:pt-[22px] max-md:pb-7 max-md:shadow-soft max-sm:top-[68px]',
          open ? '' : 'max-md:hidden',
        ]"
      >
        <a v-for="link in NAV_LINKS" :key="link.href" :href="link.href" class="hover:text-accent" @click="open = false">
          {{ link.label }}
        </a>
      </nav>

      <AppButton :href="BOOKING_URL" external class="max-md:hidden">Записаться ↗</AppButton>

      <button
        type="button"
        class="hidden min-h-[38px] min-w-[38px] cursor-pointer text-[25px] max-md:block"
        aria-controls="menu"
        :aria-expanded="open"
        :aria-label="open ? 'Закрыть меню' : 'Открыть меню'"
        @click="open = !open"
      >
        {{ open ? '✕' : '☰' }}
      </button>
    </div>
  </header>
</template>
