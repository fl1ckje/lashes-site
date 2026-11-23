<script setup>
import BaseSection from '../ui/BaseSection.vue'
import Eyebrow from '../ui/Eyebrow.vue'
import SectionTitle from '../ui/SectionTitle.vue'
import PhotoGallery from '../gallery/PhotoGallery.vue'
import { imageUrl } from '@/assets/images'
import { GALLERIES } from '@/data/gallery'

// файл → URL, плюс alt по шаблону «Мастер. Услуга, фото N»
const groups = GALLERIES.map((g) => ({
  ...g,
  photos: g.photos.map((p, i) => ({
    ...p,
    src: imageUrl(p.file),
    alt: `${g.name}. ${p.kind ?? g.kind}, фото ${i + 1}`,
  })),
}))
</script>

<template>
  <BaseSection id="works" class="section-y bg-works">
    <Eyebrow>Портфолио студии</Eyebrow>
    <SectionTitle>Работы наших мастеров</SectionTitle>
    <p>Нажми на фотографию, чтобы рассмотреть ресницы крупнее.</p>

    <template v-for="group in groups" :key="group.id">
      <h3 :id="group.id" class="mt-[2em] mb-3.75 scroll-mt-23.75 font-serif text-[36px] leading-[normal]">
        {{ group.name }}
      </h3>
      <PhotoGallery
        :photos="group.photos"
        :cols="group.cols"
        :cols-mobile="group.colsMobile"
        :ratio="group.ratio"
      />
    </template>
  </BaseSection>
</template>
