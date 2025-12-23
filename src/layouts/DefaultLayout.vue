<!-- src/layouts/DefaultLayout.vue -->
<template>
  <v-app>
    <AppBar @toggle-sidebar="toggleSidebar" />
    <Sidebar :model-value="sidebarOpen" @update:modelValue="sidebarOpen = $event" />

    <v-main class="main-content">
      <v-container fluid class="pt-4 px-3 px-sm-4">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import AppBar from '@/components/Appbar.vue';
import Sidebar from '@/components/Sidebar.vue';

const route = useRoute();
const windowWidth = ref(window.innerWidth);
const sidebarOpen = ref(true);

const isMobile = computed(() => windowWidth.value < 768);

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const handleResize = () => {
  const newWidth = window.innerWidth;
  windowWidth.value = newWidth;
  
  // Auto-open sidebar on desktop
  if (newWidth >= 768) {
    sidebarOpen.value = true;
  } else {
    // Keep mobile drawer closed by default
    sidebarOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  // Initialize based on current width
  if (window.innerWidth >= 768) {
    sidebarOpen.value = true;
  } else {
    sidebarOpen.value = false;
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.main-content {
  min-height: 100vh;
}
</style>