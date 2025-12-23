<template>
  <section class="active-project-card">
    <div class="header">
      <span class="label">Active Project</span>
      <span class="status-dot" :class="status" />
    </div>

    <div class="body">
      <!-- Optional image / visual -->
      <div v-if="image" class="project-image">
        <img :src="image" alt="" />
      </div>

      <div class="project-content">
        <h3 class="title">{{ title }}</h3>

        <p class="tagline" v-if="tagline">
          {{ tagline }}
        </p>

        <p class="description">
          {{ description }}
        </p>

        <div class="meta-row">
          <span class="chip" v-for="tag in tags" :key="tag">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <div class="footer">
      <span class="time">{{ updated }}</span>
      <a v-if="link" :href="link" class="link">
        peek ↗
      </a>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  tagline: String,
  description: String,
  image: String,
  tags: {
    type: Array,
    default: () => []
  },
  status: {
    type: String,
    default: "building" 
    // thinking | building | tinkering | paused
  },
  updated: {
    type: String,
    default: "updated recently"
  },
  link: String
});
</script>

<style scoped>
.active-project-card {
  padding: 1.6rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.35);
  color: #f5f5f5;
  max-width: 560px;
}

/* HEADER */
.header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.2rem;
}

.label {
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0.7;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  opacity: 0.8;
}

/* status colors */
.status-dot.thinking { background: #fde68a; }
.status-dot.building { background: #7dd3fc; }
.status-dot.tinkering { background: #a7f3d0; }
.status-dot.paused { background: #fca5a5; }

/* BODY */
.body {
  display: flex;
  gap: 1.2rem;
}

.project-image {
  width: 150px;
  height: 150px;
  border-radius: 14px;
  overflow: hidden;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.12);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.9) contrast(0.95);
}

/* CONTENT */
.project-content {
  flex: 1;
}

.title {
  font-size: 1.15rem;
  font-weight: 600;
}

.tagline {
  margin-top: 0.3rem;
  font-size: 0.9rem;
  opacity: 0.8;
}

.description {
  margin-top: 0.6rem;
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.9;
}

/* TAGS */
.meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.8rem;
}

.chip {
  font-size: 0.7rem;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  opacity: 0.85;
}

/* FOOTER */
.footer {
  margin-top: 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.time {
  font-size: 0.7rem;
  opacity: 0.45;
  font-style: italic;
}

.link {
  font-size: 0.75rem;
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.link:hover {
  opacity: 1;
}
</style>
