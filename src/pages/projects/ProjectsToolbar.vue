<template>
  <div class="projects-toolbar">
    <!-- Categories -->
    <div class="filter-group">
      <span class="label">Category</span>
      <div class="chips">
        <button
          v-for="cat in categories"
          :key="cat"
          :class="{ active: filters.categories.includes(cat) }"
          @click="toggleCategory(cat)"
        >
          {{ formatLabel(cat) }}
        </button>
      </div>
    </div>

    <!-- Status -->
    <div class="filter-group">
      <span class="label">Status</span>
      <select
        :value="filters.status"
        @change="updateStatus($event.target.value)"
      >
        <option value="">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
        <option value="research">Research</option>
      </select>
    </div>

    <!-- Sort -->
    <div class="filter-group">
      <span class="label">Sort</span>
      <select
        :value="sortBy"
        @change="emit('update:sortBy', $event.target.value)"
      >
        <option value="recent">Recently Updated</option>
        <option value="difficulty">Difficulty</option>
        <option value="alpha">Alphabetical</option>
      </select>
    </div>

    <!-- Reset -->
    <button
      class="reset-btn"
      @click="resetFilters"
    >
      Reset
    </button>
  </div>
</template>

<script setup>
import { CATEGORIES } from "@/config/projectTaxonomy"

const props = defineProps({
  filters: {
    type: Object,
    required: true
  },
  sortBy: {
    type: String,
    required: true
  }
})

const emit = defineEmits([
  "update:filters",
  "update:sortBy",
  "reset"
])

const categories = CATEGORIES

function toggleCategory(category) {
  const current = props.filters.categories
  const nextCategories = current.includes(category)
    ? current.filter(c => c !== category)
    : [...current, category]

  emit("update:filters", {
    ...props.filters,
    categories: nextCategories
  })
}

function updateStatus(value) {
  emit("update:filters", {
    ...props.filters,
    status: value || null
  })
}

function resetFilters() {
  emit("reset")
}

function formatLabel(value) {
  return value
    .split("-")
    .map(v => v.charAt(0).toUpperCase() + v.slice(1))
    .join(" ")
}
</script>

<style scoped>
.projects-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 14px 20px;
  align-items: center;

  margin-bottom: 28px;
}

/* ---------- Filter Group ---------- */

.filter-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.55);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* ---------- Category Chips ---------- */

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chips button {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;

  padding: 6px 12px;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.75);

  cursor: pointer;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

.chips button:hover {
  background: rgba(255, 255, 255, 0.12);
}

.chips button.active {
  background: rgba(138, 180, 248, 0.18);
  border-color: rgba(138, 180, 248, 0.35);
  color: #8ab4f8;
}

/* ---------- Selects ---------- */

select {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;

  padding: 6px 10px;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);

  outline: none;
}

select:hover {
  border-color: rgba(255, 255, 255, 0.2);
}

select option {
  background: #0f1115;
  color: #fff;
}

/* ---------- Reset Button ---------- */

.reset-btn {
  margin-left: auto;

  background: transparent;
  border: none;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.55);

  cursor: pointer;
  transition: color 0.2s ease;
}

.reset-btn:hover {
  color: #ffffff;
}

/* ---------- Responsive ---------- */

@media (max-width: 640px) {
  .projects-toolbar {
    align-items: flex-start;
  }

  .reset-btn {
    margin-left: 0;
  }
}
</style>
