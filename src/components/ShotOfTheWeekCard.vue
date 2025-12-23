<template>
  <section class="shot-card">
    <div class="header">
      <span class="label">Shot of the Week</span>
      <span class="week">{{ week }}</span>
    </div>

    <div class="image-wrap">
      <img :src="image" alt="Shot of the week" />
    </div>

    <div class="caption-area" v-if="caption || meta">
      <p v-if="caption" class="caption">
        {{ caption }}
      </p>

      <p v-if="meta" class="meta">
        {{ meta }}
      </p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  caption: String,
  meta: String, 
  // e.g. "Evening · Chennai" or "Monsoon light"
  week: {
    type: String,
    default: "this week"
  }
});
</script>

<style scoped>
.shot-card {
  padding: 1.4rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.35);
  color: #f5f5f5;
  max-width: 520px;
}

/* HEADER */
.header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.8rem;
}

.label {
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0.7;
}

.week {
  font-size: 0.7rem;
  opacity: 0.45;
  font-style: italic;
}

/* IMAGE */
.image-wrap {
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
}

.image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.95) contrast(0.95);
  transition: transform 0.6s ease;
}

.image-wrap img:hover {
  transform: scale(1.03);
}

/* CAPTION */
.caption-area {
  margin-top: 0.9rem;
}

.caption {
  font-size: 0.9rem;
  line-height: 1.45;
  opacity: 0.9;
}

.meta {
  margin-top: 0.3rem;
  font-size: 0.75rem;
  opacity: 0.5;
  font-style: italic;
}
</style>
