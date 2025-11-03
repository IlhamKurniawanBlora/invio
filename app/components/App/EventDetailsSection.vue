<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'

// Scroll animation setup
const { observe } = useScrollAnimation({
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px',
  once: true,
  stagger: 200
})

// Get guest name from route query parameter
const route = useRoute()
const guestName = computed(() => {
  const name = route.query.to as string
  return name ? decodeURIComponent(name).trim() : null
})

// Template refs for animation
const titleRef = ref<HTMLElement>()
const cardsRef = ref<HTMLElement>()
const closingRef = ref<HTMLElement>()



// Lifecycle
onMounted(() => {
  // Setup scroll animations
  nextTick(() => {
    if (titleRef.value) {
      observe(titleRef.value)
      // Observe all children with scroll-animate classes
      const animatedElements = titleRef.value.querySelectorAll('[class*="scroll-animate"]')
      animatedElements.forEach((el) => {
        if (el !== titleRef.value) observe(el)
      })
    }
    if (cardsRef.value) {
      observe(cardsRef.value)
      const animatedElements = cardsRef.value.querySelectorAll('[class*="scroll-animate"]')
      animatedElements.forEach((el) => {
        if (el !== cardsRef.value) observe(el)
      })
    }
    if (closingRef.value) {
      observe(closingRef.value)
    }
  })
})
</script>

<template>
    <section id="event" class="min-h-screen relative overflow-hidden flex items-center justify-center py-16 lg:py-20">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5">
            <div class="absolute inset-0" style="background-image: radial-gradient(circle, #ffffff 1px, transparent 1px); background-size: 30px 30px;"></div>
        </div>

        <!-- Main Content -->
        <div class="relative z-30 w-full px-6">
            <!-- Section Title -->
            <div class="text-center mb-16 scroll-animate-fade-up" ref="titleRef">
                <h2 class="py-2 gradient-text font-great-vibes text-4xl md:text-5xl lg:text-6xl font-normal mb-6 scroll-animate-fade-up scroll-animate-delay-1">
                    Detail Undangan
                </h2>
                <div class="flex items-center justify-center mb-6 scroll-animate-fade-up scroll-animate-delay-2">
                    <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-24"></div>
                    <div class="mx-6 text-white/80">
                        <img src="/wedding.png" alt="Heart Icon" class="heart-beat w-10 h-10">
                    </div>
                    <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-24"></div>
                </div>
                <h1 class="gradient-text font-great-vibes text-2xl md:text-3xl lg:text-4xl font-normal leading-tight scroll-animate-fade-up scroll-animate-delay-3">
                  Assalamualaikum wr. wb
                </h1>
                <p class="mt-4 text-white/70 max-w-2xl mx-auto text-sm lg:text-base leading-relaxed font-medium scroll-animate-fade-up scroll-animate-delay-2">
                    Yth. Bapak/Ibu/Saudara/i
                </p>
                 <!-- Guest Name Section -->
                <div v-if="guestName" class="fade-in-up-delay-2 mounting-animation">
                  <div class="mb-2">
                    <h3 class="font-great-vibes text-2xl md:text-3xl lg:text-4xl font-normal text-white gradient-text tracking-wide">
                      {{ guestName }}
                    </h3>
                  </div>
                </div>
                <p class="my-4 text-white/70 max-w-2xl mx-auto text-sm lg:text-base leading-relaxed scroll-animate-fade-up scroll-animate-delay-3">
                    Dengan segala kerendahan hati, kami mengundang Bapak/Ibu/Saudara/i dan teman-teman untuk menghadiri acara pernikahan kami
                </p>
                <div class="mb-8 scroll-animate-fade-up scroll-animate-delay-2" ref="cardsRef">
                  <h1 class="gradient-text font-great-vibes text-3xl md:text-4xl lg:text-5xl font-normal leading-tight scroll-animate-fade-up scroll-animate-delay-1">
                    Jiyanto
                  </h1>
                  <p class="text-white/70 max-w-2xl mx-auto text-sm lg:text-base leading-relaxed scroll-animate-fade-up scroll-animate-delay-2">
                      Putra dari Bapak Panijan &amp; Ibu Pasini<br>
                      Dukuh Klompok, Desa Tanjung, RT 01 RW 03, Kedungtuban, Blora
                  </p>
                  <h2 class="font-dancing text-2xl md:text-3xl lg:text-4xl font-bold mt-4 text-white/90 tracking-wide scroll-animate-scale scroll-animate-delay-3">
                    &amp;
                  </h2>
                  <h1 class="gradient-text font-great-vibes text-3xl md:text-4xl lg:text-5xl font-normal leading-tight scroll-animate-fade-up scroll-animate-delay-4">
                    Nur Aini
                  </h1>
                  <p class="text-white/70 max-w-2xl mx-auto text-sm lg:text-base leading-relaxed scroll-animate-fade-up scroll-animate-delay-3">
                      Putri dari Bapak Witam Ahmad Ihwani &amp; Ibu Arwen <br>
                      Desa Cindaga, RT 03 RW 14, Kebasen, Banyumas
                  </p>
                  <p class="my-4 text-white/70 max-w-2xl mx-auto text-sm lg:text-base leading-relaxed scroll-animate-fade-up scroll-animate-delay-4">
                      yang InsyaAllah akan diselenggarakan pada:
                  </p>
                  <div class="flex justify-center scroll-animate-fade-up scroll-animate-delay-2">
                    <div class="text-left text-white/70 max-w-2xl text-sm lg:text-base leading-relaxed scroll-animate-scale scroll-animate-delay-3">
                      <p>
                        <span class="inline-block w-24">Tanggal</span>
                        <span class="inline-block">: 07 Desember 2025</span>
                        <br>
                        <span class="inline-block w-24">Waktu</span>
                        <span class="inline-block">: 09.00 – 12.00 WIB (Ngunduh Mantu)</span>
                        <br>
                        <span class="inline-block w-24">Lokasi</span>
                        <span class="inline-block">: Dukuh Klompok, Desa Tanjung, RT 01 RW 03, Kedungtuban, Blora</span>
                        <br>
                        <span class="inline-block w-24"></span>
                        <span class="inline-block">  (Kediaman Mempelai Pria)</span>
                      </p>
                    </div>
                  </div>
                  <p class="my-4 text-white/70 max-w-2xl mx-auto text-sm lg:text-base leading-relaxed scroll-animate-fade-up scroll-animate-delay-4">
                      💌 Kehadiran Anda sangat berarti bagi kami.
                      <span class="block mt-4">
                        Karena keterbatasan jarak dan waktu tidak dapat mengirimkan undangan ini secara langsung, maka melalui e-Invitation ini dapat menjadi pengganti undangan resmi sehingga tujuan kami tersampaikan.
                      </span>
                      <span class="block mt-4">
                        Kami sangat mengharapkan kehadiran Anda.
                      </span>
                  </p>
                </div>
                <h1 class="gradient-text font-great-vibes text-2xl md:text-3xl lg:text-4xl font-normal leading-tight scroll-animate-fade-up scroll-animate-delay-3" ref="closingRef">
                  Wassalamualaikum wr. wb
                </h1>
                <div class="flex items-center justify-center mb-6 scroll-animate-fade-up scroll-animate-delay-4">
                    <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-24"></div>
                    <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-24"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Gradient text styling */
.gradient-text {
  background: linear-gradient(45deg, #ffffff, #f8fafc, #e2e8f0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Heart beat animation */
.heart-beat {
  animation: heartbeat 2s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
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

.scroll-animate-scale {
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.scroll-animate-scale.is-visible {
  opacity: 1 !important;
  transform: scale(1) !important;
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

/* Text appearance animations for guest name */
.fade-in-up {
  opacity: 0;
  transform: translateY(12px);
  animation: fadeInUp 700ms cubic-bezier(.2,.8,.2,1) forwards;
  will-change: opacity, transform;
}

.fade-in-up-delay-2 { 
  animation-delay: 320ms; 
}

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

/* Force visibility on page load */
section#event {
  visibility: visible;
  opacity: 1;
}

section#event * {
  visibility: visible;
}

/* Responsive improvements for mobile */
@media (max-width: 640px) {
  .gradient-text {
    font-size: 1.5rem !important;
  }
}

@media (max-width: 768px) {
  .gradient-text {
    font-size: 1.875rem !important;
  }
  
  .text-4xl {
    font-size: 1.875rem !important;
  }
  
  .text-5xl {
    font-size: 2.25rem !important;
  }
}
</style>