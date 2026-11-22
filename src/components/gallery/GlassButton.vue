<script setup>
defineProps({ label: { type: String, required: true } })
</script>

<template>
  <button
    type="button"
    :aria-label="label"
    class="absolute z-10 grid size-12 cursor-pointer place-items-center rounded-full bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/55 focus-visible:outline-2 focus-visible:outline-white max-sm:size-10 [&>svg]:size-6"
  >
    <slot />
  </button>
</template>
