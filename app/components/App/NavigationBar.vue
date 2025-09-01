<template>
  <div class="fixed top-2 left-1/2 transform -translate-x-1/2 z-[60] transition-all duration-300">
    <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center space-x-4 shadow-lg">
      <!-- Music Control Button -->
      <button
        @click="props.toggleMusic"
        class="p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
        :title="props.isPlaying ? 'Pause Music' : 'Play Music'"
      >
        <div class="relative">
          <svg v-if="props.isPlaying" class="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>
          </svg>
          <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"></path>
          </svg>
          <!-- Music waves animation -->
          <div v-if="props.isPlaying" class="absolute -top-1 -right-1">
            <div class="flex space-x-0.5">
              <div class="w-0.5 h-0.5 bg-white rounded-full animate-bounce" style="animation-delay: 0ms;"></div>
              <div class="w-0.5 h-0.5 bg-white rounded-full animate-bounce" style="animation-delay: 150ms;"></div>
              <div class="w-0.5 h-0.5 bg-white rounded-full animate-bounce" style="animation-delay: 300ms;"></div>
            </div>
          </div>
        </div>
      </button>

      <!-- Auto Scroll Toggle Button -->
      <button
        @click="handleAutoScrollToggle"
        class="p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        :title="props.isAutoScrolling ? 'Stop Auto Scroll' : 'Start Auto Scroll'"
      >
        <svg v-if="props.isAutoScrolling" class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </button>

      <!-- Scroll to Top Button -->
      <button
        @click="scrollToTop"
        class="p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        title="Scroll to Top"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Props for shared music state and scroll functions
const props = defineProps<{
  isPlaying: boolean;
  toggleMusic: () => Promise<void>;
  scrollToSection?: (sectionId: string) => void;
  isAutoScrolling?: boolean;
  stopAutoScroll?: () => void;
  startAutoScroll?: () => void;
}>()

// Auto scroll toggle function
const handleAutoScrollToggle = () => {
  if (props.isAutoScrolling) {
    props.stopAutoScroll?.()
  } else {
    props.startAutoScroll?.()
  }
}

// Scroll to top function
const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

onUnmounted(() => {
  // Cleanup
  props.stopAutoScroll?.()
})
</script>

<style scoped>
/* Navigation bar styles */
</style>
