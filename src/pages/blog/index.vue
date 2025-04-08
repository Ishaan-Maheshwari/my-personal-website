<template>
  <v-container class="pb-10">
    <!-- <h1 class="text-h4 font-weight-bold text-white mb-6">📝 My Blog</h1> -->

    <!-- 🔍 Search Bar -->
    <v-text-field
      v-model="searchQuery"
      prepend-inner-icon="mdi-magnify"
      label="Search posts..."
      variant="solo-filled"
      hide-details
      class="mb-6 glass-search"
    />

    <!-- 🏷️ Tag Filters -->
    <v-slide-group show-arrows class="mb-8">
      <v-slide-group-item
        v-for="tag in allTags"
        :key="tag"
      >
        <v-chip
          :color="activeTag === tag ? 'primary' : 'white'"
          :variant="activeTag === tag ? 'elevated' : 'outlined'"
          class="ma-1 text-capitalize"
          @click="toggleTag(tag)"
        >
          {{ tag }}
        </v-chip>
      </v-slide-group-item>

      <v-chip
        color="red"
        variant="text"
        class="ma-1"
        v-if="activeTag"
        @click="clearTag"
      >
        ✖ Clear
      </v-chip>
    </v-slide-group>

    <!-- 🧾 Filtered Blog Cards -->
    <v-row dense>
      <v-col
        v-for="post in filteredBlogs"
        :key="post.slug"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card
          :to="`/blog/${post.tag}/${post.slug}`"
          class="glass-blog-card overflow-hidden"
          hover
        >
          <v-img
            v-if="post.imageUrl"
            :src="post.imageUrl"
            height="160"
            cover
            class="blog-image"
          />

          <v-card-text>
            <v-chip
              small
              color="primary"
              class="mb-2 text-white font-weight-medium"
              label
            >
              {{ post.tag }}
            </v-chip>

            <h3 class="text-h6 font-weight-bold text-white">
              {{ post.title }}
            </h3>

            <p class="text-caption mt-1" style="color: #ccc;">
              {{ post.description }}
            </p>
          </v-card-text>

          <v-card-actions class="px-4 pb-3 justify-end">
            <span class="text-caption" style="color: #aaa;">
              {{ post.date }}
            </span>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import blogList from '@/assets/blogIndex.json'
import { ref, computed } from 'vue'

const searchQuery = ref('')
const activeTag = ref(null)

const allTags = [...new Set(blogList.map(post => post.tag))]

const toggleTag = (tag) => {
  activeTag.value = activeTag.value === tag ? null : tag
}

const clearTag = () => {
  activeTag.value = null
}

const filteredBlogs = computed(() => {
  return blogList.filter(post => {
    const matchTag = activeTag.value ? post.tag === activeTag.value : true
    const matchSearch = searchQuery.value
      ? post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        post.tag.toLowerCase().includes(searchQuery.value.toLowerCase())
      : true
    return matchTag && matchSearch
  })
})
</script>

<style scoped>
.glass-blog-card {
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(16px);
  border-radius: 14px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.glass-blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
}

.blog-image {
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  object-fit: cover;
}

.glass-search .v-input__control{
  background: rgba(255, 255, 255, 0.07) !important;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white !important;
}
</style>
