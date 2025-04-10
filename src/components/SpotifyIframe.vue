<template>
    <div class="spotify-iframe-wrapper">
      <iframe v-if="prominent"
        :src="'https://open.spotify.com/embed/track/' + trackId + '?utm_source=generator&theme=1'"
        width="100%"
        height="352"
        frameborder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style="border-radius:20px"
      ></iframe>
      <iframe v-else 
        :src="'https://open.spotify.com/embed/track/'  + trackId + '?utm_source=generator&theme=1'" 
        width="100%" 
        height="152" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        style="border-radius:20px" 
    ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      trackId: {
        type: String,
        required: true
      },
      prominent: {
        type: Boolean,
        default: false
      }
    }
  };
  </script>
  
  <style scoped>
  .spotify-iframe-wrapper {
    margin-bottom: 1rem;
  }
  </style>
  