<!-- src/components/Sidebar.vue -->
<template>
    <v-navigation-drawer
      app
      permanent 
      rounded="xl"
      class="glass-sidebar mx-4 my-4" 
      width="250"
    >
      <!-- <v-toolbar flat title="MySite" class="text-h6 text-primary" /> -->
      
      <v-list density="comfortable" nav>
        <v-list-item to="/" prepend-icon="mdi-home" rounded="xl" title="Home" />
        <v-list-item to="/blog" prepend-icon="mdi-post" rounded="xl" title="Blog" />
        <v-list-item to="/notes" prepend-icon="mdi-notebook" rounded="xl" title="Notes" />
        <v-list-item to="/projects" prepend-icon="mdi-folder-wrench" rounded="xl" title="tried my hands on these" />
        <v-list-item to="/gallery" prepend-icon="mdi-camera" rounded="xl" title="Some of my clicks" />
        <v-list-item to="/Playlist" prepend-icon="mdi-headphones" rounded="xl" title="I'm listening" />
        <v-list-item to="/about" prepend-icon="mdi-human-greeting-variant" rounded="xl" title="Hey, I am ..." />
        <v-list-item to="/connect" prepend-icon="mdi-at" rounded="xl" title="Let's connect" />
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <style scoped>
  .glass-sidebar {
    background: rgba(255, 255, 255, 0.15) !important;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 2px 0 20px rgba(255, 255, 255, 0.1);
  }
  </style>
  