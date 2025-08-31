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
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          v-for="(bubble, index) in bubbles"
          :key="'bubble-' + index"
          class="bubble absolute rounded-full"
          :style="bubble.style"
        ></div>
      </div>

      <div class="relative z-10">
        <!-- Couple Image -->
        <div class="mb-8" :class="{ 'slide-in-left': imageLoaded }">
          <div class="w-32 h-32 mx-auto couple-image flex items-center justify-center">
            <img src="/assets/images/weedinglogo.png" alt="Wedding Logo" class="w-full h-full object-cover rounded-full shadow-2xl" />
          </div>
        </div>

        <!-- Main Title -->
        <div class="fade-in-up">
          <h1 class="gradient-text mb-4 font-great-vibes text-5xl md:text-6xl lg:text-7xl font-normal leading-tight">
            Wedding Invitation
          </h1>
        </div>

        <!-- Decorative Divider -->
        <div class="fade-in-up-delay-1">
          <div class="flex items-center justify-center mb-6">
            <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-24"></div>
            <div class="mx-6 text-white/80">
              <i class="fas fa-heart heart-beat text-xl"></i>
            </div>
            <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-24"></div>
          </div>
        </div>

        <!-- Couple Names -->
        <div class="fade-in-up-delay-2">
          <h2 class="font-dancing text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-white/90 tracking-wide">
            Jiyanto & Nur Aini
          </h2>
        </div>

        <!-- Invitation Paragraph -->
        <div class="fade-in-up-delay-2">
          <p class="font-poppins text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i beserta keluarga untuk hadir dan memberikan doa restu pada acara pernikahan kami.
          </p>
        </div>

        <!-- Quote -->
        <div class="fade-in-up-delay-2">
          <p class="font-playfair text-sm md:text-base text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed italic">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya"
          </p>
        </div>

        <!-- CTA Button -->
        <div class="fade-in-up-delay-3 flex justify-center w-full">
          <!-- Enter Invitation Button -->
          <button 
            @click="handleEnterInvitation"
            class="elegant-button font-poppins text-slate-800 px-10 py-4 rounded-full font-medium text-lg relative z-10 tracking-wide flex items-center justify-center gap-3"
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

import { ref, onMounted, computed } from 'vue'

const props = withDefaults(defineProps<{ welcomeTransform?: string; welcomeOpacity?: string; light?: boolean }>(), {
  welcomeTransform: 'translateY(0)',
  welcomeOpacity: '1',
  light: false
})

const isLight = computed(() => props.light)

const emit = defineEmits<{
  'enter-invitation': []
}>()

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

// Lifecycle
onMounted(() => {
  // Simulate image loading
  setTimeout(() => {
    imageLoaded.value = true
  }, 500)
})

// Methods
const handleEnterInvitation = () => {
  isVisible.value = false
  emit('enter-invitation')
}
</script>

<style scoped>
/* Responsive improvements for mobile */
@media (max-width: 640px) {
  .gradient-text {
    font-size: 2rem !important;
  }
  .font-dancing {
    font-size: 1.2rem !important;
  }
  .elegant-button {
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
    font-size: 1rem !important;
  }
  .mb-8 {
    margin-bottom: 1.5rem !important;
  }
  .max-w-2xl {
    max-width: 95vw !important;
  }
}

/* Light mode overrides */
.light-mode {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%) !important;
  color: #2d3748 !important;
}
.light-mode .gradient-text {
  background: linear-gradient(45deg, #2d3748, #64748b, #cbd5e1);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(100, 116, 139, 0.1);
}
.light-mode .font-dancing,
.light-mode .font-great-vibes,
.light-mode .font-playfair,
.light-mode .font-poppins {
  color: #2d3748 !important;
}
.light-mode .elegant-button {
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  color: #2d3748 !important;
  border-color: #cbd5e1;
}
.light-mode .elegant-button:hover {
  box-shadow: 0 15px 40px rgba(100, 116, 139, 0.15);
  border-color: #94a3b8;
}
.light-mode .font-playfair {
  color: #334155 !important;
}
.light-mode .bubble {
  border: 1px solid #cbd5e1;
  background: radial-gradient(circle, rgba(100,116,139,0.08) 0%, rgba(203,213,225,0.05) 70%, transparent 100%);
}
/* Google Fonts - Add to nuxt.config.ts or app.vue */
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Great+Vibes&family=Playfair+Display:wght@300;400;700&family=Poppins:wght@300;400;500;600&display=swap');

.font-great-vibes {
  font-family: 'Great Vibes', cursive;
}

.font-dancing {
  font-family: 'Dancing Script', cursive;
}

.font-playfair {
  font-family: 'Playfair Display', serif;
}

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

/* Animations */

/* Bubble Animation (mirip LoadingApp) */
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

.gradient-text {
  background: linear-gradient(45deg, #ffffff, #f8fafc, #e2e8f0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
}

.heart-beat {
  animation: heartbeat 2s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.slide-in-left {
  animation: slideInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

.fade-in-up-delay-1 {
  animation: fadeInUp 1s ease-out 0.5s forwards;
  opacity: 0;
  transform: translateY(30px);
}

.fade-in-up-delay-2 {
  animation: fadeInUp 1s ease-out 1s forwards;
  opacity: 0;
  transform: translateY(30px);
}

.fade-in-up-delay-3 {
  animation: fadeInUp 1s ease-out 1.5s forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.couple-image {
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 50px rgba(255, 255, 255, 0.2);
  transition: all 0.4s ease;
}

.couple-image:hover {
  transform: scale(1.05);
  box-shadow: 0 0 80px rgba(255, 255, 255, 0.4);
  border-color: rgba(255, 255, 255, 0.5);
}

.elegant-button {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #ffffff, #f8fafc);
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.elegant-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.6s ease;
}

.elegant-button:hover::before {
  left: 100%;
}

.elegant-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 15px 40px rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.4);
}

.elegant-button:active {
  transform: translateY(-1px) scale(1.02);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .ornament {
    font-size: 1.5rem;
  }
}
</style>