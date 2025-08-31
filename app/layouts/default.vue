<template>
  <div :class="[isDark ? 'dark-theme' : 'light-theme', 'min-h-screen relative overflow-hidden']">
    <!-- Floating Hearts Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        v-for="(heart, index) in hearts" 
        :key="`heart-${index}`"
        class="floating absolute text-white/10"
        :class="heart.size"
        :style="heart.style"
      >
        ♥
      </div>
    </div>
    
    <!-- Decorative Corner Elements -->
    <div class="absolute top-8 left-8 text-white/20 text-4xl animate-pulse">✨</div>
    <div class="absolute bottom-8 left-8 text-white/20 text-4xl animate-pulse" style="animation-delay: 2s;">✨</div>
    <div class="absolute bottom-8 right-20 text-white/20 text-4xl animate-pulse" style="animation-delay: 0.5s;">✨</div>
    
    <!-- Main Content Slot -->
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'

// Props
interface Props {
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: false
})

// Theme state
const isDark = ref(true)

// Generate random hearts
const hearts = reactive(Array.from({ length: 8 }, (_, index) => ({
  size: ['text-3xl', 'text-4xl', 'text-5xl'][Math.floor(Math.random() * 3)],
  style: {
    top: Math.random() * 80 + 10 + '%',
    left: Math.random() * 80 + 10 + '%',
    animationDelay: Math.random() * 3 + 's',
    animationDuration: (Math.random() * 2 + 3) + 's'
  }
})))

onMounted(() => {
  // Load theme from localStorage if available
  if (typeof window !== 'undefined') {
    const saved = window.localStorage.getItem('theme')
    if (saved === 'light') isDark.value = false
    else if (saved === 'dark') isDark.value = true
  }
})
</script>

<style scoped>
.font-dancing {
  font-family: 'Dancing Script', cursive;
}

.font-vibes {
  font-family: 'Great Vibes', cursive;
}

/* Keyframe Animations */
@keyframes floating {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.1;
  }
  33% {
    transform: translateY(-20px) rotate(5deg);
    opacity: 0.3;
  }
  66% {
    transform: translateY(-10px) rotate(-3deg);
    opacity: 0.2;
  }
}

/* Apply animations */
.floating {
  animation: floating 4s ease-in-out infinite;
}

/* Theme backgrounds */
.dark-theme {
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #000 100%);
}

.light-theme {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

/* Text color overrides for light theme */
.light-theme .text-white {
  color: #2d3748 !important;
}

.light-theme .text-white\/20 {
  color: rgba(45, 55, 72, 0.2) !important;
}

.light-theme .text-white\/10 {
  color: rgba(45, 55, 72, 0.1) !important;
}
</style>
