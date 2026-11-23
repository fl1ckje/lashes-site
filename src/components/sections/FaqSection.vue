<script setup>
import BaseSection from '../ui/BaseSection.vue'
import SectionHead from '../ui/SectionHead.vue'
import FaqItem from '../cards/FaqItem.vue'
import { FAQ_GROUPS } from '@/data/faq'
</script>

<template>
  <BaseSection id="faq" class="section-y">
    <SectionHead eyebrow="Частые вопросы">
      <template #title>Можно без<br />сложных слов?</template>
    </SectionHead>

    <div class="mx-auto max-w-232.5">
      <template v-for="group in FAQ_GROUPS" :key="group.title">
        <h3 class="mt-7 mb-3 text-[1.17em] font-bold">{{ group.title }}</h3>
        <FaqItem v-for="item in group.items" :key="item.q" :question="item.q" :answer="item.a" />
      </template>
    </div>
  </BaseSection>
</template>
