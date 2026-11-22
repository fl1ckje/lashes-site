<script setup>
defineProps({
  service: { type: Object, required: true },
})
</script>

<template>
  <article
    :class="[
      'relative flex min-h-[280px] flex-col border border-line p-[34px] max-sm:min-h-[240px] max-sm:p-[26px]',
      service.bg,
    ]"
  >
    <span class="text-xs tracking-[.2em] text-faint">{{ service.counter }}</span>
    <h3
      class="mt-[33px] mb-[13px] font-serif text-[34px] leading-[1.06] tracking-[-.04em] whitespace-pre-line max-sm:text-[30px]"
    >
      {{ service.title }}
    </h3>
    <p class="max-w-[430px] text-sm text-muted">{{ service.text }}</p>
  </article>
</template>
