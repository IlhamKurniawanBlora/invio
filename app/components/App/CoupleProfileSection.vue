<template>
  <section id="couple" class="min-h-screen relative overflow-hidden flex items-center justify-center">
    <!-- Angel Decorations -->
    <div class="absolute top-4 left-2 md:top-10 md:left-10 z-20 opacity-20 animate-float scroll-animate-fade-left" ref="angelTopLeftRef">
      <img src="/assets/images/angeldecor.png" alt="Angel Decoration" class="w-12 h-12 md:w-32 md:h-32" />
    </div>
    <div class="absolute top-4 right-2 md:top-10 md:right-10 z-20 opacity-20 animate-float-reverse scroll-animate-fade-right" ref="angelTopRightRef">
      <img src="/assets/images/angeldecor.png" alt="Decorative Angel" class="w-10 h-10 md:w-28 md:h-28 rotate-90" />
    </div>
    <div class="absolute bottom-4 left-2 md:bottom-10 md:left-10 z-20 opacity-15 animate-float-slow scroll-animate-fade-left scroll-animate-delay-3" ref="angelBottomLeftRef">
      <img src="/assets/images/angeldecor.png" alt="Decorative Angel" class="w-8 h-8 md:w-24 md:h-24 transform scale-x-[-1] rotate-180" />
    </div>
    <div class="absolute bottom-4 right-2 md:bottom-5 md:right-10 z-20 opacity-15 animate-float-slow-reverse scroll-animate-fade-right scroll-animate-delay-3" ref="angelBottomRightRef">
      <img src="/assets/images/angeldecor.png" alt="Angel Decoration" class="w-10 h-10 md:w-28 md:h-28 transform scale-x-[-1] rotate-90" />
    </div>

    <!-- Main Content -->
    <div class="relative z-30 w-full px-6 py-16">
      <!-- Section Title -->
      <div class="text-center mb-16 scroll-animate-fade-up" ref="titleRef">
        <h2 class="gradient-text font-great-vibes text-4xl md:text-5xl lg:text-6xl font-normal mb-4 py-2">
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
          <div class="grid grid-cols-2 gap-12 relative">
            <!-- Central Angel Decoration -->
            <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scroll-animate-scale scroll-animate-delay-2" ref="centralAngelRef">
              <div class="w-24 h-24 opacity-30 animate-pulse">
                <img src="/assets/images/love.png" alt="Central Angel" class="w-full h-full" />
              </div>
            </div>

            <!-- Jiyanto -->
            <div class="text-center scroll-animate-fade-left scroll-animate-delay-1" ref="jiyantoRef">
              <div class="w-48 h-48 mx-auto rounded-full mb-6 overflow-hidden border-4 border-white/30 shadow-2xl">
                <img src="/assets/images/jiyanto.png" alt="Jiyanto" class="w-full h-full object-cover" />
              </div>
              <h3 class="gradient-text font-great-vibes text-3xl lg:text-4xl font-normal mb-4">Jiyanto</h3>
              <div class="text-white/80 text-sm lg:text-base mb-2 font-poppins">Putra dari Bapak Panijan & Ibu Pasini</div>
              <div class="text-white/60 text-xs lg:text-sm font-poppins leading-relaxed">Dukuh Klompok, Desa Tanjung, RT 01 RW 03, Kedungtuban, Blora</div>
            </div>

            <!-- Nur Aini -->
            <div class="text-center scroll-animate-fade-right scroll-animate-delay-2" ref="nurAiniRef">
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
        <div class="text-center mb-12 scroll-animate-fade-up scroll-animate-delay-1" ref="jiyantoMobileRef">
          <div class="w-40 h-40 mx-auto rounded-full mb-6 overflow-hidden border-4 border-white/30 shadow-2xl">
            <img src="/assets/images/jiyanto.png" alt="Jiyanto" class="w-full h-full object-cover" />
          </div>
          <h3 class="gradient-text font-great-vibes text-2xl font-normal mb-3">Jiyanto</h3>
          <div class="text-white/80 text-sm mb-2 font-poppins">Putra dari Bapak Panijan & Ibu Pasini</div>
          <div class="text-white/60 text-xs font-poppins leading-relaxed">Dukuh Klompok, Desa Tanjung, RT 01 RW 03, Kedungtuban, Blora</div>
        </div>

        <!-- Angel Divider for Mobile -->
        <div class="flex justify-center my-8 scroll-animate-scale scroll-animate-delay-2" ref="angelDividerRef">
          <div class="w-16 h-16 opacity-30 animate-bounce">
            <img src="/assets/images/love.png" alt="Angel Divider" class="w-full h-full" />
          </div>
        </div>

        <!-- Nur Aini -->
        <div class="text-center scroll-animate-fade-up scroll-animate-delay-3" ref="nurAiniMobileRef">
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
const centralAngelRef = ref<HTMLElement>()
const jiyantoRef = ref<HTMLElement>()
const nurAiniRef = ref<HTMLElement>()
const jiyantoMobileRef = ref<HTMLElement>()
const nurAiniMobileRef = ref<HTMLElement>()
const angelDividerRef = ref<HTMLElement>()
const angelTopLeftRef = ref<HTMLElement>()
const angelTopRightRef = ref<HTMLElement>()
const angelBottomLeftRef = ref<HTMLElement>()
const angelBottomRightRef = ref<HTMLElement>()

// Lifecycle
onMounted(() => {
  // Setup scroll animations
  nextTick(() => {
    if (titleRef.value) observe(titleRef.value)
    if (centralAngelRef.value) observe(centralAngelRef.value)
    if (jiyantoRef.value) observe(jiyantoRef.value)
    if (nurAiniRef.value) observe(nurAiniRef.value)
    if (jiyantoMobileRef.value) observe(jiyantoMobileRef.value)
    if (nurAiniMobileRef.value) observe(nurAiniMobileRef.value)
    if (angelDividerRef.value) observe(angelDividerRef.value)
    if (angelTopLeftRef.value) observe(angelTopLeftRef.value)
    if (angelTopRightRef.value) observe(angelTopRightRef.value)
    if (angelBottomLeftRef.value) observe(angelBottomLeftRef.value)
    if (angelBottomRightRef.value) observe(angelBottomRightRef.value)
  })
})
</script>

<style scoped>
/* Mobile-specific adjustments for angel decorations */
@media (max-width: 768px) {
  .absolute.top-4.left-2,
  .absolute.top-4.right-2 {
    opacity: 0.5 !important;
  }
  
  .absolute.bottom-4.left-2,
  .absolute.bottom-4.right-2 {
    opacity: 0.2 !important;
  }
}

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

/* Angel decoration animations */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float 6s ease-in-out infinite reverse;
}

.animate-float-slow {
  animation: float 8s ease-in-out infinite;
}

.animate-float-slow-reverse {
  animation: float 8s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg);
  }
  50% { 
    transform: translateY(-15px) rotate(2deg);
  }
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
