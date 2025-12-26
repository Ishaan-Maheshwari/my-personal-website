<template>
  <section ref="section" class="work" :class="{ visible }">
    <div class="work-text">
      <h2>How I Build</h2>
      <p>
        I work on assistive and AI-driven systems that operate
        in sensitive, real-world contexts.
      </p>
    </div>

    <div class="work-steps">
      <div v-for="(step, i) in steps"
           :key="i"
           class="step"
           :style="{ transitionDelay: `${i * 0.15}s` }">
        {{ step }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WorkSection',
  data: () => ({
    visible: false,
    steps: [
      'Observe real users',
      'Understand constraints',
      'Start with baselines',
      'Add learning carefully'
    ]
  }),
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
.work {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 8rem 0;
}

.work-text h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.work-steps .step {
  margin-bottom: 1rem;
  padding: 1rem 1.2rem;
  border-left: 3px solid currentColor;
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.6s ease;
}

.work.visible .step {
  opacity: 1;
  transform: translateX(0);
}
</style>
