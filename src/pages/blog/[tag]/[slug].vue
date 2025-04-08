<template>
  <v-container class="py-10">
    <v-card class="glass-blog-reader pa-8">
      <div v-if="error" class="text-error text-center">
        <v-icon size="64" color="error">mdi-alert</v-icon>
        <h2 class="text-h5 mt-2">Blog not found.</h2>
      </div>

      <template v-else-if="!content">
        <div class="text-center">Loading blog post...</div>
      </template>

      <template v-else>
        <div id="blog-header" class="blog-header mb-6">
          <v-chip color="primary" class="text-white font-weight-medium mb-2" label>
            {{ frontmatter.tag || tagDisplay }}
          </v-chip>
          <h1 class="text-h4 font-weight-bold text-white">
            {{ frontmatter.title || titleDisplay }}
          </h1>
          <p class="text-caption text-grey-lighten-2 mt-1">
            {{ frontmatter.date }}
          </p>
        </div>

        <div v-html="renderedMarkdown" class="markdown-body" />
      </template>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router/auto'
import { marked } from 'marked'
import matter from 'gray-matter'

const route = useRoute()
const { tag, slug } = route.params

const content = ref('')
const frontmatter = ref({})
const error = ref(false)

const loadMarkdown = async () => {
  content.value = ''
  frontmatter.value = {}
  error.value = false

  try {
    const file = await import(`@/resources/blogs/${tag}/${slug}.md`)
    const res = await fetch(file.default)
    const raw = await res.text()

    const parsed = matter(raw)
    content.value = parsed.content
    frontmatter.value = parsed.data

    console.log(parsed)
  } catch (err) {
    console.error(err)
    error.value = true
  }
}

onMounted(loadMarkdown)
watch(() => route.path, loadMarkdown)

const renderedMarkdown = computed(() => marked(content.value || ''))

const tagDisplay = computed(() =>
  tag.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
)
const titleDisplay = computed(() =>
  slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
)
</script>

<style scoped>
.glass-blog-reader {
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(14px);
  border-radius: 16px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #fff;
}

.markdown-body {
  color: #ddd;
  line-height: 1.8;
}
.markdown-body h1,
.markdown-body h2,
.markdown-body h3 {
  color: #fff;
  margin-top: 1.5rem;
}

.blog-header h1 {
  font-family: 'Segoe UI', 'Roboto', sans-serif;
}
</style>
