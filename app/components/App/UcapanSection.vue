<template>
  <section class="py-16 text-center" ref="sectionRef">
    <div class="max-w-4xl mx-auto px-6">
      <div class="ucapan-content" :class="{ 'animate-in': isVisible }">
        <!-- Title -->
        <div class="mb-8">
          <h2 class="font-great-vibes text-3xl md:text-4xl font-normal mb-3 text-gray-800">
            Ucapan & Doa
          </h2>
          <p class="text-gray-600 italic">
            "Doa terbaik dari hati tulus untuk kedua mempelai"
          </p>
        </div>

        <!-- Prayer Content -->
        <div class="prayer-card max-w-2xl mx-auto mb-8">
          <blockquote class="text-lg text-gray-700 leading-relaxed italic mb-4 arabic-text">
            "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا"
          </blockquote>
          
          <p class="text-gray-600 mb-6">
            "Ya Tuhan kami, anugerahkanlah kepada kami pasangan hidup dan keturunan yang menyejukkan mata, 
            dan jadikanlah kami sebagai imam (pemimpin yang baik) bagi orang-orang yang bertakwa."
          </p>
          
          <div class="text-left space-y-4">
            <div class="doa-item">
              <h4 class="font-semibold text-amber-700 mb-1">
                <i class="fas fa-heart text-pink-500 mr-2"></i>
                Sakinah (Ketenangan)
              </h4>
              <p class="text-gray-600 text-sm">
                Semoga Allah memberikan ketenangan jiwa dalam rumah tangga kalian.
              </p>
            </div>
            
            <div class="doa-item">
              <h4 class="font-semibold text-amber-700 mb-1">
                <i class="fas fa-heart text-pink-500 mr-2"></i>
                Mawaddah (Cinta Kasih)
              </h4>
              <p class="text-gray-600 text-sm">
                Semoga cinta kasih di antara kalian selalu tumbuh dan menguat.
              </p>
            </div>
            
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
          
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="https://wa.me/6285643021070?text=Assalamualaikum%2C%20selamat%20menempuh%20hidup%20baru%20untuk%20Jiyanto%20%26%20Nur%20Aini.%20Semoga%20keluarga%20yang%20sakinah%2C%20mawaddah%2C%20warahmah%20%F0%9F%A4%B2%F0%9F%8E%89"
              target="_blank"
              class="contact-btn whatsapp-btn"
            >
              <i class="fab fa-whatsapp mr-2"></i>
              Kirim via WhatsApp
            </a>
            
            <a 
              href="mailto:example@email.com?subject=Ucapan%20Pernikahan&body=Assalamualaikum%2C%20selamat%20menempuh%20hidup%20baru%20untuk%20Jiyanto%20%26%20Nur%20Aini."
              class="contact-btn email-btn"
            >
              <i class="fas fa-envelope mr-2"></i>
              Kirim via Email
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Refs
const sectionRef = ref<HTMLElement>()
const isVisible = ref(false)

// Intersection Observer for scroll animations
let observer: IntersectionObserver

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === sectionRef.value) {
          isVisible.value = entry.isIntersecting
        }
      })
    },
    {
      threshold: 0.3,
      rootMargin: '-50px'
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value)
  }
})
</script>

<style scoped>
/* Prayer Card */
.prayer-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.prayer-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
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
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.875rem;
}

.whatsapp-btn {
  background: linear-gradient(45deg, #25d366, #128c7e);
  color: white;
}

.whatsapp-btn:hover {
  background: linear-gradient(45deg, #128c7e, #075e54);
  transform: translateY(-1px);
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
