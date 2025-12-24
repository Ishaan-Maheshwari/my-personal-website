<template>
  <section class="projects-grid">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />

    <div v-if="!projects.length" class="empty-state">
      <p>No projects match the selected filters.</p>
      <p class="hint">Try adjusting or clearing filters.</p>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from "@/components/ProjectCard.vue"

defineProps({
  projects: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
</style>

