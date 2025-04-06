<!-- src/components/AppBar.vue -->
<template>
    <v-app-bar
      class="glass-app-bar px-4"
      height="64"
      density="comfortable"
      rounded="sm"
    >
      <v-toolbar-title class="text-h5 font-weight-bold">
        ιѕнααη мαнєѕнωαяι
        <!-- 丨丂卄卂卂几 爪卂卄乇丂卄山卂尺丨 -->
      </v-toolbar-title>
  
      <v-spacer />
  
      <!-- Optional: Add any icons, theme toggle, etc. -->
      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->
    </v-app-bar>
  </template>
  
  <style scoped>
  .glass-app-bar {
    background: rgba(255, 255, 255, 0.15) !important;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    z-index: 10;
  }
  </style>
  