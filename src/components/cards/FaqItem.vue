<script setup>
defineProps({
  question: { type: String, required: true },
  answer: { type: String, required: true },
})
</script>

<template>
  <details class="group border-b border-line py-[22px]">
    <summary
      class="flex min-h-11 cursor-pointer list-none justify-between gap-5 text-[17px] after:font-serif after:text-[25px] after:leading-[normal] after:text-faint after:content-['+'] group-open:after:content-['−'] [&::-webkit-details-marker]:hidden"
    >
      {{ question }}
    </summary>
    <p class="mt-[13px] max-w-[780px] text-sm leading-[1.67] text-muted">{{ answer }}</p>
  </details>
</template>
