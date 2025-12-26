<template>
  <section ref="section" class="section" :class="{ visible }">
    <h3>Philosophy</h3>
    <p>
      I build for people who are often overlooked by default design assumptions —
      children, the elderly, and individuals with speech or sensory impairments.
    </p>
    <p>
      I believe good technology should feel calm, forgiving,
      and quietly supportive.
    </p>
  </section>
</template>

<script>
export default {
  name: 'PhilosophySection',
  data: () => ({ visible: false }),
  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => (this.visible = entry.isIntersecting),
      { threshold: 0.3 }
    )
    observer.observe(this.$refs.section)
  }
}
</script>

<style scoped>
.philosophy {
  margin: 8rem 0;
  margin-left: 20%;
  max-width: 500px;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

.philosophy.visible {
  opacity: 1;
  transform: translateY(0);
}

.soft {
  margin-top: 1.5rem;
  font-style: italic;
  opacity: 0.7;
}

.section {
  opacity: 0;
  transform: translateY(24px);
  transition: all 0.7s ease;
}

.section.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
