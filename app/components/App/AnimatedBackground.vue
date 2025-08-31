<template>
  <div class="animated-background">
    <!-- Main Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"></div>
  </div>
</template>

<script setup lang="ts">
// Background component without bubbles - bubbles are now in AnimatedBubbles component
</script>

<style scoped>
.animated-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}
</style>
