<!-- src/pages/NotesPage.vue -->
<template>
    <v-container fluid class="py-6 d-flex flex-column align-center">
      <h1 class="text-h4 font-weight-bold mb-6 text-white">
        <i class="mdi mdi-notebook"></i>
        My Notes
       </h1>

        <!-- Subtext Container -->
        <v-card class="glass-subtext-card px-6 py-3 mb-6" flat>
        <p class="text-body-2 text-white text-center">
            A growing collection of personal study notes, guides, and cheatsheets curated as I learn and revise. Click on a topic to dive in!
        </p>
        </v-card>
  
      <v-row
        class="justify-center"
        align="center"
        dense
      >
        <v-col
          v-for="(topic, index) in notesTopics"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card
            class="glass-note-card pa-6 d-flex flex-column justify-space-between"
            hover
          >
            <h2 class="text-h6 font-weight-medium mb-2 text-white">
              {{ topic.title }}
            </h2>
            <p class="text-body-2 text-grey-lighten-2">{{ topic.description }}</p>
  
            <v-btn
              class="mt-4 align-self-end"
              color="primary"
              variant="text"
              :to="topic.link"
            >
              View Notes →
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  const notesTopics = [
    {
      title: 'Data Structures',
      description: 'Core concepts, implementations, and cheat-sheets.',
      link: '/notes/data-structures',
    },
    {
      title: 'Machine Learning',
      description: 'Algorithms, math intuition, and key formulas.',
      link: '/notes/machine-learning',
    },
    {
      title: 'Web Development',
      description: 'Frontend, backend, deployment — all in one place.',
      link: '/notes/web-dev',
    },
    {
      title: 'Databases',
      description: 'SQL, NoSQL, indexing, and query optimization.',
      link: '/notes/databases',
    },
    {
      title: 'Operating Systems',
      description: 'Processes, memory, file systems, and more.',
      link: '/notes/os',
    },
    {
      title: 'System Design',
      description: 'Scalability, architecture patterns, and best practices.',
      link: '/notes/system-design',
    },
  ]
  </script>
  
  <style scoped>
  .glass-note-card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    min-height: 200px;
  }
  .glass-note-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
  }
  </style>
  