<template>
    <v-row justify="center">
        <v-col cols="12" md="8">
            <v-card class="glass-connect-card pa-6">
                <h2 class="text-h6 font-weight-bold text-white mb-4 text-center">
                    <v-icon icon="mdi-guy-fawkes-mask" class="mr-2"></v-icon>
                    Want to connect with me anonymously ?
                </h2>
                <form @submit.prevent="sendMessage">
                    <v-text-field v-model="senderName" label="What's your name? (At least give me a hint 😌)"
                        color="white" class="white--text" variant="underlined" required></v-text-field>

                    <v-textarea v-model="senderMessage"  label="Yeah, so what do you want to say to me?"
                        rows="5" color="white" class="white--text" variant="underlined" required></v-textarea>

                    <v-btn type="submit" color="cyan-lighten-3" class="mt-4" prepend-icon="mdi-send" :loading="loading"
                        :disabled="submitted">
                        Send
                    </v-btn>

                    <v-alert v-if="submitted" type="success" class="mt-4" border="start" color="green" text>
                        Thanks! Your anonymous message has been sent.
                    </v-alert>

                    <v-alert v-if="error" type="error" class="mt-4" border="start" color="red" text>
                        Something went wrong. Please try again later.
                    </v-alert>
                </form>

            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
  import { ref } from 'vue'
  
  const senderName = ref(null)
  const senderMessage = ref(null)
  const submitted = ref(false)
  const loading = ref(false)
  const error = ref(false)
  
  const goTo = (url) => {
    window.open(url, '_blank')
  }
  
  const sendMessage = async () => {
    loading.value = true
    submitted.value = false
    error.value = false

    try {
        const res = await fetch('https://formspree.io/f/xgvarnwy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: senderName.value,
            message: senderMessage.value
        })
        })

        if (res.ok) {
        submitted.value = true
        senderName.value = ''
        senderMessage.value = ''
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
  
  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
</style>