<script setup>
defineProps({ dash: Boolean })
</script>

<template>
  <div class="text-[11px] leading-[1.4] font-[750] tracking-[.18em] uppercase">
    <span v-if="dash" class="mr-[11px] inline-block h-px w-[30px] bg-current align-middle opacity-65" />
    <slot />
  </div>
</template>
