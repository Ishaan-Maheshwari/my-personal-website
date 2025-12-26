<template>
  <section class="about-page">
    <HeroSection />
    <PhilosophySection />
    <WorkSection />
    <FutureSection />
  </section>
</template>

<script>
import HeroSection from './HeroSection.vue'
import PhilosophySection from './PhilosophySection.vue'
import WorkSection from './WorkSection.vue'
import FutureSection from './FutureSection.vue'

export default {
  name: 'AboutPage',
  components: {
    HeroSection,
    PhilosophySection,
    WorkSection,
    FutureSection
  }
}
</script>

<style scoped>
.about-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 6rem 1.5rem;
}
</style>
