<script setup>
import LashDrawSvg from '@/assets/svg/lash-draw.svg?component'
</script>

<template>
  <LashDrawSvg class="lash-draw" aria-hidden="true" />
</template>

<style scoped>
/* «Рисование» ресниц при загрузке; при reduced-motion ресницы просто видны */
@media (prefers-reduced-motion: no-preference) {
  .lash-draw :deep(path) {
    stroke-dasharray: 1;
    animation: lash-ink 1.1s ease-out backwards;
  }
}

@keyframes lash-ink {
  from {
    stroke-dashoffset: 1;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
