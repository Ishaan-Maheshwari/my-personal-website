<template>
  <section class="hero">
    <h1 class="hero-line">
      I build technology that <span>listens</span>.
    </h1>

    <p class="hero-sub">
      I’m Ishaan — an engineer working at the intersection of AI,
      assistive technology, and human-centered design.
    </p>
  </section>
</template>

<script>
export default { name: 'HeroSection' }
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-line {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 600;
  animation: fadeUp 1s ease forwards;
}

.hero-line span {
  position: relative;
}

.hero-line span::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 3px;
  background: currentColor;
  opacity: 0.3;
}

.hero-sub {
  margin-top: 2rem;
  max-width: 600px;
  opacity: 0;
  animation: fadeUp 1s ease forwards;
  animation-delay: 0.4s;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
