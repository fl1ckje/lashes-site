<script setup>
import AppButton from '../ui/AppButton.vue'
import { BOOKING_URL, TELEGRAM_URL } from '@/data/site'
import { useSectionAtMiddle } from '@/composables/useSectionAtMiddle'

// Пока на экране блок обучения, кнопка ведёт в Telegram, иначе — в онлайн-запись
const studying = useSectionAtMiddle('education')
</script>

<template>
  <div class="fixed inset-x-3 bottom-3 z-50 hidden max-md:block">
    <AppButton
      :href="studying ? TELEGRAM_URL : BOOKING_URL"
      external
      class="w-full shadow-[0_8px_32px_#162a3c4a]"
    >
      {{ studying ? 'Спросить об обучении ↗' : 'Записаться на ресницы ↗' }}
    </AppButton>
  </div>
</template>
