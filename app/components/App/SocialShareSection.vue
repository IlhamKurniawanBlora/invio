<template>
  <section class="py-16 text-center" ref="sectionRef">
    <div class="max-w-3xl mx-auto px-6">
      <div class="share-content">
        <!-- Judul -->
        <!-- Title -->
        <div class="mb-8 scroll-animate-fade-up">
          <h1 class="gradient-text font-great-vibes text-5xl md:text-6xl lg:text-7xl font-normal leading-tight">
            Bagikan Kebahagiaan
          </h1>
          <div class="flex items-center justify-center scroll-animate-fade-up scroll-animate-delay-2">
          <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-24"></div>
          <div class="mx-6 text-white/80">
            <i class="fas fa-heart heart-beat text-xl"></i>
          </div>
          <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-24"></div>
        </div>
          <h2 class="font-dancing text-2xl md:text-3xl lg:text-4xl font-bold mt-4 text-white/90 tracking-wide">
            "Berbagi momen indah bersama orang-orang tercinta"
          </h2>
          
        </div>

        <!-- Share Card -->
        <div class="share-card w-full max-w-lg mx-auto bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-8 shadow-md border border-white/20 backdrop-blur-md relative overflow-hidden scroll-animate-fade-up scroll-animate-delay-1">
          <!-- Decorative elements -->
          <div class="absolute top-0 right-0 w-24 h-24 opacity-5">
            <img src="/wedding.png" alt="Decoration" class="w-full h-full object-cover"/>
          </div>
          <div class="absolute bottom-0 left-0 w-20 h-20 opacity-5 transform scale-x-[-1]">
            <img src="/wedding.png" alt="Decoration" class="w-full h-full object-cover"/>
          </div>
          
          <div class="relative z-10">
            <h2 class="gradient-text text-2xl md:text-3xl font-great-vibes font-normal mb-3 text-white">Bagikan Undangan</h2>
            <p class="text-white/80 mb-6 text-base leading-relaxed">
              Bagikan momen spesial ini bersama orang-orang terkasih
            </p>
            
            <!-- Share Buttons -->
            <div class="flex justify-center gap-4">
              <!-- WhatsApp -->
              <button 
                @click="shareToWhatsApp"
                class="share-btn whatsapp-btn"
                aria-label="Bagikan ke WhatsApp"
              >
                <Icon name="logos:whatsapp-icon" class="w-6 h-6" />
              </button>

              <!-- Tombol Salin Tautan -->
              <button 
                @click="copyLink"
                class="share-btn link-btn"
                aria-label="Salin tautan undangan"
              >
                <Icon name="lucide:link" class="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useToastApp } from '~/composables/useToastApp'
import { useScrollAnimation } from '~/composables/useScrollAnimation'

// Scroll animation setup
const { observe } = useScrollAnimation({
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px',
  once: true,
  stagger: 200
})

// Ref elemen
const sectionRef = ref<HTMLElement>()

// Komposabel toast
const { success, error } = useToastApp()

// Data
const invitationUrl = 'https://jiyanto-nuraini-weeding-invitation.netlify.app/'
const shareMessage = `💒 Undangan Pernikahan 💒

Jiyanto & Nur Aini
📅 Tanggal: 07 Desember 2025
🕰️ Waktu: 09.00 WIB - Selesai
📍 Tempat: Di kediaman mempelai pria

Dengan segala hormat dan kerendahan hati, kami memohon maaf apabila terdapat kesalahan. Kami mengundang Bapak/Ibu/Saudara/i untuk berkenan hadir dalam acara pernikahan kami, guna memberikan doa restu dan berkah kepada kedua mempelai.

Terima kasih yang sebesar-besarnya.

${invitationUrl}`

// Metode
const shareToWhatsApp = () => {
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`
  window.open(whatsappUrl, '_blank')
}

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(invitationUrl)
    success('Link undangan berhasil disalin!')
  } catch (err) {
    console.error('Failed to copy: ', err)
    error('Gagal menyalin link undangan')
  }
}

// Lifecycle
onMounted(() => {
  nextTick(() => {
    const shareCard = document.querySelector('.share-card')
    if (shareCard) {
      observe(shareCard as Element)
    }
  })
})
</script>

<style scoped>
/* Text styling */
.gradient-text {
  background: linear-gradient(45deg, #ffffff, #f8fafc, #e2e8f0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
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

/* Share Buttons */
.share-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  color: white;
}

.share-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.2);
}

/* WhatsApp Button */
.whatsapp-btn {
  background: linear-gradient(45deg, #25d366, #128c7e);
  box-shadow: 0 2px 8px rgba(37, 211, 102, 0.3);
}

.whatsapp-btn:hover {
  background: linear-gradient(45deg, #128c7e, #075e54);
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
}

/* Link Button */
.link-btn {
  background: linear-gradient(45deg, #6366f1, #4f46e5);
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
}

.link-btn:hover {
  background: linear-gradient(45deg, #4f46e5, #4338ca);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}

/* Responsive improvements for mobile */
@media (max-width: 640px) {
  .gradient-text {
    font-size: 2.5rem !important;
  }
  .font-dancing {
    font-size: 1.5rem !important;
  }
  
  .share-btn {
    width: 48px;
    height: 48px;
  }
}

@media (max-width: 768px) {
  .share-card {
    padding: 1rem;
  }
}
</style>
