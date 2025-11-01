<template>
  <div 
    v-if="showLoading"
    class="fixed top-0 left-0 w-screen h-screen min-h-screen min-w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex justify-center items-center z-[55] overflow-hidden transition-opacity duration-1000"
    :class="{ 'opacity-0 pointer-events-none': !showLoading }"
    style="inset:0;"
  >
    <div class="relative text-center w-full max-w-6xl px-4">
      <!-- Logo Image (Circle Crop) -->
      <div class="flex justify-center mb-6">
        <img
          src="/images/weeding001.jpg"
          alt="Wedding Logo"
          class="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow-lg"
          style="object-position: center;"
        />
      </div>
      
      <!-- Main Names -->
      <div class="font-vibes text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.6)] mb-4 leading-tight">
        <span 
          ref="jiyantoRef" 
          class="relative inline-block opacity-0 text-part transition-all duration-1000 ease-out transform translate-y-8"
          :class="{ 'animate-show': showJiyanto }"
        >
          Jiyanto
        </span>
        <span 
          class="mx-2 sm:mx-4 transition-all duration-500 ease-out transform scale-0 animate-show-ampersand"
        >
          &
        </span>
        <span 
          ref="nurainiRef" 
          class="relative inline-block opacity-0 text-part transition-all duration-1000 ease-out transform translate-y-8"
          :class="{ 'animate-show': showNuraini }"
        >
          Nur Aini
        </span>
      </div>
      
      <!-- Subtitle -->
      <div 
        class="text-white/80 text-lg sm:text-xl md:text-2xl mb-6 font-dancing tracking-wide opacity-0 transform translate-y-4"
        :class="{ 'animate-fade-in': showSubtitle }"
      >
        Wedding Invitation
      </div>
      
      <!-- Loading Progress Bar -->
      <div 
        class="w-64 h-1 bg-white/20 rounded-full mx-auto mb-4 overflow-hidden opacity-0"
        :class="{ 'animate-fade-in': showProgress }"
      >
        <div 
          class="h-full bg-gradient-to-r from-slate-400 to-slate-200 rounded-full transition-all duration-300 ease-out"
          :style="{ width: loadingProgress + '%' }"
        ></div>
      </div>
      
      <!-- Loading Text -->
      <div 
        class="text-white/60 text-sm font-dancing opacity-0"
        :class="{ 'animate-fade-in': showProgress }"
      >
        Loading... {{ Math.round(loadingProgress) }}%
      </div>
      
      <!-- Sparkle Bubbles Background -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          v-for="(bubble, index) in sparkles" 
          :key="`sparkle-${index}`"
          class="bubble absolute rounded-full"
          :style="bubble.style"
        >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, watch } from 'vue'

// Props
const props = withDefaults(defineProps<{
  duration?: number,
  modelValue?: boolean
}>(), {
  duration: 5000,
  modelValue: true
})

// Emits
const emit = defineEmits(['update:modelValue', 'loadingComplete'])

// Refs for animation triggers
const jiyantoRef = ref<HTMLElement>()
const nurainiRef = ref<HTMLElement>()

// Animation states
const showLoading = ref(props.modelValue)
const showJiyanto = ref(false)
const showAmpersand = ref(false)
const showNuraini = ref(false)
const showSubtitle = ref(false)
const showProgress = ref(false)
const loadingProgress = ref(0)

// Generate random sparkle bubbles as small dots
const sparkles = reactive(Array.from({ length: 18 }, (_, index) => {
  const size = Math.random() * 3 + 2; // 2-5px
  const delay = Math.random() * 8; // 0-8s delay
  const duration = Math.random() * 4 + 6; // 6-10s duration
  const leftPosition = Math.random() * 100; // 0-100%
  const drift = (Math.random() - 0.5) * 200; // -100px to 100px drift
  return {
    style: {
      left: leftPosition + '%',
      bottom: '-30px',
      width: size + 'px',
      height: size + 'px',
      fontSize: size + 'px',
      color: `hsl(${Math.random() * 60 + 300}, 70%, 80%)`, // Purple to pink hues
      animationDelay: delay + 's',
      animationDuration: duration + 's',
      '--drift-x': drift + 'px',
    }
  }
}))

// Animation sequence
const startAnimation = () => {
  // Show Jiyanto first
  setTimeout(() => {
    showJiyanto.value = true
  }, 500)
  
  // Show ampersand
  setTimeout(() => {
    showAmpersand.value = true
  }, 1000)
  
  // Show Nur Aini
  setTimeout(() => {
    showNuraini.value = true
  }, 1500)
  
  // Show subtitle
  setTimeout(() => {
    showSubtitle.value = true
  }, 500)
  
  // Show progress bar
  setTimeout(() => {
    showProgress.value = true
    startProgressBar()
  }, 2000)
}

// Progress bar animation
const startProgressBar = () => {
  const interval = 50 // Update every 50ms
  const increment = 100 / (props.duration / interval)
  
  const progressInterval = setInterval(() => {
    loadingProgress.value += increment
    
    if (loadingProgress.value >= 100) {
      loadingProgress.value = 100
      clearInterval(progressInterval)
      
      // Hide loading screen after a short delay
      setTimeout(() => {
        showLoading.value = false
        emit('loadingComplete')
      }, 500)
    }
  }, interval)
}

// Expose method to manually complete loading
const completeLoading = () => {
  loadingProgress.value = 100
  setTimeout(() => {
    showLoading.value = false
    emit('loadingComplete')
  }, 300)
}

defineExpose({
  completeLoading
})

onMounted(() => {
  startAnimation()
})

// Watch for v-model changes from parent
watch(() => props.modelValue, (val) => {
  showLoading.value = val
  if (val) startAnimation()
})

// Watch for internal close to update parent
watch(showLoading, (val) => {
  emit('update:modelValue', val)
})
</script>

<style scoped>
.font-dancing {
  font-family: 'Dancing Script', cursive;
}

.font-vibes {
  font-family: 'Great Vibes', cursive;
}

/* Text Animation Classes */
.text-part {
  position: relative;
  overflow: visible;
}

.text-part::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  z-index: 1;
  border-radius: 4px;
}

.text-part.animate-show {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.text-part.animate-show::before {
  animation: handwriting 2s ease-in-out 0.3s forwards;
}

.ampersand.animate-show-ampersand {
  opacity: 1 !important;
  transform: scale(1) !important;
}

.animate-fade-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
  transition: all 1s ease-out;
}

/* Bubble Animation */
.bubble {
  animation: bubble-rise var(--animation-duration, 8s) ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 70%, transparent 100%);
  border: 1px solid rgba(255,255,255,0.2);
  backdrop-filter: blur(2px);
  text-shadow: 0 0 10px currentColor;
}

@keyframes bubble-rise {
  0% {
    transform: translateY(0) translateX(0) scale(0.5) rotate(0deg);
    opacity: 0;
  }
  5% {
    opacity: 0.6;
    transform: translateY(-5vh) translateX(calc(var(--drift-x) * 0.1)) scale(0.7) rotate(18deg);
  }
  25% {
    opacity: 0.8;
    transform: translateY(-25vh) translateX(calc(var(--drift-x) * 0.3)) scale(1) rotate(90deg);
  }
  50% {
    opacity: 1;
    transform: translateY(-50vh) translateX(calc(var(--drift-x) * 0.6)) scale(1.1) rotate(180deg);
  }
  75% {
    opacity: 0.7;
    transform: translateY(-75vh) translateX(calc(var(--drift-x) * 0.8)) scale(0.9) rotate(270deg);
  }
  95% {
    opacity: 0.3;
    transform: translateY(-95vh) translateX(var(--drift-x)) scale(0.6) rotate(340deg);
  }
  100% {
    opacity: 0;
    transform: translateY(-110vh) translateX(var(--drift-x)) scale(0.3) rotate(360deg);
  }
}

/* Keyframe Animations */
@keyframes handwriting {
  0% { 
    width: 0; 
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
  100% { 
    width: 100%; 
    opacity: 0;
  }
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .ampersand {
    margin: 0 0.5rem !important;
  }
}

@media (max-width: 480px) {
  .names-container {
    line-height: 1.1;
  }
  
  .ampersand {
    display: block !important;
    margin: 0.5rem 0 !important;
  }
}
</style>