<template>
  <section class="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black flex items-center justify-center">
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
      <img src="/assets/images/angeldecor.png" alt="Angel Decoration" class="w-20 h-20 opacity-60 transform scaleX(-1) -rotate-90" />
    </div>
    <div class="absolute bottom-8 left-8 z-20 corner-decoration fade-in-corner-bl">
      <img src="/assets/images/angeldecor.png" alt="Angel Decoration" class="w-20 h-20 opacity-60 transform rotate-270" />
    </div>
    <div class="absolute bottom-8 right-8 z-20 corner-decoration fade-in-corner-br">
      <img src="/assets/images/angeldecor.png" alt="Angel Decoration" class="w-20 h-20 opacity-60 transform rotate-180 scaleX(-1)" />
    </div>

    <!-- Main Content -->
    <div class="relative z-30 w-full px-6 py-16">
      <!-- Section Title -->
      <div class="text-center mb-16 fade-in-up">
        <h2 class="gradient-text font-great-vibes text-4xl md:text-5xl lg:text-6xl font-normal mb-4">
          Mempelai
        </h2>
        <div class="flex items-center justify-center">
          <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-24"></div>
          <div class="mx-6 text-white/80">
            <i class="fas fa-heart heart-beat text-xl"></i>
          </div>
          <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-24"></div>
        </div>
      </div>

      <!-- Desktop Layout -->
      <div class="hidden md:flex max-w-6xl mx-auto items-center justify-center">
        <!-- Couple Content -->
        <div class="flex-1">
          <div class="grid grid-cols-2 gap-12">
            <!-- Jiyanto -->
            <div class="text-center fade-in-up-delay-1">
              <div class="w-48 h-48 mx-auto rounded-full mb-6 overflow-hidden border-4 border-white/30 shadow-2xl">
                <img src="/assets/images/jiyanto.png" alt="Jiyanto" class="w-full h-full object-cover" />
              </div>
              <h3 class="gradient-text font-great-vibes text-3xl lg:text-4xl font-normal mb-4">Jiyanto</h3>
              <div class="text-white/80 text-sm lg:text-base mb-2 font-poppins">Putra dari Bapak Panijan & Ibu Pasini</div>
              <div class="text-white/60 text-xs lg:text-sm font-poppins leading-relaxed">Dukuh Klompok, Desa Tanjung, RT 01 RW 03, Kedungtuban, Blora</div>
            </div>

            <!-- Nur Aini -->
            <div class="text-center fade-in-up-delay-2">
              <div class="w-48 h-48 mx-auto rounded-full mb-6 overflow-hidden border-4 border-white/30 shadow-2xl">
                <img src="/assets/images/nuraini.png" alt="Nur Aini" class="w-full h-full object-cover" />
              </div>
              <h3 class="gradient-text font-great-vibes text-3xl lg:text-4xl font-normal mb-4">Nur Aini</h3>
              <div class="text-white/80 text-sm lg:text-base mb-2 font-poppins">Putri dari Bapak Witam Ahmad Ihwani & Ibu Arwen</div>
              <div class="text-white/60 text-xs lg:text-sm font-poppins leading-relaxed">Desa Cindaga, RT 03 RW 14, Kebasen, Banyumas</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Layout -->
      <div class="md:hidden max-w-md mx-auto">
        <!-- Jiyanto -->
        <div class="text-center mb-12 fade-in-up-delay-1">
          <div class="w-40 h-40 mx-auto rounded-full mb-6 overflow-hidden border-4 border-white/30 shadow-2xl">
            <img src="/assets/images/jiyanto.png" alt="Jiyanto" class="w-full h-full object-cover" />
          </div>
          <h3 class="gradient-text font-great-vibes text-2xl font-normal mb-3">Jiyanto</h3>
          <div class="text-white/80 text-sm mb-2 font-poppins">Putra dari Bapak Panijan & Ibu Pasini</div>
          <div class="text-white/60 text-xs font-poppins leading-relaxed">Dukuh Klompok, Desa Tanjung, RT 01 RW 03, Kedungtuban, Blora</div>
        </div>

        <!-- Nur Aini -->
        <div class="text-center fade-in-up-delay-3">
          <div class="w-40 h-40 mx-auto rounded-full mb-6 overflow-hidden border-4 border-white/30 shadow-2xl">
            <img src="/assets/images/nuraini.png" alt="Nur Aini" class="w-full h-full object-cover" />
          </div>
          <h3 class="gradient-text font-great-vibes text-2xl font-normal mb-3">Nur Aini</h3>
          <div class="text-white/80 text-sm mb-2 font-poppins">Putri dari Bapak Witam Ahmad Ihwani & Ibu Arwen</div>
          <div class="text-white/60 text-xs font-poppins leading-relaxed">Desa Cindaga, RT 03 RW 14, Kebasen, Banyumas</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Bubble animation state (same as QuotesSection)
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
</script>

<style scoped>
/* Responsive improvements for mobile */
@media (max-width: 640px) {
  .gradient-text {
    font-size: 1.875rem !important;
  }
  .corner-decoration img {
    width: 3rem !important;
    height: 3rem !important;
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

.fade-in-left {
  animation: fadeInLeft 1s ease-out 0.7s forwards;
  opacity: 0;
  transform: translateX(-30px);
}

.fade-in-right {
  animation: fadeInRight 1s ease-out 0.7s forwards;
  opacity: 0;
  transform: translateX(30px);
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

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
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

/* Profile image hover effects */
.w-48.h-48, .w-40.h-40 {
  transition: all 0.3s ease;
}

.w-48.h-48:hover, .w-40.h-40:hover {
  transform: scale(1.05);
  border-color: rgba(255, 255, 255, 0.5);
}
</style>
