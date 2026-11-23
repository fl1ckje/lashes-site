<script setup>
import AppButton from '../ui/AppButton.vue'
import BaseSection from '../ui/BaseSection.vue'
import SectionHead from '../ui/SectionHead.vue'
import ServiceCard from '../cards/ServiceCard.vue'
import { BOOKING_URL } from '@/data/site'
import { SERVICES } from '@/data/home'
</script>

<template>
  <BaseSection id="services" class="section-y">
    <SectionHead eyebrow="Услуги студии">
      <template #title>Какой эффект тебе нравится?</template>
      От эффекта «свои, только лучше» до выразительных, необычных форм. Обсудим всё до процедуры.
    </SectionHead>

    <div class="grid grid-cols-2 gap-4.25 max-md:grid-cols-1">
      <ServiceCard v-for="service in SERVICES" :key="service.counter" :service="service" />
    </div>

    <div class="mt-8.5">
      <AppButton :href="BOOKING_URL" external>Выбрать мастера и время ↗</AppButton>
    </div>
  </BaseSection>
</template>
