// Все фото лежат в src/assets/img и подключаются по имени файла.
// Vite отдаёт для них хешированные URL с учётом base (важно для GitHub Pages).
const files = import.meta.glob('./img/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})

export function imageUrl(name) {
  const url = files[`./img/${name}`]
  if (!url) throw new Error(`Изображение не найдено: src/assets/img/${name}`)
  return url
}
