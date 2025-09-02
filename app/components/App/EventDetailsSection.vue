<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'

// Scroll animation setup
const { observe } = useScrollAnimation({
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px',
  once: true,
  stagger: 200
})

// Template refs for animation
const titleRef = ref<HTMLElement>()
const eventCardRef = ref<HTMLElement>()

// Lifecycle
onMounted(() => {
  // Setup scroll animations
  nextTick(() => {
    if (titleRef.value) observe(titleRef.value)
    if (eventCardRef.value) observe(eventCardRef.value)
  })
})
</script>
<template>
    <section id="event" class="min-h-screen relative overflow-hidden text-white flex items-center justify-center">
        <!-- Main Content -->
        <div class="relative z-30 w-full px-6 py-16">
            <!-- Section Title -->
            <div class="text-center mb-16 scroll-animate-fade-up" ref="titleRef">
                <h2 class="py-2 gradient-text font-great-vibes text-4xl md:text-5xl lg:text-6xl font-normal mb-4">
                    Detail Acara
                </h2>
                <div class="flex items-center justify-center">
                    <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-24"></div>
                    <div class="mx-6 text-white/80">
                        <i class="fas fa-calendar-heart heart-beat text-xl"></i>
                    </div>
                    <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-24"></div>
                </div>
            </div>

            <!-- Event Card -->
            <div class="max-w-lg mx-auto">
                <!-- Ngunduh Mantu -->
                <div class="scroll-animate-scale scroll-animate-delay-1 bg-white/10 backdrop-blur-sm rounded-3xl p-10 text-center hover:bg-white/20 transition-all duration-500 border border-white/20 shadow-2xl relative overflow-hidden" ref="eventCardRef">
                    <!-- Angel Decorations inside card -->
                    <div class="absolute top-4 left-4 corner-decoration fade-in-corner-tl">
                        <img src="/assets/images/angeldecor.png" alt="Angel Decoration" class="w-12 h-12 opacity-40" />
                    </div>
                    <div class="absolute top-4 right-4 corner-decoration fade-in-corner-tr">
                        <img src="/assets/images/angeldecor.png" alt="Angel Decoration" class="w-12 h-12 opacity-40 transform scaleX(-1) translate-y-1" />
                    </div>
                    <div class="absolute bottom-4 left-4 corner-decoration fade-in-corner-bl">
                        <img src="/assets/images/angeldecor.png" alt="Angel Decoration" class="w-12 h-12 opacity-40 transform rotate-90" />
                    </div>
                    <div class="absolute bottom-4 right-4 corner-decoration fade-in-corner-br">
                        <img src="/assets/images/angeldecor.png" alt="Angel Decoration" class="w-12 h-12 opacity-40 transform rotate-90 scaleX(-1)" />
                    </div>
                    
                    <h3 class="py-2 gradient-text font-great-vibes text-4xl lg:text-5xl font-normal mb-8 relative z-10">Ngunduh Mantu</h3>
                    <div class="space-y-4 text-white/80 font-poppins relative z-10">
                        <p class="flex items-center justify-center text-base lg:text-lg">
                            <i class="fas fa-calendar mr-3 text-white/60"></i> 
                            Minggu, 07 Desember 2025
                        </p>
                        <p class="flex items-center justify-center text-base lg:text-lg">
                            <i class="fas fa-clock mr-3 text-white/60"></i> 
                            10:00 WIB - Selesai
                        </p>
                        <p class="flex items-center justify-center text-base lg:text-lg">
                            <i class="fas fa-home mr-3 text-white/60"></i> 
                            Kediaman Mempelai Pria
                        </p>
                        <p class="text-sm lg:text-base text-white/60 mt-6 leading-relaxed">
                            Dukuh Klompok, Desa Tanjung, RT 01 RW 03, Kedungtuban, Blora
                        </p>
                        <div class="mt-8">
                            <a href="https://maps.app.goo.gl/nareYcxHAFfc9XSE9?g_st=awb" target="_blank" 
                               class="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full text-base font-medium transition-all duration-300 border border-white/30">
                                <i class="fas fa-map-marker-alt mr-2"></i>
                                Lihat Lokasi
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Corner animations for inner card decorations */
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

/* Gradient text styling */
.gradient-text {
  background: linear-gradient(45deg, #ffffff, #f8fafc, #e2e8f0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
}

/* Heart beat animation */
.heart-beat {
  animation: heartbeat 2s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Fade in animations */
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
  .gradient-text {
    font-size: 1.875rem !important;
  }
  
  .corner-decoration img {
    width: 2rem !important;
    height: 2rem !important;
  }
}

/* Card hover effects */
.bg-white\/10:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
}
</style>
