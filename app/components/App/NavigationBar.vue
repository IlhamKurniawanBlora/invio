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

      <!-- Theme Toggle Button -->
      <button
        @click="toggleTheme"
        class="p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        :title="isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'"
      >
        <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
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

// Theme state
const isDark = ref(true)

// Auto scroll toggle function
const handleAutoScrollToggle = () => {
  if (props.isAutoScrolling) {
    props.stopAutoScroll?.()
  } else {
    props.startAutoScroll?.()
  }
}

// Theme toggle function
const toggleTheme = () => {
  isDark.value = !isDark.value
  // Apply theme to document
  if (typeof document !== 'undefined') {
    if (isDark.value) {
      document.documentElement.classList.remove('light-theme')
      document.documentElement.classList.add('dark-theme')
    } else {
      document.documentElement.classList.remove('dark-theme')
      document.documentElement.classList.add('light-theme')
    }
    // Persist theme to localStorage
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }
}

onMounted(() => {
  // Load theme from localStorage if available
  if (typeof window !== 'undefined') {
    const saved = window.localStorage.getItem('theme')
    if (saved === 'light') {
      isDark.value = false
      document.documentElement.classList.add('light-theme')
    } else {
      isDark.value = true
      document.documentElement.classList.add('dark-theme')
    }
  }
})

onUnmounted(() => {
  // Cleanup
  stopAutoScroll()
})
</script>

<style scoped>
/* Light theme button overrides */
:global(.light-theme) .bg-white\/10 {
  background: rgba(45, 55, 72, 0.1) !important;
}

:global(.light-theme) .border-white\/20 {
  border-color: rgba(45, 55, 72, 0.2) !important;
}

:global(.light-theme) .text-white {
  color: #2d3748 !important;
}

:global(.light-theme) .hover\:bg-white\/20:hover {
  background: rgba(45, 55, 72, 0.2) !important;
}
</style>
