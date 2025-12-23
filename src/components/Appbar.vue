<!-- src/components/AppBar.vue -->
<template>
  <v-app-bar
    class="glass-app-bar px-3 px-sm-4"
    :height="isSmallScreen ? 56 : 64"
    density="comfortable"
    rounded="sm"
  >
    <!-- Hamburger menu for mobile -->
    <v-btn
      v-if="isSmallScreen"
      icon
      size="small"
      @click="$emit('toggle-sidebar')"
      class="me-2"
    >
      <v-icon size="small">mdi-menu</v-icon>
    </v-btn>

    <v-toolbar-title class="text-h6 text-sm-h5 font-weight-bold">
      <span class="hidden-xs-only">ιѕнααη мαнєѕнωαяι</span>
      <span class="hidden-sm-and-up">ιѕн</span>
    </v-toolbar-title>

    <v-spacer />
  </v-app-bar>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

defineEmits(['toggle-sidebar']);

const windowWidth = ref(window.innerWidth);

const isSmallScreen = computed(() => windowWidth.value < 768);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.glass-app-bar {
  background: rgba(255, 255, 255, 0.15) !important;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 10;
}

/* Hide full title on mobile */
.hidden-xs-only {
  display: none;
}

.hidden-sm-and-up {
  display: none;
}

@media (min-width: 600px) {
  .hidden-xs-only {
    display: inline;
  }

  .hidden-sm-and-up {
    display: none;
  }
}
</style>