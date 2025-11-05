<template>
  <section id="gift" class="pt-16 text-center min-h-screen relative overflow-hidden flex items-center justify-center" ref="sectionRef">
    <div class="max-w-4xl mx-auto px-6 relative z-30">
      <div class="gift-content">
        <!-- Title -->
        <div class="mb-12 scroll-animate-fade-up" ref="titleRef">
          <h2 class="gradient-text font-great-vibes text-4xl md:text-5xl lg:text-6xl font-normal mb-6 py-2">
            Gift Digital
          </h2>
          <div class="flex items-center justify-center mb-6">
            <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-24"></div>
            <div class="mx-6 text-white/80">
              <i class="fas fa-heart heart-beat text-xl"></i>
            </div>
            <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-24"></div>
          </div>
          <p class="text-white/80 italic text-lg">
            "Kehadiran Anda adalah hadiah terindah bagi kami"
          </p>
        </div>

        <!-- Gift Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12 scroll-animate-scale scroll-animate-delay-1" ref="giftCardRef">
          <!-- Bank Transfer -->
          <div class="gift-card bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-8 shadow-md border border-white/20 backdrop-blur-md relative overflow-hidden">
            <!-- Decorative elements -->
            <div class="absolute top-0 right-0 w-20 h-20 opacity-5">
              <img src="/wedding.png" alt="Decoration" class="w-full h-full object-cover"/>
            </div>
            <div class="absolute bottom-0 left-0 w-16 h-16 opacity-5 transform scale-x-[-1]">
              <img src="/wedding.png" alt="Decoration" class="w-full h-full object-cover"/>
            </div>
            
            <div class="relative z-10">
              <div class="flex items-center justify-center mb-6">
                <i class="fas fa-university text-2xl text-white/80 mr-3"></i>
                <h3 class="font-poppins text-xl font-semibold text-white">Bank Transfer</h3>
              </div>
              <div class="space-y-4">
                <div class="text-white/70 font-poppins">Bank BRI</div>
                <div class="font-mono text-2xl md:text-3xl font-bold text-white tracking-wider">
                  378401018627530
                </div>
                <div class="text-white/70 font-poppins">a.n. Jiyanto</div>
              </div>
              <button 
                @click="copyToClipboard('378401018627530')"
                class="copy-btn mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-white/20 via-white/10 to-white/20 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 shadow-md border border-white/30 group overflow-hidden relative backdrop-blur-sm"
              >
                <!-- Glossy overlay -->
                <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                
                <i class="fas fa-copy relative z-10"></i>
                <span class="relative z-10">Salin Rekening</span>
              </button>
            </div>
          </div>

          <!-- DANA E-Wallet -->
          <div class="gift-card bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-8 shadow-md border border-white/20 backdrop-blur-md relative overflow-hidden">
            <!-- Decorative elements -->
            <div class="absolute top-0 right-0 w-20 h-20 opacity-5">
              <img src="/wedding.png" alt="Decoration" class="w-full h-full object-cover"/>
            </div>
            <div class="absolute bottom-0 left-0 w-16 h-16 opacity-5 transform scale-x-[-1]">
              <img src="/wedding.png" alt="Decoration" class="w-full h-full object-cover"/>
            </div>
            
            <div class="relative z-10">
              <div class="flex items-center justify-center mb-6">
                <i class="fas fa-mobile-alt text-2xl text-white/80 mr-3"></i>
                <h3 class="font-poppins text-xl font-semibold text-white">E-Wallet DANA</h3>
              </div>
              <div class="space-y-4">
                <div class="text-white/70 font-poppins">DANA</div>
                <div class="font-mono text-2xl md:text-3xl font-bold text-white tracking-wider">
                  +62 858-8730-6450
                </div>
                <div class="text-white/70 font-poppins">a.n. Jiyanto</div>
              </div>
              <button 
                @click="copyToClipboard('+62 858-8730-6450')"
                class="copy-btn mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-white/20 via-white/10 to-white/20 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 shadow-md border border-white/30 group overflow-hidden relative backdrop-blur-sm"
              >
                <!-- Glossy overlay -->
                <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                
                <i class="fas fa-copy relative z-10"></i>
                <span class="relative z-10">Salin Nomor</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Thank You Note -->
        <div class="mb-12 scroll-animate-fade-up scroll-animate-delay-2" ref="thankYouRef">
          <p class="text-white/80 italic max-w-xl mx-auto font-playfair text-lg">
            "Terima kasih atas doa dan hadiah yang diberikan"
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useToastApp } from '~/composables/useToastApp'
import { useScrollAnimation } from '~/composables/useScrollAnimation'

// Scroll animation setup
const { observe } = useScrollAnimation({
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px',
  once: true,
  stagger: 200
})

// Refs
const sectionRef = ref<HTMLElement>()
const titleRef = ref<HTMLElement>()
const giftCardRef = ref<HTMLElement>()
const thankYouRef = ref<HTMLElement>()
const dividerRef = ref<HTMLElement>()

// Toast composable
const { success, error } = useToastApp()

// Methods
const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    success('Nomor rekening berhasil disalin!')
  } catch (err) {
    console.error('Failed to copy: ', err)
    error('Gagal menyalin nomor rekening')
  }
}

// Lifecycle
onMounted(() => {
  // Setup scroll animations
  nextTick(() => {
    if (titleRef.value) observe(titleRef.value)
    if (giftCardRef.value) observe(giftCardRef.value)
    if (thankYouRef.value) observe(thankYouRef.value)
    if (dividerRef.value) observe(dividerRef.value)
  })
})
</script>
<style scoped>
/* Text styling matching QuotesSection */
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

/* Gift Card */
.gift-card {
  transition: all 0.3s ease;
}

.gift-card:hover {
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06)) !important;
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15) !important;
}

/* Copy Button */
.copy-btn {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;
}

.copy-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.4);
}

/* Responsive improvements for mobile */
@media (max-width: 640px) {
  .gradient-text {
    font-size: 2.5rem !important;
  }
  
  .gift-card {
    padding: 1.5rem;
  }
  
  .font-mono {
    font-size: 1.5rem !important;
  }
}

@media (max-width: 768px) {
  .gift-card {
    padding: 1.5rem;
  }
}
</style>
