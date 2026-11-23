<script setup>
import BaseSection from '../ui/BaseSection.vue'
import SectionHead from '../ui/SectionHead.vue'
import MasterCard from '../cards/MasterCard.vue'
import { MASTERS } from '@/data/masters'
</script>

<template>
  <BaseSection id="masters" class="section-y">
    <SectionHead eyebrow="Кто делает красиво">
      <template #title>Выбери своего мастера</template>
      Посмотри работы каждого мастера. В онлайн-записи можно сравнить цены и выбрать удобное время.
    </SectionHead>

    <div class="grid grid-cols-2 gap-5.5 max-md:grid-cols-1">
      <MasterCard v-for="master in MASTERS" :key="master.id" :master="master" />
    </div>
  </BaseSection>
</template>
