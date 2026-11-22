<script setup>
defineProps({
  href: { type: String, required: true },
  external: Boolean,
})
</script>

<template>
  <a
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener' : undefined"
    class="my-[5px] mr-1.5 inline-block rounded-3xl border border-current px-3.5 py-2.5"
  >
    <slot />
  </a>
</template>
