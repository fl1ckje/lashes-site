<script setup>
defineProps({ dash: Boolean })
</script>

<template>
  <div class="text-[11px] leading-[1.4] font-[750] tracking-[.18em] uppercase">
    <span v-if="dash" class="mr-2.75 inline-block h-px w-7.5 bg-current align-middle opacity-65" />
    <slot />
  </div>
</template>
