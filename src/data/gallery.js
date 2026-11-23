/*
Раскладка: сетка из одинаковых ячеек, горизонтальный кадр (wide) занимает две.
cols / colsMobile — число колонок на десктопе и на телефоне (≤790px),
ratio — пропорции ячейки (ширина / высота).
Порядок подобран так, чтобы ряды закрывались без пустых мест
(wide ставим туда, где в ряду остаётся место на две ячейки).
*/
const photo = (file, extra = {}) => ({ file, ...extra })

export const GALLERIES = [
  {
    id: 'works-anastasia',
    name: 'Анастасия Самойлова',
    kind: 'Наращивание ресниц',
    cols: 5,
    colsMobile: 2,
    ratio: 1,
    photos: [
      photo('preview_1.webp', { caption: 'Анастасия · Тонкие лучики разной длины' }),
      photo('preview_2.webp'),
      photo('preview_3.webp'),
      photo('preview_4.webp'),
      photo('preview_5.webp', { caption: 'Анастасия · Выраженные лучи крупным планом' }),
      photo('preview_6.webp'),
      photo('preview_7.webp'),
      photo('preview_8.webp'),
      photo('preview_9.webp', { wide: true }),
    ],
  },
  {
    id: 'works-svetlana',
    name: 'Светлана',
    kind: 'Наращивание ресниц',
    cols: 4,
    colsMobile: 2,
    ratio: 3 / 4,
    photos: [
      photo('preview_2_1.webp', { caption: 'Светлана · Акцент на внешний уголок' }),
      photo('preview_2_2.webp'),
      photo('preview_2_4.webp', { wide: true }),
      photo('preview_2_3.webp'),
      photo('preview_2_5.webp'),
      photo('preview_2_6.webp'),
      photo('preview_2_7.webp', { caption: 'Ламинирование ресниц', kind: 'Ламинирование ресниц' }),
    ],
  },
]
