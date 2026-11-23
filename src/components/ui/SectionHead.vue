<script setup>
import Eyebrow from './Eyebrow.vue'
import SectionTitle from './SectionTitle.vue'

defineProps({ eyebrow: { type: String, required: true } })
</script>

<template>
  <div
    class="mb-9.5 flex items-end justify-between gap-8.75 max-md:flex-col max-md:items-start max-md:gap-1.75"
  >
    <div>
      <Eyebrow>{{ eyebrow }}</Eyebrow>
      <SectionTitle><slot name="title" /></SectionTitle>
    </div>
    <p v-if="$slots.default" class="max-w-92.5 text-[15px] leading-[1.56] text-muted max-md:max-w-155">
      <slot />
    </p>
  </div>
</template>
