<template>
  <section ref="section" class="section future" :class="{ visible }">
    <p>
      I’m currently exploring multimodal AI, conversational agents,
      and perception systems for assistive and humanoid robotics.
    </p>

    <p class="closing">
      I try to build systems that listen —
      to data, to users,
      and to the quiet edge cases where real problems live.
    </p>
  </section>
</template>

<script>
export default {
  name: 'FutureSection',
  data: () => ({ visible: false }),
  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) this.visible = true
      },
      { threshold: 0.2 }
    )
    observer.observe(this.$refs.section)
  }
}
</script>

<style scoped>
.future {
  text-align: center;
}

.closing {
  margin-top: 2rem;
  font-style: italic;
  opacity: 0.6;
}

.section {
  opacity: 0;
  transition: opacity 1s ease;
}

.section.visible {
  opacity: 1;
}
</style>
