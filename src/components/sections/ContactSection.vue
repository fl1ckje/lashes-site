<script setup>
import AppButton from '../ui/AppButton.vue'
import Eyebrow from '../ui/Eyebrow.vue'
import SectionTitle from '../ui/SectionTitle.vue'
import { BOOKING_URL, GIS_URL, SOCIALS } from '@/data/site'
</script>

<template>
  <section id="contacts" class="scroll-mt-20 bg-tint py-[95px]">
    <div class="container-x grid grid-cols-[1.25fr_.75fr] items-start gap-[70px] max-md:grid-cols-1 max-md:gap-[35px]">
      <div>
        <Eyebrow dash>Челябинск · Белостоцкого, 11</Eyebrow>
        <SectionTitle size="contact">Как нас найти<br />и записаться</SectionTitle>
        <p class="max-w-[570px] text-[17px] leading-[1.56] text-soft">
          Выбирай мастера и удобное время. Если интересует обучение, можно сначала обсудить программу и свои цели.
        </p>
        <div class="mt-[26px] flex flex-wrap gap-2.5">
          <AppButton :href="BOOKING_URL" external>Онлайн-запись ↗</AppButton>
          <AppButton :href="GIS_URL" variant="ghost" external>Найти нас в 2ГИС ↗</AppButton>
        </div>
      </div>

      <aside class="border border-tint-line bg-glass p-[26px] max-sm:p-5">
        <h3 class="font-serif text-[25px] leading-[normal]">Мы на связи</h3>
        <p class="mt-3 text-[13px] text-soft">
          Студия «Делаем красиво»<br />Анастасия Самойлова и Светлана<br />По предварительной записи
        </p>
        <div class="mt-[33px] mb-3 text-[11px] font-[750] tracking-[.14em] uppercase">Социальные сети и площадки</div>
        <div class="flex flex-wrap gap-2">
          <a
            v-for="s in SOCIALS"
            :key="s.href"
            :href="s.href"
            class="rounded-full border border-tint-line bg-glass px-3 py-[9px] text-[11px] font-bold text-soft"
          >
            {{ s.label }}
          </a>
        </div>
      </aside>
    </div>
  </section>
</template>
