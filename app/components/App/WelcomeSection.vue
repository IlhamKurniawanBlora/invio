<template>
  <div 
    class="fixed inset-0 flex items-center justify-center z-[55] transition-all duration-1000"
    :class="[
      isLight ? 'bg-gradient-to-br from-white via-slate-100 to-slate-300' : 'bg-gradient-to-br from-slate-900 via-slate-800 to-black',
      isLight ? 'text-slate-800' : 'text-white',
      { 'opacity-100 scale-100': isVisible, 'opacity-0 scale-95': !isVisible }
    ]"
    :style="{ transform: welcomeTransform, opacity: welcomeOpacity }"
  >
    <div class="text-center text-white px-6 max-w-4xl mx-auto">
      <!-- Floating Bubbles Background (mirip LoadingApp) -->
      <!-- Background carousel (slide track) -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute inset-0">
          <div class="absolute inset-0 overflow-hidden">
            <div class="h-full flex" :style="sliderStyle">
              <div
                v-for="(img, idx) in images"
                :key="img + '-' + idx"
                class="w-full h-full flex-shrink-0 bg-center bg-cover"
                :style="{ backgroundImage: `url(${img})`, filter: 'brightness(0.62) saturate(0.95)' }"
              ></div>
            </div>
          </div>
          <!-- extra overlay to ensure text readability -->
          <div class="absolute inset-0 bg-black/30 pointer-events-none"></div>
        </div>
      </div>

      <!-- Floating Bubbles (over carousel) -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          v-for="(bubble, index) in bubbles"
          :key="'bubble-' + index"
          class="bubble absolute rounded-full"
          :style="bubble.style"
        ></div>
      </div>

      <div class="relative z-10">

        <!-- Main Title -->
        <div class="fade-in-up mounting-animation">
          <h1 class="gradient-text mb-4 font-great-vibes text-5xl md:text-6xl lg:text-7xl font-normal leading-tight">
            Wedding Invitation
          </h1>
        </div>

        <!-- Decorative Divider -->
        <div class="fade-in-up-delay-1 mounting-animation">
          <div class="flex items-center justify-center mb-6">
            <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-24"></div>
            <div class="mx-6 text-white/80">
              <i class="fas fa-heart heart-beat text-xl"></i>
            </div>
            <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-24"></div>
          </div>
        </div>

        <!-- Couple Names -->
        <div class="fade-in-up-delay-2 mounting-animation">
          <h2 class="font-dancing text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-white/90 tracking-wide">
            Jiyanto & Nur Aini
          </h2>
        </div>

        <!-- Guest Name Section -->
        <div v-if="guestName" class="fade-in-up-delay-2 mounting-animation">
          <div class="mb-6">
            <p class="font-poppins text-sm md:text-base text-white/70 mb-2">Kepada Yth:</p>
            <h3 class="font-great-vibes text-2xl md:text-3xl lg:text-4xl font-normal text-white gradient-text-guest tracking-wide">
              {{ guestName }}
            </h3>
          </div>
        </div>

        <!-- Invitation Paragraph -->
        <div class="fade-in-up-delay-2 mounting-animation">
          <p class="font-poppins text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            <span v-if="guestName">Dengan penuh rasa syukur, kami mengundang {{ guestName }} beserta keluarga untuk hadir dan memberikan doa restu pada acara pernikahan kami.</span>
            <span v-else>Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i beserta keluarga untuk hadir dan memberikan doa restu pada acara pernikahan kami.</span>
          </p>
        </div>

        <!-- Quote -->
        <div class="fade-in-up-delay-2 mounting-animation">
          <p class="font-playfair text-sm md:text-base text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed italic">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya"
          </p>
        </div>

        <!-- CTA Button -->
        <div class="fade-in-up-delay-3 flex justify-center w-full mounting-animation">
          <!-- Enter Invitation Button -->
          <button 
            @click="handleEnterInvitation"
            class="elegant-button font-poppins bg-white/95 text-slate-800 px-6 md:px-10 py-3 md:py-4 rounded-full font-medium text-base md:text-lg relative z-10 tracking-wide flex items-center justify-center gap-3 shadow-lg hover:scale-105 transition-transform"
            aria-label="Buka Undangan"
          >
            <span class="relative z-10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail mr-2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 6-8.97 6.66a2 2 0 0 1-2.06 0L2 6"/></svg>
              Buka Undangan
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-music ml-2 opacity-70"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
            </span>
          </button>
        </div>

        <!-- Additional decorative elements -->
        <div class="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-30">
          <div class="w-1 h-20 bg-gradient-to-t from-transparent to-white/20 mx-auto"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted, computed, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{ welcomeTransform?: string; welcomeOpacity?: string; light?: boolean }>(), {
  welcomeTransform: 'translateY(0)',
  welcomeOpacity: '1',
  light: false
})

const isLight = computed(() => props.light)

const emit = defineEmits<{
  'enter-invitation': []
}>()

// Get guest name from route query parameter
const route = useRoute()
const guestName = computed(() => {
  const name = route.query.to as string
  return name ? decodeURIComponent(name).trim() : null
})

// Reactive state
const isVisible = ref(true)
const imageLoaded = ref(false)

// Bubble animation state (mirip LoadingApp)
const bubbles = ref(Array.from({ length: 14 }, () => {
  const size = Math.random() * 3 + 2; // 2-5px
  const delay = Math.random() * 8;
  const duration = Math.random() * 4 + 6;
  const leftPosition = Math.random() * 100;
  const drift = (Math.random() - 0.5) * 200;
  return {
    style: {
      left: leftPosition + '%',
      bottom: '-30px',
      width: size + 'px',
      height: size + 'px',
      fontSize: size + 'px',
      color: `hsl(${Math.random() * 60 + 300}, 70%, 80%)`,
      animationDelay: delay + 's',
      animationDuration: duration + 's',
      '--drift-x': drift + 'px',
    }
  }
}))

// Carousel images (public folder -> accessible at /images/...)
// Files discovered in the project: weeding001.jpg .. weeding005.jpg
const images = ref<string[]>([
  '/images/weeding001.jpg',
  '/images/weeding002.jpg',
  '/images/weeding003.jpg',
  '/images/weeding004.jpg',
  '/images/weeding005.jpg'
])

const currentIndex = ref(0)
let intervalId: number | undefined

// Slider style for smooth slide transition
const sliderStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
  transition: 'transform 800ms cubic-bezier(.2,.8,.2,1)'
}))

// Preload images for smoother transition
const preloadImages = () => {
  images.value.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

const startCarousel = (delay = 5000) => {
  // rotate images every `delay` ms
  intervalId = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length
  }, delay)
}

const stopCarousel = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = undefined
  }
}

// Lifecycle
onMounted(() => {
  // Simulate image loading with smooth transition
  setTimeout(() => {
    imageLoaded.value = true
  }, 300)

  // Start carousel
  preloadImages()
  startCarousel(4500)
})

onUnmounted(() => {
  stopCarousel()
})

// Methods
const handleEnterInvitation = () => {
  // Add smooth transition before hiding
  isVisible.value = false
  setTimeout(() => {
    emit('enter-invitation')
  }, 300)
}
</script>

<style scoped>
/* Text appearance animations used by template classes: fade-in-up, fade-in-up-delay-1/2/3, mounting-animation */
.fade-in-up {
  opacity: 0;
  transform: translateY(12px);
  animation: fadeInUp 700ms cubic-bezier(.2,.8,.2,1) forwards;
  will-change: opacity, transform;
}
.fade-in-up-delay-1 { animation-delay: 160ms; }
.fade-in-up-delay-2 { animation-delay: 320ms; }
.fade-in-up-delay-3 { animation-delay: 520ms; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Small mounting animation for subtle scale + fade */
.mounting-animation {
  opacity: 0;
  transform: translateY(6px) scale(.996);
  animation: mounting 640ms cubic-bezier(.2,.8,.2,1) forwards;
  will-change: opacity, transform;
}

@keyframes mounting {
  from { opacity: 0; transform: translateY(6px) scale(.996); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

/* Respect user preference for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .fade-in-up, .mounting-animation {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}

</style>

