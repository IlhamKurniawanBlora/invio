<template>
  <section class="min-h-screen relative overflow-hidden flex items-center justify-center">
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
</script>

<style scoped>
/* Responsive improvements for mobile */
@media (max-width: 640px) {
  .gradient-text {
    font-size: 1.875rem !important;
  }
}

/* Text styling */
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

/* Animation utilities */
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

/* Profile image hover effects */
.w-48.h-48, .w-40.h-40 {
  transition: all 0.3s ease;
}

.w-48.h-48:hover, .w-40.h-40:hover {
  transform: scale(1.05);
  border-color: rgba(255, 255, 255, 0.5);
}
</style>
