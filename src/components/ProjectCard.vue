<template>
  <article
    class="project-card"
    tabindex="0"
    role="link"
    @click="goToProject"
    @keyup.enter="goToProject"
  >
    <!-- Thumbnail -->
    <header class="thumbnail">
      <img
        v-if="project.thumbnail"
        :src="project.thumbnail"
        :alt="project.title + ' thumbnail'"
        loading="lazy"
      />

      <div v-else class="thumbnail-fallback">
        {{ initials }}
      </div>

      <span
        class="status-badge"
        :class="project.status"
      >
        {{ statusLabel }}
      </span>
    </header>

    <!-- Content -->
    <section class="content">
      <h3 class="title">
        {{ project.title }}
      </h3>

      <p class="description">
        {{ project.shortDescription }}
      </p>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <ul class="tech-stack">
        <li
          v-for="tech in project.techStack"
          :key="tech"
        >
          {{ tech }}
        </li>
      </ul>

      <span class="cta">
        View project →
      </span>
    </footer>
  </article>
</template>

<script setup>
import { computed } from "vue"
import { useRouter } from "vue-router"

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const router = useRouter()

function goToProject() {
  router.push(props.project.links.detail)
}

const initials = computed(() => {
  if (!props.project.title) return ""
  return props.project.title
    .split(" ")
    .map(word => word[0])
    .join("")
    .slice(0, 2)
})

const statusLabel = computed(() => {
  const s = props.project.status || ""
  return s.charAt(0).toUpperCase() + s.slice(1)
})
</script>

<style scoped>
.project-card {
  background: var(--card-bg, #0f1115);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  cursor: pointer;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.project-card:hover,
.project-card:focus {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  outline: none;
}

/* ---------- Thumbnail ---------- */

.thumbnail {
  position: relative;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, #1a1d23, #0f1115);
  overflow: hidden;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.project-card:hover .thumbnail img {
  transform: scale(1.05);
}

.thumbnail-fallback {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  font-size: 2rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
}

/* ---------- Status Badge ---------- */

.status-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}

.status-badge.active {
  background: rgba(46, 204, 113, 0.18);
  color: #2ecc71;
}

.status-badge.completed {
  background: rgba(52, 152, 219, 0.18);
  color: #3498db;
}

.status-badge.research {
  background: rgba(241, 196, 15, 0.18);
  color: #f1c40f;
}

/* ---------- Content ---------- */

.content {
  padding: 16px 16px 8px;
}

.title {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0 0 6px;
  color: #ffffff;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.description {
  font-size: 0.9rem;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.65);

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ---------- Footer ---------- */

.footer {
  margin-top: auto;
  padding: 12px 16px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.tech-stack {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}

.tech-stack li {
  font-size: 0.7rem;
  padding: 4px 8px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.75);
}

/* ---------- CTA ---------- */

.cta {
  font-size: 0.75rem;
  font-weight: 500;
  color: #8ab4f8;
  white-space: nowrap;
}

.project-card:hover .cta {
  text-decoration: underline;
}
</style>
