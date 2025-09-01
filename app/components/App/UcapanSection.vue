<template>
  <section id="ucapan" class="py-16 text-center" ref="sectionRef">
    <div class="max-w-4xl mx-auto px-6">
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

        <!-- Prayer Content with paper-like design -->
        <div class="prayer-card max-w-2xl mx-auto mb-8 scroll-animate-scale scroll-animate-delay-1" ref="prayerCardRef">
          <blockquote class="text-lg text-gray-700 leading-relaxed italic mb-4 arabic-text">
            "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا"
          </blockquote>
          
          <div class="paper-divider"></div>
          
          <p class="text-gray-600 mb-6">
            "Ya Tuhan kami, anugerahkanlah kepada kami pasangan hidup dan keturunan yang menyejukkan mata, 
            dan jadikanlah kami sebagai imam (pemimpin yang baik) bagi orang-orang yang bertakwa."
          </p>
          
          <div class="paper-divider"></div>
          
          <div class="text-left space-y-6">
            <div class="doa-item scroll-animate-fade-left scroll-animate-delay-2">
              <h4 class="font-semibold text-amber-700 mb-1">
                <i class="fas fa-heart text-pink-500 mr-2"></i>
                Sakinah (Ketenangan)
              </h4>
              <p class="text-gray-600 text-sm">
                Semoga Allah memberikan ketenangan jiwa dalam rumah tangga kalian.
              </p>
            </div>
            
            <div class="paper-divider-small"></div>
            
            <div class="doa-item scroll-animate-fade-right scroll-animate-delay-3">
              <h4 class="font-semibold text-amber-700 mb-1">
                <i class="fas fa-heart text-pink-500 mr-2"></i>
                Mawaddah (Cinta Kasih)
              </h4>
              <p class="text-gray-600 text-sm">
                Semoga cinta kasih di antara kalian selalu tumbuh dan menguat.
              </p>
            </div>
            
            <div class="paper-divider-small"></div>
            
            <div class="doa-item">
              <h4 class="font-semibold text-amber-700 mb-1">
                <i class="fas fa-heart text-pink-500 mr-2"></i>
                Warahmah (Kasih Sayang)
              </h4>
              <p class="text-gray-600 text-sm">
                Semoga Allah melimpahkan rahmat dan kasih sayang-Nya kepada kalian.
              </p>
            </div>
          </div>
        </div>

        <!-- Contact for Wishes -->
        <div class="contact-section max-w-lg mx-auto">
          <h3 class="font-semibold text-lg mb-4 text-gray-800">
            Kirimkan Ucapan & Doa Anda
          </h3>
          
          <div class="flex justify-center">
            <a
              href="https://api.whatsapp.com/send/?phone=6285887306450&text=Assalamualaikum+Warahmatullahi+Wabarakatuh%2C+Selamat+menempuh+hidup+baru+untuk+Jiyanto+%26+Nur+Aini.+Semoga+menjadi+keluarga+yang+sakinah%2C+mawaddah%2C+warahmah.+%F0%9F%A4%B2%F0%9F%8E%89&type=phone_number&app_absent=0"
              target="_blank"
              class="flex items-center px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
            >
              <Icon name="logos:whatsapp-icon" class="w-5 h-5 mr-2" />
              Kirim Ucapan
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
/* Responsive improvements for mobile */
@media (max-width: 640px) {
  .gradient-text {
    font-size: 2.5rem !important;
  }
  .font-dancing {
    font-size: 1.5rem !important;
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

/* Prayer Card */
.prayer-card {
  background: linear-gradient(135deg, #fefefe 0%, #faf8f6 100%);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid #e5e7eb;
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
  position: relative;
}

.prayer-card:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 10px 25px -3px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

/* Paper dividers */
.paper-divider {
  height: 1px;
  background: repeating-linear-gradient(
    to right,
    #d1d5db 0px,
    #d1d5db 10px,
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
  background: linear-gradient(to right, transparent, #e5e7eb 20%, #e5e7eb 80%, transparent);
}

.paper-divider-small {
  height: 1px;
  background: repeating-linear-gradient(
    to right,
    #e5e7eb 0px,
    #e5e7eb 5px,
    transparent 5px,
    transparent 10px
  );
  margin: 1rem 0;
  opacity: 0.6;
}

/* Contact Section */
.contact-section {
  background: #f9fafb;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
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

.email-btn {
  background: linear-gradient(45deg, #6366f1, #4f46e5);
  color: white;
}

.email-btn:hover {
  background: linear-gradient(45deg, #4f46e5, #4338ca);
  transform: translateY(-1px);
}

/* Arabic text styling */
.arabic-text {
  direction: rtl;
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.8;
}

/* Animation for scroll reveal */
.ucapan-content.animate-in .prayer-card {
  animation: slideInUp 0.6s ease-out 0.2s forwards;
}

.ucapan-content.animate-in .contact-section {
  animation: slideInUp 0.6s ease-out 0.4s forwards;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .prayer-card {
    padding: 1.5rem;
  }
  
  .contact-section {
    padding: 1rem;
  }
  
  .arabic-text {
    font-size: 1rem;
  }
  
  .contact-btn {
    padding: 0.625rem 1.25rem;
    font-size: 0.8rem;
  }
}
</style>
