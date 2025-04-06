<!-- src/pages/Home.vue -->
<template>
  <v-container fluid class="d-flex flex-wrap justify-center ga-6">

    <QuoteCard/>

    <!-- Dad Joke Card -->
    <v-card class="glass glass-card" width="400">
      <v-card-title class="text-h6 text-primary">LOL, read this one ...</v-card-title>
      <v-card-text class="text-body-1">
        <div v-if="joke">{{ joke }}</div>
        <div v-else>Loading a hilarious joke...</div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" prepend-icon="mdi-emoticon-lol-outline" @click="fetchJoke" variant="text">
          One more
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- Weather Card -->
    <!-- <v-card class="glass-card glass" width="400">
      <v-card-title class="text-h6 text-primary">🌤 Weather in Chennai</v-card-title>
      <v-card-text>
        <div v-if="weather">
          <p>🌡 Temp: {{ weather.temp }}°C</p>
          <p>💧 Humidity: {{ weather.humidity }}%</p>
          <p>🌬 Wind: {{ weather.wind }} km/h</p>
        </div>
        <div v-else>Loading weather...</div>
      </v-card-text>
    </v-card> -->

    <v-card class="glass-card glass" width="400" max-width="100%">
      <v-card-title class="text-h6 text-center text-primary font-weight-bold">
        🌤 Weather in Chennai
      </v-card-title>
      <v-card-text class="pa-3">
        <div v-if="weather" class="text-center">
          <div class="d-flex mb-2">
            <v-icon class="text-h5" color="primary">mdi-thermometer</v-icon>
            <p class="ml-2 text-h6">{{ weather.temp }}°C</p>
          </div>
          <div class="d-flex mb-2">
            <v-icon class="text-h5" color="primary">mdi-water-percent</v-icon>
            <p class="ml-2 text-h6">{{ weather.humidity }}%</p>
          </div>
          <div class="d-flex">
            <v-icon class="text-h5" color="primary">mdi-weather-windy</v-icon>
            <p class="ml-2 text-h6">{{ weather.wind }} km/h</p>
          </div>
        </div>
        <div v-else class="text-center">Loading weather...</div>
      </v-card-text>
    </v-card>



    <!-- About Me Card -->
    <v-card class="glass glass-card" width="820">
      <v-card-title class="text-h6 text-primary">Oh, I forgot to introduce myself</v-card-title>
      <v-card-text>
        <p>
          Hi! I’m <strong>Ishaan</strong>, a student trying to build cool stuff in the e-learning and assistive tech space. 
          Passionate about tech, design, and meaningful innovation 🚀.
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const joke = ref('')
const weather = ref(null)

const fetchJoke = async () => {
  try {
    const { data } = await axios.get('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' }
    })
    joke.value = data.joke
  } catch (err) {
    joke.value = 'Could not fetch joke 😞'
  }
}

const fetchWeather = async () => {
  try {
    // You can replace this mock with a real weather API later
    // For now, using Open-Meteo (free, no key)
    const res = await axios.get(
      'https://api.open-meteo.com/v1/forecast?latitude=13.08&longitude=80.27&current_weather=true'
    )
    const data = res.data.current_weather
    weather.value = {
      temp: data.temperature,
      wind: data.windspeed,
      humidity: Math.floor(Math.random() * 40 + 40) // mock humidity
    }
  } catch (err) {
    weather.value = null
  }
}

onMounted(() => {
  fetchJoke()
  fetchWeather()
})
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 1rem;
}
</style>
