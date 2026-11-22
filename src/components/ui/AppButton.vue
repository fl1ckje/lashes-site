<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: { type: String, required: true },
  /** primary | ghost | light | blue */
  variant: { type: String, default: 'primary' },
  /** открыть в новой вкладке */
  external: Boolean,
})

const variants = {
  primary: 'border-btn bg-btn text-btn-fg',
  ghost: 'border-btn bg-transparent text-ink',
  light: 'border-paper bg-paper text-night',
  blue: 'border-sky bg-sky text-night',
}

const linkAttrs = computed(() => (props.external ? { target: '_blank', rel: 'noopener' } : {}))
</script>

<template>
  <a
    :href="href"
    v-bind="linkAttrs"
    :class="[
      'inline-flex items-center justify-center gap-[11px] rounded-full border px-[23px] py-[15px] text-[13px] font-[680] whitespace-nowrap transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_#11151924]',
      variants[variant],
    ]"
  >
    <slot />
  </a>
</template>
