<template>
    <v-container>
      <!-- Current Song Section -->
      <v-row justify="space-between" class="mb-5">
        <v-col cols="4" md="6" sm="12">
            <SpotifyIframe :trackId="currentSongTrackId" :prominent="true"/>
        </v-col>
        <v-col cols="8" md="6" sm="12">
        <v-card class="lyrics-card glass-card">
          <v-card-title class="text-h6 text-center lyrics-song-name">
            <v-icon class="mr-2">mdi-music</v-icon>CO<sub>2</sub>
          </v-card-title>
          <v-card-text class="lyrics-text">
            <p class="lyric-line">Maybe it's the silence in your eyes</p>
            <p class="lyric-line">Maybe it's the lilac when you're shy</p>
            <p class="lyric-line">Maybe it's the mystery of your love</p>
            <p class="lyric-line">All I need is a sign from the stars above</p>
            <p class="lyric-line">Maybe it's the way that you breathe in me</p>
            <p class="lyric-line">Maybe it's the man that you see in me</p>
            <p class="lyric-line">Maybe it's the fragrance of your hair</p>
            <p class="lyric-line">Yeah, I just wanna kiss you when you're there</p>
            <p class="lyric-line">I just want you all around me, baby</p>
            <p class="lyric-line">Can we make that happen, please?</p>
          </v-card-text>
        </v-card>
        </v-col>
      </v-row>
  
      <!-- Recently Listened Songs Section -->
      <v-row justify="start" class="mb-5">
        <v-col cols="12">
          <v-card class="glass-card">
            <v-card-title class="text-h5">Recently I am Listening to...</v-card-title>
              <v-row>
                                <!-- just for rakh lo tum chhupa ke  -->
                <v-col cols="12" sm="6" md="4" class="mb-4">
                    <iframe style="border-radius:20px" 
                    src="https://open.spotify.com/embed/episode/0yE1Yqw9LAqemmh2dJfJxu?utm_source=generator" 
                    width="100%" height="152" frameBorder="0" allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"></iframe>
                </v-col>
                <v-col
                  v-for="(track, index) in recentlyListened"
                  :key="index"
                  cols="12" sm="6" md="4"
                  class="mb-4"
                >
                  <SpotifyIframe :trackId="track" />
                </v-col>
              </v-row>
            <!-- </v-card-text> -->
          </v-card>
        </v-col>
      </v-row>
  
      <!-- All-Time Favorites Section -->
      <v-row justify="start" class="mb-5">
        <v-col cols="12">
          <v-card class="glass-card">
            <v-card-title class="text-h5">My All-Time Favorites</v-card-title>
            <v-card-text>
              <v-row>
                <v-col
                  v-for="(track, index) in allTimeFavorites"
                  :key="index"
                  cols="12" sm="6" md="4"
                  class="mb-4"
                >
                  <SpotifyIframe :trackId="track"/>
                </v-col>
              </v-row>
              <p style="text-align: right;"><i>I have a lot of favorites. I think I need a whole playlist ...</i></p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- Playlists Section (Placeholder for now) -->
      <v-row justify="start">
        <v-col cols="12">
          <v-card class="glass-card">
            <v-card-title class="text-h5">My Playlists</v-card-title>
            <v-card-text>
              <p>Coming soon...</p>
              <!-- Example playlist card starts here -->
               <!-- <v-row>
                <v-col cols="12" sm="6" md="4" class="mb-4">
                    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/54ZA9LXFvvFujmOVWXpHga?utm_source=generator" width="100%" height="552" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </v-col>
               </v-row> -->
              <!-- Example playlist card ends here -->

            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Recommendation Section (Placeholder for now) -->
      <v-row justify="start">
        <v-col cols="12">
          <v-card class="glass-card">
            <v-card-title class="text-h5">Recommendations</v-card-title>
            <v-card-text>
              <p>Pretty soon you will be able to recommend me songs.</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import SpotifyIframe from '@/components/SpotifyIframe.vue';
  
  export default {
    components: {
      SpotifyIframe
    },
    data() {
      return {
        // Current Song ID (Replace with the actual track ID)
        currentSongTrackId: '3hB9lDLyAClYVZivMMl20N',
        
        // Recently listened songs (Replace with actual track IDs)
        recentlyListened: [
          '03furKeCY0Tg0XmpzmrE0j',
          '7mTaeqTfEbbFpeG2JqQlkf',
          '0GDp0GGFAeStUDZKFEQjLL',
          '1ko2lVN0vKGUl9zrU0qSlT',
          '5snCfoQbJ7S4cYB0K8XuJ4',
          '4nTjkWK590oBDcnIxTr1mI',
          '2GxrNKugF82CnoRFbQfzPf',
          '55ZJ7RQKJfeiP3DIgOebDz',
        ],
  
        // All-time favorites (Replace with actual track IDs)
        allTimeFavorites: [
          '3zBnuM5Uf8k9wYaW0A3NAu',
          '3mUkVsovIuscQlSoMhmAZt',
          '1ZbcAMnlobqTAg2gZp3po1',
          '5VOnTAe9SMM6RBtq0C9wmf',
          '5O9jxRlG72h1sYxtqWwUcF',
          '1wbeFD7ZPdXPw6HHnCVRyZ',
          '0dLbrlAVPPjpPqnYfmJsWk',
          '0wnLMEOQlyW3Es1ag0HMVV',
          '5dS7HcRa9kER2qDba2iSOd'
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .glass-card {
    background: transparent ;  /* rgba(255, 255, 255, 0.15); */
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 1rem;
  }

  .lyrics-text {
  font-family: 'Tahoma', 'Roboto', sans-serif;
  font-size: 1.2rem;
  line-height: 1.5;
  color: #fff;
  text-align: left; /* Center-align lyrics */
}

.lyric-line {
  margin: 0.7rem 0;
  font-weight: 400; /* Regular weight for the lyrics */
  color: rgba(255, 255, 255, 0.8); /* Slightly lighter text color for readability */
  font-style: italic;
}

.lyrics-song-name{
    font-family:  'Verdana';
    color: #111010ad;
    font-weight: bolder;
    text-shadow: #888 1px 1px 1px;
}

.lyrics-card{
    height: 352px;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-color: #888 transparent;
    scroll-snap-type: none;
}
  
  .v-row {
    margin-top: 2rem;
  }
  </style>
  