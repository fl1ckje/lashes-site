<script setup>
import SiteHeader from './components/layout/SiteHeader.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import FloatingCta from './components/layout/FloatingCta.vue'
import HeroSection from './components/sections/HeroSection.vue'
import IntroSection from './components/sections/IntroSection.vue'
import StatsSection from './components/sections/StatsSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import WorksSection from './components/sections/WorksSection.vue'
import MastersSection from './components/sections/MastersSection.vue'
import EducationSection from './components/sections/EducationSection.vue'
import FaqSection from './components/sections/FaqSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <IntroSection />
    <StatsSection />
    <ServicesSection />
    <WorksSection />
    <MastersSection />
    <EducationSection />
    <FaqSection />
    <ContactSection />
  </main>
  <SiteFooter />
  <FloatingCta />
</template>
