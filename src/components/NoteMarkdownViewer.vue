<template>
    <v-container class="py-2">
      <v-breadcrumbs
        class="mb-2 text-grey"
        :items="breadcrumbs"
        divider=">"
        density="compact"
      />
  
      <v-card class="glass-note-reader pa-6" v-if="!error">
        <div v-if="!content" class="text-center">Loading note...</div>
        <div v-else v-html="renderedMarkdown" class="markdown-body" />
      </v-card>

      <v-card
        class="glass-note-reader pa-6 text-center d-flex flex-column align-center justify-center"
        v-else
      >
        <v-icon color="error" size="64">mdi-alert-circle-outline</v-icon>
        <h2 class="mt-4 text-h5 font-weight-bold text-error">404 — Note Not Found</h2>
        <p class="text-subtitle-1 mt-2">
          Sorry! We couldn’t find this topic or subtopic.<br>
          Check the URL or go back to the notes list.
        </p>
        <v-btn class="mt-4" color="danger" to="/notes">Back to Notes</v-btn>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  import { ref, computed, watch, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router/auto'
  import { marked } from 'marked'
  
  const route = useRoute()
  const router = useRouter()
  
  const content = ref('')
  const error = ref(null)
  
  const topic = route.params.topic
  const subtopic = route.params.subtopic || 'home'
  
  const loadMarkdown = async () => {
    try {
      const file = await import(`@/resources/notes/${topic}/${subtopic}.md`)
      const response = await fetch(file.default)
      content.value = await response.text()
    } catch (err) {
      error.value = 'Note not found.'
      content.value = ''
      console.error(err)
    }
  }
  
  watch(() => route.path, loadMarkdown)
  onMounted(loadMarkdown)
  
  const renderedMarkdown = computed(() => marked(content.value))
  
  const breadcrumbs = computed(() => {
    const crumbList = [
      // { title: 'Home', to: '/' },
      { title: 'Notes', to: '/notes' },
      { title: topic.replace(/-/g, ' '), to: `/notes/${topic}` },
    ]
    if (route.params.subtopic) {
      crumbList.push({
        title: route.params.subtopic.replace(/-/g, ' '),
        to: `/notes/${topic}/${route.params.subtopic}`,
      })
    }
    return crumbList
  })
  </script>
  
  <style scoped>
  .glass-note-reader {
    background: rgba(239, 254, 255, 0.7);
    backdrop-filter: blur(12px);
    border-radius: 16px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 187, 0, 0.15);
    color: #000;
    min-height: 60vh;
  }
  .markdown-body h1, .markdown-body h2 {
    color: #fff;
  }
  .markdown-body p {
    color: #ddd;
  }
  </style>
  