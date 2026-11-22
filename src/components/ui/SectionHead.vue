<script setup>
import Eyebrow from './Eyebrow.vue'
import SectionTitle from './SectionTitle.vue'

defineProps({ eyebrow: { type: String, required: true } })
</script>

<template>
  <div
    class="mb-[38px] flex items-end justify-between gap-[35px] max-md:flex-col max-md:items-start max-md:gap-[7px]"
  >
    <div>
      <Eyebrow>{{ eyebrow }}</Eyebrow>
      <SectionTitle><slot name="title" /></SectionTitle>
    </div>
    <p v-if="$slots.default" class="max-w-[370px] text-[15px] leading-[1.56] text-muted max-md:max-w-[620px]">
      <slot />
    </p>
  </div>
</template>
