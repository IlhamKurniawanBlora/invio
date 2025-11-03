<template>
  <div class="w-full max-w-4xl mx-auto px-4 py-8">
    <!-- Section Title -->
      <div class="text-center mb-16 scroll-animate-fade-up" ref="titleRef">
        <h2 class="gradient-text font-great-vibes text-4xl md:text-5xl lg:text-6xl font-normal mb-4 py-2 scroll-animate-fade-up scroll-animate-delay-1">
          Lokasi Acara
        </h2>
        <div class="flex items-center justify-center scroll-animate-fade-up scroll-animate-delay-2">
          <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-24"></div>
          <div class="mx-6 text-white/80">
            <i class="fas fa-heart heart-beat text-xl"></i>
          </div>
          <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-24"></div>
        </div>
      </div>
    <!-- Maps Embed -->
    <div class="rounded-lg overflow-hidden shadow-lg mb-6 scroll-animate-fade-up scroll-animate-delay-3" ref="mapsRef">

      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3958.5082624183046!2d111.471655!3d-7.182695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMTAnNTcuNyJTIDExMcKwMjgnMTguMCJF!5e0!3m2!1sid!2sid!4v1762195073395!5m2!1sid!2sid" width="100%"
        height="500"
        style="border: 0"
        class="w-full"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <!-- Info Card -->
    <div class="bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-8 shadow-md border border-white/20 backdrop-blur-md relative overflow-hidden scroll-animate-fade-up scroll-animate-delay-4" ref="cardRef">
      <!-- Decorative elements -->
      <div class="absolute top-0 right-0 w-24 h-24 opacity-5">
        <img src="/wedding.png" alt="Decoration" class="w-full h-full object-cover"/>
      </div>
      <div class="absolute bottom-0 left-0 w-20 h-20 opacity-5 transform scale-x-[-1]">
        <img src="/wedding.png" alt="Decoration" class="w-full h-full object-cover"/>
      </div>
      
      <div class="relative z-10">
        <h2 class="gradient-text text-3xl md:text-4xl font-great-vibes font-normal mb-3 text-white">Lokasi Acara</h2>
        <p class="text-white/80 mb-6 text-base leading-relaxed">
          Klik tombol di bawah untuk membuka lokasi di Google Maps
        </p>
        <a 
          href="https://maps.app.goo.gl/ydyBUAkHFJw5cDdE6" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-white/20 via-white/10 to-white/20 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 shadow-md border border-white/30 group overflow-hidden relative backdrop-blur-sm"
        >
          <!-- Glossy overlay -->
          <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          
          <Icon name="i-lucide-map-pin" class="relative z-10 w-5 h-5" />
          <span class="relative z-10">Buka di Google Maps</span> 
        </a>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'

// Setup scroll animation
const { observe } = useScrollAnimation({
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px',
  once: true,
  stagger: 150
})

// Template refs
const titleRef = ref<HTMLElement>()
const mapsRef = ref<HTMLElement>()
const cardRef = ref<HTMLElement>()

// Lifecycle
onMounted(() => {
  nextTick(() => {
    // Observe title section with all child elements
    const allAnimatedElements = document.querySelectorAll('[class*="scroll-animate"]')
    allAnimatedElements.forEach((el, index) => {
      observe(el)
    })
    
    // Also observe main container elements
    if (mapsRef.value) {
      observe(mapsRef.value)
    }
    
    if (cardRef.value) {
      observe(cardRef.value)
    }
  })
})
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

/* Heart beat animation */
.heart-beat {
  animation: heartbeat 2s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Scroll animation classes */
.scroll-animate-fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.scroll-animate-fade-up.is-visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.scroll-animate-delay-1 {
  transition-delay: 0.2s !important;
}

.scroll-animate-delay-2 {
  transition-delay: 0.4s !important;
}

.scroll-animate-delay-3 {
  transition-delay: 0.6s !important;
}

.scroll-animate-delay-4 {
  transition-delay: 0.8s !important;
}

/* Respect user preference for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .scroll-animate-fade-up {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
</style>