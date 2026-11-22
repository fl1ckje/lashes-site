export const BOOKING_URL = 'https://dikidi.ru/1949080'
export const TELEGRAM_URL = 'https://t.me/samoilova_prolash'
export const GIS_URL = 'https://2gis.ru/chelyabinsk/geo/70000001089306881'

export const NAV_LINKS = [
  { href: '#experience', label: 'Комфорт' },
  { href: '#services', label: 'Услуги' },
  { href: '#works', label: 'Работы' },
  { href: '#masters', label: 'Мастера' },
  { href: '#education', label: 'Обучение' },
  { href: '#contacts', label: 'Контакты' },
]

export const SOCIALS = [
  { label: 'ВКонтакте ↗', href: 'https://vk.ru/samoilova.prolash' },
  { label: 'Telegram ↗', href: TELEGRAM_URL },
  { label: 'Instagram ↗', href: 'https://www.instagram.com/slsh.club/' },
]

/** Ссылка в Telegram с готовым текстом про выбранный курс */
export const telegramLink = (topic) =>
  `${TELEGRAM_URL}?text=${encodeURIComponent(
    `Привет! Хочу узнать про ${topic}. Когда можно прийти на обучение?`,
  )}`
