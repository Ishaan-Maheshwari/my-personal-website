<!-- src/components/Sidebar.vue -->
<template>
  <v-navigation-drawer
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :permanent="!isMobile"
    :temporary="isMobile"
    :width="250"
    rounded="xl"
    class="glass-sidebar"
    touch-without-overlay
    @keydown.esc="$emit('update:modelValue', false)"
    scrim-color="rgba(0, 0, 0, 0.5)"
  >
    <v-list density="comfortable" nav class="pt-2">
      <v-list-item
        to="/"
        prepend-icon="mdi-home"
        rounded="xl"
        title="Home"
        @click="handleNavClick"
      />
      <v-list-item
        to="/blog"
        prepend-icon="mdi-post"
        rounded="xl"
        title="Blog"
        @click="handleNavClick"
      />
      <v-list-item
        to="/notes"
        prepend-icon="mdi-notebook"
        rounded="xl"
        title="Notes"
        @click="handleNavClick"
      />
      <v-list-item
        to="/projects"
        prepend-icon="mdi-folder-wrench"
        rounded="xl"
        title="Projects"
        @click="handleNavClick"
      />
      <v-list-item
        to="/gallery"
        prepend-icon="mdi-camera"
        rounded="xl"
        title="Gallery"
        @click="handleNavClick"
      />
      <v-list-item
        to="/Playlist"
        prepend-icon="mdi-headphones"
        rounded="xl"
        title="Playlist"
        @click="handleNavClick"
      />
      <v-list-item
        to="/about"
        prepend-icon="mdi-human-greeting-variant"
        rounded="xl"
        title="About"
        @click="handleNavClick"
      />
      <v-list-item
        to="/connect"
        prepend-icon="mdi-at"
        rounded="xl"
        title="Connect"
        @click="handleNavClick"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(['update:modelValue']);
const route = useRoute();

const windowWidth = ref(window.innerWidth);

const isMobile = computed(() => windowWidth.value < 768);

const drawerStyle = computed(() => {
  return {};
});

const handleResize = () => {
  windowWidth.value = window.innerWidth;
  // If resizing to desktop size, ensure drawer is visible
  if (windowWidth.value >= 768 && !props.modelValue) {
    emit('update:modelValue', true);
  }
};

const handleNavClick = () => {
  // Close drawer on mobile after navigation
  if (isMobile.value) {
    emit('update:modelValue', false);
  }
};

// Watch for route changes to close mobile drawer
watch(() => route.path, () => {
  if (isMobile.value) {
    emit('update:modelValue', false);
  }
});

onMounted(() => {
  window.addEventListener('resize', handleResize);
  // Ensure drawer is open on desktop on mount
  if (windowWidth.value >= 768) {
    emit('update:modelValue', true);
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.glass-sidebar {
  background: rgba(255, 255, 255, 0.15) !important;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 2px 0 20px rgba(255, 255, 255, 0.1);
  overflow-y: auto;
  scrollbar-color: #888 transparent;
  border-radius: 0px 24px 24px 0px !important;
}

/* Mobile - Temporary drawer */
@media (max-width: 767px) {
  .glass-sidebar {
    border-right: none !important;
    box-shadow: -2px 0 20px rgba(0, 0, 0, 0.2) !important;
    border-radius: 0 !important;
  }
}
</style>