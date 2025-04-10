<template>
    <v-container class="py-16">
      <h1 class="text-h4 font-weight-bold text-center mb-10 text-white">
        Connect With Me
      </h1>
  
      <!-- Connect Cards -->
      <v-row class="justify-center mb-12" dense>
        <v-col
          v-for="connect in connects"
          :key="connect.id"
          cols="12"
          sm="6"
          md="4"
          class="d-flex justify-center"
        >
          <v-hover v-slot:default="{ isHovering, props }">
            <v-card
              v-bind="props"
              class="glass-connect-card pa-6 d-flex flex-column align-center text-center flex-fill"
              elevation="6"
              :class="{ 'hovered-card': isHovering }"
              @click="goTo(connect.url)"
            >
              <v-icon :color="connect.color" size="48">
                {{ connect.icon }}
              </v-icon>
              <h2 class="text-h6 font-weight-bold mt-3 text-white">
                {{ connect.name }}
              </h2>
              <p class="text-caption text-grey-lighten-2 mt-1">
                {{ connect.username }}
              </p>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
  
      <!-- Anonymous Message Form -->
      <AnonymousForm />
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const connects = ref([])
  const name = ref('')
  const message = ref('')
  const submitted = ref(false)
  const loading = ref(false)
  const error = ref(false)
  
  const goTo = (url) => {
    window.open(url, '_blank')
  }
  
  onMounted(async () => {
    const file = await import('@/resources/connects.json')
    connects.value = file.default.connects
  })

  const sendMessage = async () => {
    loading.value = true
    submitted.value = false
    error.value = false

    try {
        const res = await fetch('https://formspree.io/f/xgvarnwy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name.value,
            message: message.value
        })
        })

        if (res.ok) {
        submitted.value = true
        name.value = ''
        message.value = ''
        } else {
        error.value = true
        }
    } catch (err) {
        error.value = true
    }

    loading.value = false
  }

  </script>
  
  <style scoped>
  .glass-connect-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(18px);
    border-radius: 16px;
    transition: transform 0.2s, box-shadow 0.2s;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
  }
  
  .hovered-card {
    transform: translateY(-6px);
    box-shadow: 0 10px 32px rgba(255, 255, 255, 0.2);
  }
  
  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  </style>
  