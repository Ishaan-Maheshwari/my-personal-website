<template>
  <v-container class="py-10">
    <v-card class="glass-blog-reader pa-8 blog-bg" :style="{ backgroundImage: `url(${imageUrl})` }" >
      <div v-if="error" class="text-error text-center">
        <v-icon size="64" color="error">mdi-alert</v-icon>
        <h2 class="text-h5 mt-2">Blog not found.</h2>
      </div>

      <template v-else-if="!content">
        <div class="text-center">Loading blog post...</div>
      </template>

      <template v-else>
          <div id="blog-header" class="blog-header mb-6">
            <v-chip color="primary" class="font-weight-medium mb-2" flat>
              {{ frontmatter.tag || tagDisplay }}
            </v-chip>
            <v-chip v-if="isProtected" prepend-icon="mdi-lock" color="error" class="font-weight-medium mb-2" flat>
              Protected
            </v-chip>
            <!--  <form @submit.prevent="submitSecret">
            <v-text-field label="Secret Word" v-model="secretWord" 
              prepend-inner-icon="mdi-lock-open-variant" 
              append-icon="mdi-send"
              @click:append="submitSecret"
              variant="outlined">
            </v-text-field>
          </form> -->
            <h1 class="text-h4 font-weight-bold text-grey-dark-2">
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
import { is } from 'immutable'

const route = useRoute()
const { tag, slug } = route.params

const content = ref('')
const frontmatter = ref({})
const imageUrl = ref(null)
const error = ref(false)

const isProtected = ref(false)
const secretWord = ref('')

const submitSecret = () => {
    content.value = vigenereDecrypt(content.value, secretWord.value);
}

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
    imageUrl.value = frontmatter.value.backgroundImage || ''
    isProtected.value = frontmatter.value.isProtected || false
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

// Function to decrypt using the Vigenère Cipher
  function vigenereDecrypt(ciphertext, keyword) {
    let plaintext = '';
    let keywordIndex = 0;

    // Normalize keyword to uppercase
    keyword = keyword.toUpperCase();

    // Loop through each character in the ciphertext
    for (let i = 0; i < ciphertext.length; i++) {
      let char = ciphertext[i];

      // Only process alphabetic characters
      if (/[A-Za-z]/.test(char)) {
        let isUpperCase = char === char.toUpperCase();
        char = char.toUpperCase();  // Convert to uppercase for calculation

        let charCode = char.charCodeAt(0);
        let keyCode = keyword[keywordIndex % keyword.length].charCodeAt(0);

        // Calculate the shift value (A = 0, B = 1, ..., Z = 25)
        let shift = keyCode - 65;

        // Decrypt the letter
        let decryptedChar = String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);

        // If the original letter was lowercase, convert it back to lowercase
        if (!isUpperCase) {
          decryptedChar = decryptedChar.toLowerCase();
        }

        plaintext += decryptedChar;

        // Move to the next letter in the keyword
        keywordIndex++;
      } else {
        // If it's not an alphabet character, just add it as is (like spaces, punctuation, etc.)
        plaintext += char;
      }
    }

    return plaintext;
  }

</script>

<style scoped>
.glass-blog-reader {
  background: rgba(216, 211, 171, 0.788);
  backdrop-filter: blur(14px);
  border-radius: 16px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #1b1a1a;
}

.markdown-body {
  color: #000000;
  line-height: 1.8;
}

.blog-bg {
  background-image: url('/images/blog-backgrounds/fangel.jpg');
  background-blend-mode: color-dodge;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


.markdown-body h1,
.markdown-body h2,
.markdown-body h3 {
  color: #2e323d;
  margin-top: 1.5rem;
}

.blog-header h1 {
  font-family: 'Segoe UI', 'Roboto', sans-serif;
  color: teal;
}
</style>
