<template>
  <section class="obsession-card">
    <div class="header">
      <span class="label">Currently Obsessed With</span>
      <span class="pulse" />
    </div>

    <div class="content">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="obsession-item"
      >
        <div class="item-row">
          <!-- Optional Image -->
          <div v-if="item.image" class="image-wrap">
            <img :src="item.image" alt="" />
          </div>

          <!-- Text Content -->
          <div class="text-wrap">
            <p class="primary">“{{ item.primary }}”</p>

            <p v-if="item.secondary" class="secondary">
              {{ item.secondary }}
            </p>
          </div>
        </div>

        <p v-if="item.reflection" class="reflection">
          <a class="reflection-link" v-if="item.reflectionIsLink" :href=item.reflection target="_blank" rel="noopener noreferrer">
            <span class="reflection-label">{{ item.reflection }}</span>
          </a>
          <span v-else>{{ item.reflection }}</span>
        </p>
      </div>
    </div>

    <div class="footer">
      <span class="meta">
        {{ meta }}
      </span>
    </div>
  </section>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    /**
     * Each item:
     * {
     *   primary: String,
     *   secondary?: String,
     *   reflection?: String,
     *   image?: String
     * }
     */
  },
  meta: {
    type: String,
    default: "changes often"
  }
});
</script>

<style scoped>
.obsession-card {
  padding: 1.6rem 1.8rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
  color: #f5f5f5;
  max-width: 520px;
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

.pulse {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #7dd3fc;
  opacity: 0.6;
  animation: pulse 1.8s infinite ease-in-out;
}

.reflection-link {
  color: inherit;
  text-decoration: none;
  text-shadow: #7dd3fc 0 0 2px;
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}

/* CONTENT */
.content {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

.obsession-item {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

/* IMAGE + TEXT ROW */
.item-row {
  display: flex;
  gap: 0.9rem;
  align-items: flex-start;
}

.image-wrap {
  flex-shrink: 0;
  width: 150px;
  height: 150px;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
}

.image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.9) contrast(0.95);
}

/* TEXT */
.text-wrap {
  flex: 1;
}

.primary {
  font-size: 1.05rem;
  line-height: 1.5;
  font-weight: 500;
}

.secondary {
  margin-top: 0.25rem;
  font-size: 0.85rem;
  opacity: 0.7;
}

.reflection {
  font-size: 0.85rem;
  opacity: 0.85;
  line-height: 1.45;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin-left: 20; /* aligns under text when image exists */
}

/* FOOTER */
.footer {
  margin-top: 0.8rem;
  text-align: right;
}

.meta {
  font-size: 0.7rem;
  opacity: 0.45;
  font-style: italic;
}
</style>
