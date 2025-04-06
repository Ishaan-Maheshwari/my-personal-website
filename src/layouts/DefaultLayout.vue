<template>
  <v-app>
    <AppBar/>
    <Sidebar/>

    <v-main class="main-content">
      
      <v-container fluid class="pt-8">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
</script>

<style scoped>
.main-content {
  /* padding-left: 250px;  */
  min-height: 100vh;
}
</style>
