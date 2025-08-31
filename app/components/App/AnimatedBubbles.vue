<template>
  <div class="fixed inset-0 pointer-events-none z-10 overflow-hidden">
    <!-- Animated Bubbles -->
    <div class="absolute inset-0">
      <div
        v-for="(bubble, index) in bubbles"
        :key="index"
        class="absolute rounded-full opacity-20 animate-float"
        :class="bubble.size"
        :style="{
          left: bubble.left,
          background: bubble.gradient,
          animationDelay: bubble.delay,
          animationDuration: bubble.duration
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Bubble {
  size: string
  left: string
  gradient: string
  delay: string
  duration: string
}

const bubbles = ref<Bubble[]>([])

const generateBubbles = () => {
  const sizes = ['w-16 h-16', 'w-20 h-20', 'w-24 h-24', 'w-32 h-32', 'w-12 h-12', 'w-8 h-8']
  const gradients = [
    'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
    'radial-gradient(circle, rgba(240,248,255,0.4) 0%, rgba(240,248,255,0.1) 50%, transparent 100%)',
    'radial-gradient(circle, rgba(248,250,252,0.3) 0%, rgba(248,250,252,0.1) 50%, transparent 100%)',
    'radial-gradient(circle, rgba(226,232,240,0.4) 0%, rgba(226,232,240,0.1) 50%, transparent 100%)'
  ]

  const newBubbles: Bubble[] = []
  
  for (let i = 0; i < 15; i++) {
    newBubbles.push({
      size: sizes[Math.floor(Math.random() * sizes.length)],
      left: `${Math.random() * 100}%`,
      gradient: gradients[Math.floor(Math.random() * gradients.length)],
      delay: `${Math.random() * 10}s`,
      duration: `${15 + Math.random() * 20}s`
    })
  }
  
  bubbles.value = newBubbles
}

onMounted(() => {
  generateBubbles()
})
</script>

<style scoped>
@keyframes float {
  0% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 0.3;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(-100vh) scale(1);
    opacity: 0;
  }
}

.animate-float {
  animation: float linear infinite;
  animation-fill-mode: both;
}

/* Responsive bubble sizes */
@media (max-width: 640px) {
  .w-32 { width: 6rem; height: 6rem; }
  .w-24 { width: 4rem; height: 4rem; }
  .w-20 { width: 3rem; height: 3rem; }
  .w-16 { width: 2.5rem; height: 2.5rem; }
  .w-12 { width: 2rem; height: 2rem; }
  .w-8 { width: 1.5rem; height: 1.5rem; }
}
</style>
