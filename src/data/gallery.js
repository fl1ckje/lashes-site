// w/h — реальные размеры файлов: по ним считается «justified»-сетка без прыжков при загрузке.
const photo = (file, w, h, extra = {}) => ({ file, w, h, ...extra })

export const GALLERIES = [
  {
    id: 'works-anastasia',
    name: 'Анастасия Самойлова',
    kind: 'Наращивание ресниц',
    photos: [
      photo('preview_1.webp', 1100, 1100, { caption: 'Анастасия · Тонкие лучики разной длины' }),
      photo('preview_2.webp', 1100, 1100),
      photo('preview_3.webp', 1100, 1100),
      photo('preview_4.webp', 1100, 1100),
      photo('preview_5.webp', 1100, 1100, { caption: 'Анастасия · Выраженные лучи крупным планом' }),
      photo('preview_6.webp', 1100, 1100),
      photo('preview_7.webp', 1100, 1100),
      photo('preview_8.webp', 1100, 1100),
      photo('preview_9.webp', 1100, 619),
    ],
  },
  {
    id: 'works-svetlana',
    name: 'Светлана',
    kind: 'Наращивание ресниц',
    photos: [
      photo('preview_2_1.webp', 825, 1100, { caption: 'Светлана · Акцент на внешний уголок' }),
      photo('preview_2_2.webp', 825, 1100),
      photo('preview_2_3.webp', 825, 1100),
      photo('preview_2_4.webp', 1100, 825),
      photo('preview_2_5.webp', 825, 1100),
      photo('preview_2_6.webp', 825, 1100),
      photo('preview_2_7.webp', 733, 1100, {
        caption: 'Ламинирование ресниц',
        kind: 'Ламинирование ресниц',
      }),
    ],
  },
]
