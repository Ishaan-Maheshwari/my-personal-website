<template>
  <section class="projects-home">
    <ProjectsToolbar
      :filters="filters"
      :sortBy="sortBy"
      @update:filters="filters = $event"
      @update:sortBy="sortBy = $event"
      @reset="resetAll"
    />

    <ProjectsGrid :projects="visibleProjects" />
  </section>
</template>

<script setup>
import { ref, reactive, computed } from "vue"
import ProjectsGrid from "./ProjectsGrid.vue"
import ProjectsToolbar from "./ProjectsToolbar.vue"
import projectsData from "@/resources/projects/projects.json"

const projects = ref(projectsData.projects)

const filters = reactive({
  categories: [],
  status: null,
  difficulty: null
})

const sortBy = ref("recent")

function filterByCategory(project, categories) {
  if (!categories.length) return true
  return categories.some(cat => project.category.includes(cat))
}

function filterByStatus(project, status) {
  if (!status) return true
  return project.status === status
}

function filterByDifficulty(project, difficulty) {
  if (!difficulty) return true
  return project.difficulty === difficulty
}

const filteredProjects = computed(() => {
  return projects.value.filter(project =>
    filterByCategory(project, filters.categories) &&
    filterByStatus(project, filters.status) &&
    filterByDifficulty(project, filters.difficulty)
  )
})

function sortProjects(list, sortBy) {
  const sorted = [...list]

  if (sortBy === "recent") {
    sorted.sort((a, b) =>
      new Date(b.lastUpdated || 0) - new Date(a.lastUpdated || 0)
    )
  }

  if (sortBy === "difficulty") {
    const order = { advanced: 3, intermediate: 2, beginner: 1 }
    sorted.sort((a, b) =>
      (order[b.difficulty] || 0) - (order[a.difficulty] || 0)
    )
  }

  if (sortBy === "alpha") {
    sorted.sort((a, b) =>
      a.title.localeCompare(b.title)
    )
  }

  return sorted
}

function resetAll() {
  filters.categories = []
  filters.status = null
  filters.difficulty = null
  sortBy.value = "recent"
}


const visibleProjects = computed(() => {
  return sortProjects(filteredProjects.value, sortBy.value)
})
</script>
