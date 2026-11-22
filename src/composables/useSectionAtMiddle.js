import { onBeforeUnmount, onMounted, ref } from 'vue'

/** true, пока середина экрана находится внутри секции с указанным id */
export function useSectionAtMiddle(id) {
  const active = ref(false)

  const update = () => {
    const el = document.getElementById(id)
    if (!el) return
    const { top, bottom } = el.getBoundingClientRect()
    const middle = window.innerHeight / 2
    active.value = top <= middle && bottom > middle
  }

  onMounted(() => {
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
  })
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', update)
    window.removeEventListener('resize', update)
  })

  return active
}
