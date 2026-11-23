<script setup>
import BaseSection from '../ui/BaseSection.vue'
import Eyebrow from '../ui/Eyebrow.vue'
import SectionTitle from '../ui/SectionTitle.vue'
import { INTRO_STEPS } from '@/data/home'
</script>

<template>
  <BaseSection id="experience" class="section-y bg-cream">
    <div class="grid grid-cols-[1.1fr_.9fr] items-center gap-22.5 max-lg:gap-10 max-md:grid-cols-1 max-md:gap-6.25">
      <div>
        <Eyebrow dash>Комфорт уровня бизнес-класса</Eyebrow>
        <SectionTitle>Пока мы делаем ресницы,<br />ты отдыхаешь.</SectionTitle>
        <p class="max-w-142.5 text-base leading-[1.56] text-muted">
          Кресло-реклайнер с регулировками под тебя, тихий кабинет и никаких обязательных разговоров. Можно прийти за
          красивым взглядом и получить пару часов тишины в подарок.
        </p>
      </div>
      <div>
        <p class="font-serif text-[clamp(31px,4vw,57px)] leading-[1.15] tracking-[-.04em] text-quote italic">
          «Тебе не нужно знать, что такое LC, L или мокрый эффект. Достаточно рассказать, что хочешь видеть в
          зеркале».
        </p>
        <div class="mt-9.5 grid grid-cols-3 gap-2.75 max-sm:grid-cols-1">
          <div v-for="step in INTRO_STEPS" :key="step.title" class="border-t border-rule pt-4.25 max-sm:py-2.5">
            <strong class="block text-sm">{{ step.title }}</strong>
            <p class="mt-1.75 text-xs text-muted">{{ step.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>
