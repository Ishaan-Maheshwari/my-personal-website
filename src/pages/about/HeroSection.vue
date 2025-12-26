<template>
  <section class="hero">
    <h1 class="reveal">I’m Ishaan.</h1>
    <h2 class="reveal delay-1">
      I build technology that tries to understand people before optimizing for them.
    </h2>
    <p class="reveal delay-2">
      I’m an engineer working at the intersection of artificial intelligence,
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

.reveal {
  opacity: 0;
  transform: translateY(16px);
  animation: fadeUp 0.8s ease forwards;
}

.delay-1 { animation-delay: 0.15s; }
.delay-2 { animation-delay: 0.3s; }

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
