<script setup>
defineProps({
  /** base | edu | contact */
  size: { type: String, default: 'base' },
})

const sizes = {
  base: 'text-[clamp(37px,5.1vw,70px)] max-sm:text-[42px]',
  edu: 'text-[clamp(41px,5.3vw,75px)]',
  contact: 'text-[clamp(42px,5.1vw,68px)] max-sm:text-[50px]',
}
</script>

<template>
  <h2 :class="['my-4 font-serif leading-[1.06] tracking-[-.047em]', sizes[size]]">
    <slot />
  </h2>
</template>
