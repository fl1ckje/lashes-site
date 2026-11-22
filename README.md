# Делаем красиво — лендинг студии

Vue 3 + Vite + Tailwind CSS 4. Статическая сборка для GitHub Pages.

## Команды

```bash
npm install
npm run dev       # разработка
npm run build     # статика в dist/
npm run preview   # проверить сборку локально
```

## Структура

```
src/
  assets/img/        фото (webp), подключаются по имени через assets/images.js
  assets/svg/        SVG-файлы (импортируются как компоненты: ?component)
  data/              весь контент: услуги, мастера, курсы, FAQ, галереи, ссылки
  components/
    ui/              AppButton, PillLink, Eyebrow, SectionHead, SectionTitle, LashDraw…
    layout/          SiteHeader, SiteFooter, FloatingCta
    cards/           ServiceCard, MasterCard, CourseCard, FaqItem
    gallery/         PhotoGallery, ImageLightbox, GlassButton
    sections/        секции страницы
  style.css          тема (light/dark токены), брейкпоинты, utility-классы
```

## Как менять

- **Тексты, цены, ссылки** — в `src/data/*.js`, шаблоны трогать не нужно.
- **Новое фото в портфолио** — положить `.webp` в `src/assets/img/` и добавить строку
  `photo('имя.webp', ширина, высота)` в `src/data/gallery.js`.
- **Цвета** — токены в `src/style.css` (`:root` и блок `prefers-color-scheme: dark`).

## Тема

Светлая/тёмная выбирается автоматически по системной настройке (`prefers-color-scheme`).
В компонентах используются только семантические классы (`bg-page`, `text-muted`, `border-line` …),
поэтому `dark:` почти нигде не нужен.

## GitHub Pages

1. Залить проект в репозиторий (ветка `main`).
2. Settings → Pages → Source: **GitHub Actions**.
3. Каждый push в `main` запускает `.github/workflows/deploy.yml` и публикует `dist/`.

`base: './'` в `vite.config.js` — сайт работает и на `user.github.io`, и на `user.github.io/repo/`.
После первого `npm install` закоммитьте `package-lock.json` и при желании замените в workflow
`npm install` на `npm ci`.
