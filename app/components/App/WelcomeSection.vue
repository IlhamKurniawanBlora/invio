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
        <!-- Extra overlay to ensure text readability -->
        <div class="absolute inset-0 bg-black/40 pointer-events-none"></div>
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

    <!-- Main Card Container -->
    <div class="relative z-10 w-full h-full flex items-center justify-center px-4">
      <div class="w-full max-w-2xl">
        <!-- Welcome Card with consistent design -->
        <div class="bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-8 md:p-12 shadow-md border border-white/20 backdrop-blur-md relative overflow-hidden">
          
          <!-- Decorative elements -->
          <div class="absolute top-0 right-0 w-24 h-24 opacity-5">
            <img src="/wedding.png" alt="Decoration" class="w-full h-full object-cover"/>
          </div>
          <div class="absolute bottom-0 left-0 w-20 h-20 opacity-5 transform scale-x-[-1]">
            <img src="/wedding.png" alt="Decoration" class="w-full h-full object-cover"/>
          </div>

          <div class="relative z-10 text-center">
            <!-- Main Title -->
            <div class="fade-in-up mounting-animation">
              <h1 class="gradient-text mb-3 font-great-vibes text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
                Wedding Invitation
              </h1>
            </div>

            <!-- Decorative Divider -->
            <div class="fade-in-up-delay-1 mounting-animation">
              <div class="flex items-center justify-center mb-6">
                <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-20"></div>
                <div class="mx-4 text-white/80">
                  <i class="fas fa-heart heart-beat text-lg"></i>
                </div>
                <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-20"></div>
              </div>
            </div>

            <!-- Couple Names -->
            <div class="fade-in-up-delay-2 mounting-animation">
              <h2 class="font-dancing text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white/90 tracking-wide">
                Jiyanto & Nur Aini
              </h2>
            </div>

            <!-- Guest Name Section -->
            <div v-if="guestName" class="fade-in-up-delay-2 mounting-animation mb-6">
              <p class="font-poppins text-xs md:text-sm text-white/70 mb-2">Kepada Yth:</p>
              <h3 class="font-great-vibes text-xl md:text-2xl lg:text-3xl font-normal text-white gradient-text-guest tracking-wide">
                {{ guestName }}
              </h3>
            </div>

            <!-- Invitation Paragraph -->
            <div class="fade-in-up-delay-2 mounting-animation mb-6">
              <p class="font-poppins text-sm md:text-base text-white/80 leading-relaxed">
                <span v-if="guestName">Dengan penuh rasa syukur, kami mengundang {{ guestName }} beserta keluarga untuk hadir dan memberikan doa restu pada acara pernikahan kami.</span>
                <span v-else>Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i beserta keluarga untuk hadir dan memberikan doa restu pada acara pernikahan kami.</span>
              </p>
            </div>

            <!-- Quote -->
            <div class="fade-in-up-delay-2 mounting-animation mb-8">
              <p class="font-playfair text-xs md:text-sm text-gray-300 leading-relaxed italic">
                "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya"
              </p>
            </div>

            <!-- Divider Line -->
            <div class="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8"></div>

            <!-- CTA Button -->
            <div class="fade-in-up-delay-3 flex justify-center w-full mounting-animation">
              <button 
                @click="handleEnterInvitation"
                class="elegant-button font-poppins bg-gradient-to-r from-white/20 via-white/10 to-white/20 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-medium text-base md:text-lg relative z-10 tracking-wide flex items-center justify-center gap-3 shadow-md border border-white/30 group overflow-hidden hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                aria-label="Buka Undangan"
              >
                <!-- Glossy overlay -->
                <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                
                <span class="relative z-10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail mr-2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 6-8.97 6.66a2 2 0 0 1-2.06 0L2 6"/></svg>
                  Buka Undangan
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-music ml-2 opacity-70"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                </span>
              </button>
            </div>
          </div>
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
/* Gradient text styling sesuai tema */
.gradient-text {
  background: linear-gradient(45deg, #ffffff, #f8fafc, #e2e8f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
}

.gradient-text-guest {
  background: linear-gradient(45deg, #ffffff, #f8fafc, #e2e8f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Heart beat animation */
.heart-beat {
  animation: heartbeat 2s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

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

/* Elegant button styling */
.elegant-button {
  transition: all 0.3s cubic-bezier(.2,.8,.2,1);
}

.elegant-button:hover {
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

/* Respect user preference for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .fade-in-up, .mounting-animation {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }

  .heart-beat {
    animation: none !important;
  }

  .elegant-button:hover {
    transform: none !important;
  }
}

/* Responsive improvements */
@media (max-width: 768px) {
  .gradient-text {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  }
}
</style>

