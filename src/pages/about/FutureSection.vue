<template>
  <section class="future">
    <p>
      Right now, I’m exploring multimodal AI,
      conversational agents, and perception systems
      for assistive and humanoid robotics.
    </p>

    <p class="closing">
      I try to build systems that listen —
      to data, to users,
      and to the quiet edge cases where real problems live.
    </p>
  </section>
</template>

<script>
export default { name: 'FutureSection' }
</script>

<style scoped>
.future {
  margin: 10rem auto 6rem;
  max-width: 600px;
  text-align: center;
}

.closing {
  margin-top: 3rem;
  font-style: italic;
  opacity: 0.6;
}
</style>
