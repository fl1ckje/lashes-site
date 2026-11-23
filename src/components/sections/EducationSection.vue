<script setup>
import AppButton from '../ui/AppButton.vue'
import BaseSection from '../ui/BaseSection.vue'
import Eyebrow from '../ui/Eyebrow.vue'
import PillLink from '../ui/PillLink.vue'
import SectionTitle from '../ui/SectionTitle.vue'
import CourseCard from '../cards/CourseCard.vue'
import { TELEGRAM_URL } from '@/data/site'
import { COURSES, COURSE_PICKER, EDU_PROTOCOL, EDU_VALUES } from '@/data/education'
</script>

<template>
  <BaseSection id="education" class="bg-deep pt-26.5 pb-25 text-[#f6f8f7] max-md:py-18.25">
    <div class="grid grid-cols-[1.1fr_.9fr] items-end gap-15 max-md:grid-cols-1 max-md:gap-6.25">
      <div>
        <Eyebrow dash class="text-edu-accent">Школа Анастасии Самойловой</Eyebrow>
        <SectionTitle size="edu">Техника становится<br /><span class="text-[#bbddec]">твоим навыком</span></SectionTitle>
      </div>
      <p class="text-base leading-[1.7] text-[#cbd8df]">
        Я учу мастеров понимать, <em>почему</em> ресница стоит именно так, что влияет на носку, как работать со сложным
        исходником и где брать первых клиентов. Практика, разбор ошибок и ясный план после обучения.
      </p>
    </div>

    <nav class="my-6 leading-normal" aria-label="Выбор курса">
      <p class="mb-2"><strong>Что хочешь освоить?</strong></p>
      <PillLink v-for="link in COURSE_PICKER" :key="link.href" :href="link.href">{{ link.label }}</PillLink>
    </nav>

    <div class="mt-12 grid grid-cols-4 gap-3.5 max-lg:grid-cols-2 max-sm:gap-2">
      <div v-for="v in EDU_VALUES" :key="v.digit" class="min-h-35 border border-edu-line p-5 max-sm:min-h-33.75 max-sm:p-3.25">
        <div class="font-serif text-2xl leading-[normal] text-edu-accent">{{ v.digit }}</div>
        <p class="mt-3.25 text-[13px] text-[#e1e5e6] max-sm:text-[11px]">{{ v.text }}</p>
      </div>
    </div>

    <div class="mt-6.25 grid grid-cols-3 gap-3.75 max-md:grid-cols-1">
      <CourseCard v-for="course in COURSES" :key="course.id" :course="course" />
    </div>

    <div class="mt-12 grid grid-cols-3 gap-5 border-t border-edu-rule pt-6.75 max-md:grid-cols-1">
      <div v-for="step in EDU_PROTOCOL" :key="step.title">
        <h4 class="mb-2.75 font-serif text-[25px] leading-[normal] text-[#d7eef8]">{{ step.title }}</h4>
        <p class="text-[13px] leading-[1.65] text-[#ced7dc]">{{ step.text }}</p>
      </div>
    </div>

    <div class="mt-8.75 flex flex-wrap items-center justify-between gap-5 border border-edu-rule px-6.75 py-5.5">
      <div>
        <Eyebrow class="text-edu-accent">Уже работаешь мастером?</Eyebrow>
        <h3 class="my-2 font-serif text-[32px] tracking-[-.047em]">Повышение квалификации за 1 день</h3>
        <p class="max-w-162.5 text-[13px] text-[#d3dce0]">
          Разбираем один выбранный навык: отступ, направление, скорость, клей, ряды или моделирование. Работа на модели
          и конкретные правки по твоей технике.
        </p>
      </div>
      <AppButton :href="TELEGRAM_URL" variant="blue">Обсудить повышение ↗</AppButton>
    </div>

    <div class="my-9 rounded-[14px] bg-sky p-[clamp(20px,4vw,44px)] text-deep">
      <h3 class="font-serif text-[clamp(26px,4vw,38px)] leading-[normal]">Хочешь сначала попробовать?</h3>
      <p class="max-w-[66ch] leading-[1.6]">
        Раз в месяц я провожу бесплатный часовой урок. Расскажи, приходилось ли тебе держать пинцет и чему хочется
        научиться. Обсудим, с чего начать и сколько практики тебе нужно.
      </p>
      <AppButton :href="TELEGRAM_URL" variant="light" class="mt-3 max-[600px]:whitespace-normal">
        Узнать дату пробного урока ↗
      </AppButton>
    </div>

    <div class="mt-9 flex flex-wrap gap-2.5">
      <AppButton :href="TELEGRAM_URL" variant="light">Обсудить обучение в Telegram ↗</AppButton>
    </div>
    <p class="mt-4 text-[11px] text-[#a9c2cf]">
      Занятия проходят очно, ориентировочно с 10:00 до 18:00. Дополнительную отработку можно согласовать в течение
      четырёх месяцев после курса.
    </p>
  </BaseSection>
</template>
