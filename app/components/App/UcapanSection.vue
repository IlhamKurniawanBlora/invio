<template>
  <section id="ucapan" class="py-16 text-center" ref="sectionRef">
    <div class="w-full max-w-4xl mx-auto px-6">
      <div class="ucapan-content">
        <!-- Title -->
        <div class="mb-8 scroll-animate-fade-up" ref="titleRef">
          <h1 class="gradient-text font-great-vibes text-5xl md:text-6xl lg:text-7xl font-normal leading-tight">
            Ucapan & Doa
          </h1>
          <h2 class="font-dancing text-2xl md:text-3xl lg:text-4xl font-bold mt-4 text-white/90 tracking-wide">
            "Doa terbaik dari hati tulus untuk kedua mempelai"
          </h2>
        </div>

        <!-- Prayer Content -->
        <div class="prayer-content max-w-2xl mx-auto mb-8 scroll-animate-scale scroll-animate-delay-1" ref="prayerCardRef">
          <blockquote class="text-lg text-white/90 leading-relaxed italic mb-4 arabic-text scroll-animate-fade-up scroll-animate-delay-1">
            "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا"
          </blockquote>
          
          <div class="paper-divider"></div>
          
          <p class="text-white/80 mb-6 scroll-animate-fade-up scroll-animate-delay-2">
            "Ya Tuhan kami, anugerahkanlah kepada kami pasangan hidup dan keturunan yang menyejukkan mata, 
            dan jadikanlah kami sebagai imam (pemimpin yang baik) bagi orang-orang yang bertakwa."
          </p>
          
          <div class="paper-divider"></div>
        
          
          <div class="text-left space-y-6">
            <div class="doa-item scroll-animate-fade-left scroll-animate-delay-2">
              <h4 class="font-semibold text-white/90 mb-1">
                <i class="fas fa-heart text-pink-500 mr-2"></i>
                Sakinah (Ketenangan)
              </h4>
              <p class="text-white/70 text-sm">
                Semoga Allah memberikan ketenangan jiwa dalam rumah tangga kalian.
              </p>
            </div>
            
            <div class="paper-divider-small"></div>
            
            <div class="doa-item scroll-animate-fade-right scroll-animate-delay-3">
              <h4 class="font-semibold text-white/90 mb-1">
                <i class="fas fa-heart text-pink-500 mr-2"></i>
                Mawaddah (Cinta Kasih)
              </h4>
              <p class="text-white/70 text-sm">
                Semoga cinta kasih di antara kalian selalu tumbuh dan menguat.
              </p>
            </div>
            
            <div class="paper-divider-small"></div>
            
            <div class="doa-item scroll-animate-fade-up scroll-animate-delay-4">
              <h4 class="font-semibold text-white/90 mb-1">
                <i class="fas fa-heart text-pink-500 mr-2"></i>
                Warahmah (Kasih Sayang)
              </h4>
              <p class="text-white/70 text-sm">
                Semoga Allah melimpahkan rahmat dan kasih sayang-Nya kepada kalian.
              </p>
            </div>
          </div>
        </div>

        <!-- Contact for Wishes -->
        <div class="contact-section w-full max-w-4xl mx-auto bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-8 shadow-md border border-white/20 backdrop-blur-md relative overflow-hidden scroll-animate-fade-up scroll-animate-delay-2">
          <!-- Decorative elements -->
          <div class="absolute top-0 right-0 w-24 h-24 opacity-5">
            <img src="/wedding.png" alt="Decoration" class="w-full h-full object-cover"/>
          </div>
          <div class="absolute bottom-0 left-0 w-20 h-20 opacity-5 transform scale-x-[-1]">
            <img src="/wedding.png" alt="Decoration" class="w-full h-full object-cover"/>
          </div>
          
          <div class="relative z-10">
            <h2 class="gradient-text text-2xl md:text-3xl font-great-vibes font-normal mb-3 text-white">Kirimkan Ucapan & Doa</h2>
            <p class="text-white/80 mb-6 text-base leading-relaxed">
              Bagikan doa dan ucapan terbaik Anda melalui WhatsApp
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=6285887306450&text=Assalamualaikum+Warahmatullahi+Wabarakatuh%2C+Selamat+menempuh+hidup+baru+untuk+Jiyanto+%26+Nur+Aini.+Semoga+menjadi+keluarga+yang+sakinah%2C+mawaddah%2C+warahmah.+%F0%9F%A4%B2%F0%9F%8E%89&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-white/20 via-white/10 to-white/20 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 shadow-md border border-white/30 group overflow-hidden relative backdrop-blur-sm"
            >
              <!-- Glossy overlay -->
              <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              
              <Icon name="logos:whatsapp-icon" class="relative z-10 w-5 h-5" />
              <span class="relative z-10">Kirim via WhatsApp</span> 
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'

// Scroll animation setup
const { observe, unobserve } = useScrollAnimation({
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px',
  once: true,
  stagger: 200
})

// Refs
const sectionRef = ref<HTMLElement>()
const titleRef = ref<HTMLElement>()
const prayerCardRef = ref<HTMLElement>()

// Lifecycle
onMounted(() => {
  // Setup scroll animations
  nextTick(() => {
    if (titleRef.value) observe(titleRef.value)
    if (prayerCardRef.value) observe(prayerCardRef.value)
    
    // Also observe doa items
    const doaItems = document.querySelectorAll('#ucapan .doa-item')
    doaItems.forEach(item => observe(item as Element))
  })
})

onUnmounted(() => {
  // Cleanup animations if needed
  if (sectionRef.value) {
    unobserve(sectionRef.value)
  }
})
</script>

<style scoped>
/* Gradient text styling */
.gradient-text {
  background: linear-gradient(45deg, #ffffff, #f8fafc, #e2e8f0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
}

/* Paper dividers */
.paper-divider {
  height: 1px;
  background: repeating-linear-gradient(
    to right,
    rgba(255, 255, 255, 0.2) 0px,
    rgba(255, 255, 255, 0.2) 10px,
    transparent 10px,
    transparent 15px
  );
  margin: 1.5rem 0;
  position: relative;
}

.paper-divider::before {
  content: '';
  position: absolute;
  left: 0;
  top: -1px;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1) 20%, rgba(255, 255, 255, 0.1) 80%, transparent);
}

.paper-divider-small {
  height: 1px;
  background: repeating-linear-gradient(
    to right,
    rgba(255, 255, 255, 0.15) 0px,
    rgba(255, 255, 255, 0.15) 5px,
    transparent 5px,
    transparent 10px
  );
  margin: 1rem 0;
  opacity: 0.6;
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

.scroll-animate-fade-left {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.scroll-animate-fade-left.is-visible {
  opacity: 1 !important;
  transform: translateX(0) !important;
}

.scroll-animate-fade-right {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.scroll-animate-fade-right.is-visible {
  opacity: 1 !important;
  transform: translateX(0) !important;
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

/* Contact Buttons */
.contact-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.875rem 1.75rem;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.875rem;
}

.whatsapp-btn {
  background: linear-gradient(45deg, #25d366, #128c7e);
  color: white;
  box-shadow: 0 2px 8px rgba(37, 211, 102, 0.3);
}

.whatsapp-btn:hover {
  background: linear-gradient(45deg, #128c7e, #075e54);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
}

/* Arabic text styling */
.arabic-text {
  direction: rtl;
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.8;
}

/* Responsive improvements for mobile */
@media (max-width: 640px) {
  .gradient-text {
    font-size: 2.5rem !important;
  }
  .font-dancing {
    font-size: 1.5rem !important;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .contact-section {
    padding: 1rem;
  }
  
  .arabic-text {
    font-size: 1rem;
  }
}
</style>
