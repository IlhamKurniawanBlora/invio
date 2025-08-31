<template>
  <section class="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black items-center justify-center">
    <!-- Floating Bubbles Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-10">
      <div
        v-for="(bubble, index) in bubbles"
        :key="'bubble-' + index"
        class="bubble absolute rounded-full"
        :style="bubble.style"
      ></div>
    </div>

    <!-- Corner Decorations -->
    <div class="absolute top-8 left-8 z-20 corner-decoration fade-in-corner-tl">
      <img src="/assets/images/angeldecor.png" alt="Angel Decoration" class="w-20 h-20 opacity-60" />
    </div>
    <div class="absolute top-8 right-8 z-20 corner-decoration fade-in-corner-tr">
      <img src="/assets/images/angeldecor.png" alt="Angel Decoration" class="w-20 h-20 opacity-60 transform scaleX(-1) rotate-270" />
    </div>
    <div class="absolute bottom-8 left-8 z-20 corner-decoration fade-in-corner-bl">
      <img src="/assets/images/angeldecor.png" alt="Angel Decoration" class="w-20 h-20 opacity-60 transform rotate-270" />
    </div>
    <div class="absolute bottom-8 right-8 z-20 corner-decoration fade-in-corner-br">
      <img src="/assets/images/angeldecor.png" alt="Angel Decoration" class="w-20 h-20 opacity-60 transform rotate-180 scaleX(-1)" />
    </div>

    <!-- Main Content -->
    <div class="relative z-30 text-center text-white px-6 max-w-5xl mx-auto flex items-center justify-center min-h-screen">
      <div class="w-full">
      <!-- Main Heading -->
      <div class="fade-in-up mb-8">
        <h1 class="gradient-text font-great-vibes text-5xl md:text-6xl lg:text-7xl font-normal leading-tight">
        Jiyanto & Nur Aini
        </h1>
        <h2 class="font-dancing text-2xl md:text-3xl lg:text-4xl font-bold mt-4 text-white/90 tracking-wide">
        Wedding
        </h2>
      </div>

      <!-- Decorative Divider -->
      <div class="fade-in-up-delay-1">
        <div class="flex items-center justify-center mb-8">
        <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-24"></div>
        <div class="mx-6 text-white/80">
          <i class="fas fa-heart heart-beat text-xl"></i>
        </div>
        <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-24"></div>
        </div>
      </div>

      <!-- Quote -->
      <div class="fade-in-up-delay-2 mb-12">
        <blockquote class="font-playfair text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed italic">
        "Alhamdulillah, Allah telah mempertemukan kami sebagai jodoh. Dengan ridho-Nya, kami akan menjalani hidup bersama dalam ikatan yang suci"
        </blockquote>
      </div>

      <!-- Countdown Timer -->
      <div class="fade-in-up-delay-3">
        <div class="mb-6">
        <h3 class="font-poppins text-lg md:text-xl text-white/80 mb-6">Menuju Hari Bahagia</h3>
        <div class="grid grid-cols-4 gap-4 max-w-md mx-auto">
          <div class="countdown-item">
          <div class="countdown-number">{{ timeLeft.days }}</div>
          <div class="countdown-label">Hari</div>
          </div>
          <div class="countdown-item">
          <div class="countdown-number">{{ timeLeft.hours }}</div>
          <div class="countdown-label">Jam</div>
          </div>
          <div class="countdown-item">
          <div class="countdown-number">{{ timeLeft.minutes }}</div>
          <div class="countdown-label">Menit</div>
          </div>
          <div class="countdown-item">
          <div class="countdown-number">{{ timeLeft.seconds }}</div>
          <div class="countdown-label">Detik</div>
          </div>
        </div>
        </div>
        
        <!-- Wedding Date -->
        <div class="font-poppins text-base md:text-lg text-white/70">
        07 Desember 2025 • 07:00 WIB
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Bubble animation state
const bubbles = ref(Array.from({ length: 12 }, () => {
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

// Countdown state
const targetDate = new Date('2025-12-07T07:00:00')
const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

// Methods
const updateCountdown = () => {
  const now = new Date().getTime()
  const distance = targetDate.getTime() - now

  if (distance > 0) {
    timeLeft.value = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    }
  }
}

// Lifecycle
onMounted(() => {
  updateCountdown()
  setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  // Cleanup if needed
})
</script>

<style scoped>
/* Responsive improvements for mobile */
@media (max-width: 640px) {
  .gradient-text {
    font-size: 2.5rem !important;
  }
  .font-dancing {
    font-size: 1.5rem !important;
  }
  .corner-decoration img {
    width: 3rem !important;
    height: 3rem !important;
  }
  .countdown-number {
    font-size: 1.5rem !important;
  }
  
  /* Maintain rotation and scaling for each corner on small mobile */
  .fade-in-corner-tr img {
    transform: scaleX(-1) !important;
  }
  
  .fade-in-corner-bl img {
    transform: rotate(90deg) !important;
  }
  
  .fade-in-corner-br img {
    transform: rotate(90deg) scaleX(-1) !important;
  }
}

/* Animations */

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

/* Corner animations */
.fade-in-corner-tl {
  animation: fadeInCornerTL 1.5s ease-out forwards;
  opacity: 0;
}

.fade-in-corner-tr {
  animation: fadeInCornerTR 1.5s ease-out 0.3s forwards;
  opacity: 0;
}

.fade-in-corner-bl {
  animation: fadeInCornerBL 1.5s ease-out 0.6s forwards;
  opacity: 0;
}

.fade-in-corner-br {
  animation: fadeInCornerBR 1.5s ease-out 0.9s forwards;
  opacity: 0;
}

@keyframes fadeInCornerTL {
  from {
    opacity: 0;
    transform: translateX(-20px) translateY(-20px) rotate(-10deg);
  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(0) rotate(0deg);
  }
}

@keyframes fadeInCornerTR {
  from {
    opacity: 0;
    transform: translateX(20px) translateY(-20px) rotate(10deg) scaleX(-1);
  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(0) rotate(0deg) scaleX(-1);
  }
}

@keyframes fadeInCornerBL {
  from {
    opacity: 0;
    transform: translateX(-20px) translateY(20px) rotate(190deg);
  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(0) rotate(180deg);
  }
}

@keyframes fadeInCornerBR {
  from {
    opacity: 0;
    transform: translateX(20px) translateY(20px) rotate(170deg) scaleX(-1);
  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(0) rotate(180deg) scaleX(-1);
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

/* Countdown Styles */
.countdown-item {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.countdown-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.countdown-number {
  font-weight: bold;
  font-size: 1.5rem;
  color: white;
  font-family: 'Poppins', sans-serif;
}

@media (min-width: 768px) {
  .countdown-number {
    font-size: 1.875rem;
  }
}

.countdown-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.25rem;
  font-family: 'Poppins', sans-serif;
}

/* Corner decoration hover effects */
.corner-decoration {
  transition: all 0.4s ease;
}

.corner-decoration:hover {
  transform: scale(1.1);
  filter: brightness(1.2);
}

.corner-decoration:hover img {
  animation: gentle-glow 2s ease-in-out infinite;
}

@keyframes gentle-glow {
  0%, 100% { filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3)); }
  50% { filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.5)); }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .corner-decoration {
    top: 1rem !important;
    bottom: 1rem !important;
    left: 1rem !important;
    right: 1rem !important;
  }
  
  .corner-decoration img {
    width: 3rem !important;
    height: 3rem !important;
  }
  
  /* Maintain rotation and scaling for each corner on mobile */
  .fade-in-corner-tr img {
    transform: scaleX(-1) !important;
  }
  
  .fade-in-corner-bl img {
    transform: rotate(90deg) !important;
  }
  
  .fade-in-corner-br img {
    transform: rotate(90deg) scaleX(-1) !important;
  }
}
</style>
