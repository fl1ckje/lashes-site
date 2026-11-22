<script setup>
defineProps({ id: String })
</script>

<template>
  <section :id="id" class="scroll-mt-20">
    <div class="container-x">
      <slot />
    </div>
  </section>
</template>
