<template>
    <v-container class="py-10">
      <h1 class="text-h4 font-weight-bold mb-6 text-white text-center">My Gallery</h1>
  
      <v-row justify="center" class="mb-6">
        <v-chip-group
          v-model="selectedCategory"
          active-class="glass-chip-active"
          column
        >
          <v-chip
            v-for="category in categories"
            :key="category"
            filter
            class="glass-chip"
          >
            {{ category }}
          </v-chip>
        </v-chip-group>
      </v-row>
  
      <v-row>
        <v-col
          v-for="image in filteredImages"
          :key="image.id"
          cols="12"
          sm="6"
          md="4"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="glass-card gallery-card"
              height="300"
              v-bind="props"
              @click="openPreview(image)"
            >
              <v-img
                :src="image.src"
                height="100%"
                class="rounded"
                cover
              >
                <template v-slot:placeholder>
                  <v-row
                    align="center"
                    justify="center"
                    class="fill-height"
                  >
                    <v-progress-circular indeterminate color="white" />
                  </v-row>
                </template>
  
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex align-center justify-center preview-overlay"
                  >
                    <v-icon size="40" color="white">mdi-eye</v-icon>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
  
      <!-- Lightbox -->
      <v-dialog v-model="previewDialog" max-width="800px">
        <v-img :src="previewImage?.src" contain class="preview-image"></v-img>
      </v-dialog>
    </v-container>
  </template>
  
<script setup>
  import { ref, computed } from 'vue'
  
  const selectedCategory = ref(null)
  const previewDialog = ref(false)
  const previewImage = ref(null)
  
  const galleryImages = ref([
    { id: 1, src: '/images/gallery/project1.jpg', category: 'Projects' },
    { id: 2, src: '/images/gallery/event1.jpg', category: 'Events' },
    { id: 3, src: '/images/gallery/nature1.jpg', category: 'Nature' },
    { id: 4, src: '/images/gallery/project2.jpg', category: 'Projects' },
    { id: 5, src: '/images/gallery/event2.jpg', category: 'Events' },
    { id: 6, src: '/images/gallery/nature2.jpg', category: 'Nature' },
  ])
  
  const categories = computed(() => ['All', ...new Set(galleryImages.value.map(i => i.category))])
  
  const filteredImages = computed(() => {
    if (!selectedCategory.value || selectedCategory.value === 'All') {
      return galleryImages.value
    }
    return galleryImages.value.filter(img => img.category === selectedCategory.value)
  })
  
  const openPreview = (image) => {
    previewImage.value = image
    previewDialog.value = true
  }
  </script>
  
  <style scoped>
  .gallery-card {
    cursor: pointer;
    overflow: hidden;
  }
  
  .preview-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    inset: 0;
  }
  
  .glass-chip {
    background: rgba(255, 255, 255, 0.07);
    backdrop-filter: blur(10px);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin: 0 8px 8px 0;
  }
  
  .glass-chip-active {
    background: rgba(255, 255, 255, 0.2) !important;
    font-weight: bold;
  }

  .preview-image{
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 4px 16px rgba(255, 255, 255, 0.1);
  }
  </style>
  