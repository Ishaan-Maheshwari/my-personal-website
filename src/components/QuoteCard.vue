<!-- src/components/QuoteCard.vue -->
<template>
    <v-card class="glass-quote-card pa-0" width="820" height="200">
      <v-img
        src="https://api.viewbits.com/v1/zenquotes?mode=image"
        alt="Inspirational Quote"
        width="100%"
        height="100%"
        cover
        class="rounded-xl"
      />
    </v-card>
  </template>
  
  <style scoped>
  .glass-quote-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 25px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  </style>
  