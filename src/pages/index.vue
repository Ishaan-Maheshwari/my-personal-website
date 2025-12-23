<!-- src/pages/Home.vue -->
<template>
  <div class="home-container">
    <!-- Quote Card - Full Width -->
    <!-- <div class="card-wrapper full-width">
      <QuoteCard />
    </div> -->

    <!-- Dad Joke & Weather Cards - Two Column -->
    <div class="cards-row">

      <CurrentlyObsessedCard
        :items="[
          {
            primary: 'KALYANI',
            secondary:
              'KALYANI is a whole mood. RONN, ARJN, FIFTY4, and KDS came together to create this vibe-heavy track that I can\'t stop playing on repeat.',
            image: 'images/homepage/curr_obss.jpg',
            reflection: 'https://music.youtube.com/watch?v=TijBIPD4Jbw',
            reflectionIsLink: true
          }
        ]"
        meta="updated this morning"
      />

      <ActiveProjectCard
        title="Ambient Thoughts"
        tagline="A soft corner of the internet"
        description="A tiny experiment where thoughts appear, fade, and never ask for attention."
        image="https://imgix.bustle.com/inverse/d5/68/71/d8/35ab/4e9c/9acb/803bdee5ecd2/martin-starr-as-gilfoyle-in-hbos-silicon-valley.jpeg"
        :tags="['fun', 'web', 'glassmorphism']"
        status="tinkering"
        updated="touched yesterday"
        link="/projects/ambient-thoughts"
      />

    </div>

    
      <ThreeCardLayout>
        <template v-slot:left>
          <ShotOfTheWeekCard
        image="/images/sow.jpg"
        caption="Light falling in ways it usually doesn’t."
        meta="Evening · Chennai"
        week="week 32"
      />
        </template>
        <template v-slot:top-right>
          <div class="card-wrapper">
        <v-card class="glass glass-card">
          <v-card-title class="text-h6 text-center text-primary font-weight-bold">
            🌤 Weather in Chennai
          </v-card-title>
          <v-card-text>
            <div v-if="weather" class="text-center">
              <div class="d-flex mb-2 align-center justify-center">
                <v-icon class="text-h5" color="primary">mdi-thermometer</v-icon>
                <p class="ml-2 text-h6">{{ weather.temp }}°C</p>
              </div>
              <div class="d-flex mb-2 align-center justify-center">
                <v-icon class="text-h5" color="primary">mdi-water-percent</v-icon>
                <p class="ml-2 text-h6">{{ weather.humidity }}%</p>
              </div>
              <div class="d-flex align-center justify-center">
                <v-icon class="text-h5" color="primary">mdi-weather-windy</v-icon>
                <p class="ml-2 text-h6">{{ weather.wind }} km/h</p>
              </div>
            </div>
            <div v-else class="text-center">Loading weather...</div>
          </v-card-text>
        </v-card>
      </div>

      <!-- joke card starts here-->
       <br></br>
       <div class="card-wrapper">
            <v-card class="glass glass-card">
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
          </div>
       <!-- joke card ends here -->
        </template>
        <template v-slot:bottom-right>
          
        </template>
      </ThreeCardLayout>
      
    

    <!-- About Me Card - Full Width -->
    <div class="card-wrapper full-width">
      <v-card class="glass glass-card">
        <v-card-title class="text-h6 text-primary">Oh, I forgot to introduce myself. Hi, I'm Ishaan</v-card-title>
        <v-card-text>
          <p>
          This is my corner of the internet.
          I build projects, write notes to myself, take photos of small moments, and keep track of what I'm listening to lately. I'm especially interested in assistive technology, thoughtful design, and systems that feel human rather than impressive.
          Some things here are polished. Some aren't. That's intentional.
          </p>
        </v-card-text>
        <v-card-footer>
          <v-btn
            color="primary"
            href="/about"
            variant="text"
          >
            Feel free to wander.
          </v-btn>
        </v-card-footer>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import CurrentlyObsessedCard from '@/components/CurrentlyObsessedCard.vue'
import ActiveProjectCard from '@/components/ActiveProjectCard.vue'
import ThreeCardLayout from '@/layouts/ThreeCardLayout.vue'

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
    const res = await axios.get(
      'https://api.open-meteo.com/v1/forecast?latitude=13.08&longitude=80.27&current_weather=true'
    )
    const data = res.data.current_weather
    weather.value = {
      temp: data.temperature,
      wind: data.windspeed,
      humidity: Math.floor(Math.random() * 40 + 40)
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
.home-container {
  display: grid;
  gap: 1.5rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.cards-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.card-wrapper {
  width: 100%;
}

.card-wrapper.full-width {
  grid-column: 1 / -1;
}

.glass-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 1rem;
}

/* Mobile - Single Column */
@media (max-width: 767px) {
  .home-container {
    gap: 1rem;
    padding: 0.75rem;
  }

  .cards-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .card-wrapper.full-width {
    grid-column: 1;
  }

  .glass-card {
    padding: 0.75rem;
  }
}

/* Tablet & Desktop - Two Columns for middle cards */
@media (min-width: 768px) {
  .cards-row {
    grid-template-columns: 1fr 1fr;
  }
}
</style>