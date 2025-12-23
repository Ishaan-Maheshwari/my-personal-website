<template>
  <section class="three-card-layout">
    <div class="left">
      <slot name="left" />
    </div>

    <div class="top-right">
      <slot name="top-right" />
    </div>

    <div class="bottom-right">
      <slot name="bottom-right" />
    </div>
  </section>
</template>

<style scoped>
.three-card-layout {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  grid-template-rows: auto auto;
  gap: 1.4rem;
  align-items: stretch;
}

/* LEFT: spans two rows */
.left {
  grid-column: 1;
  grid-row: 1 / span 2;
}

/* RIGHT TOP */
.top-right {
  grid-column: 2;
  grid-row: 1;
  height: max-content;
}

/* RIGHT BOTTOM */
.bottom-right {
  grid-column: 2;
  grid-row: 2;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .three-card-layout {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .left,
  .top-right,
  .bottom-right {
    grid-column: auto;
    grid-row: auto;
  }
}
</style>
