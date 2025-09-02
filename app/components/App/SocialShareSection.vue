<template>
  <section class="py-16 text-center" ref="sectionRef">
    <div class="max-w-3xl mx-auto px-6">
      <div class="share-content" :class="{ 'animate-in': isVisible }">
        <!-- Title -->
        <div class="mb-8">
          <h1 class="gradient-text font-great-vibes text-5xl md:text-6xl lg:text-7xl font-normal leading-tight">
            Bagikan Kebahagiaan
          </h1>
          <h2 class="font-dancing text-2xl md:text-3xl lg:text-4xl font-bold mt-4 text-white/90 tracking-wide">
            "Berbagi momen indah bersama orang-orang tercinta"
          </h2>
        </div>

        <!-- Share Message Preview -->
        <div class="share-preview mb-8">
          <h3 class="font-semibold text-lg mb-4 text-gray-800">
            Pesan yang akan dibagikan:
          </h3>
          <div class="message-card">
            <div class="text-center mb-4">
              <div class="flex items-center justify-center mb-2">
                <Icon name="lucide:mosque" class="w-6 h-6 text-amber-700 mr-2" />
                <strong class="text-lg text-amber-700">Serat Pawiwahan</strong>
                <Icon name="lucide:mosque" class="w-6 h-6 text-amber-700 ml-2" />
              </div>
            </div>
            
            <div class="paper-divider"></div>
            
            <div class="text-center mb-4">
              <h3 class="text-xl font-semibold text-gray-700 mb-3">Jiyanto & Nur Aini</h3>
              
              <div class="space-y-2 text-gray-600">
                <div class="flex items-center justify-center">
                  <Icon name="lucide:calendar" class="w-4 h-4 mr-2 text-amber-600" />
                  <span>Tanggal: 07 Desember 2025</span>
                </div>
                <div class="flex items-center justify-center">
                  <Icon name="lucide:clock" class="w-4 h-4 mr-2 text-amber-600" />
                  <span>Wektu: 10:00 WIB - Selesai</span>
                </div>
                <div class="flex items-center justify-center">
                  <Icon name="lucide:map-pin" class="w-4 h-4 mr-2 text-amber-600" />
                  <span>Wonten griyanipun penganten putra</span>
                </div>
              </div>
            </div>
            
            <div class="paper-divider"></div>
            
            <div class="text-gray-600 leading-relaxed text-sm text-justify mb-4">
              Kanthi rasa bekti lan pangabekti, kula nyuwun pangapunten menawi wonten kalepatan. 
              Mugi-mugi panjenengan kersa rawuh wonten ing adicara pawiwahan punika kangge maringi 
              berkah lan pangestu dhumateng kekalih penganten.
            </div>
            
            <div class="paper-divider-small"></div>
            
            <div class="text-center">
              <div class="flex items-center justify-center mb-2">
                <Icon name="lucide:heart-handshake" class="w-4 h-4 mr-2 text-pink-500" />
                <span class="text-gray-600 text-sm">Matur nuwun sanget</span>
              </div>
              <div class="flex items-center justify-center text-blue-600">
                <Icon name="lucide:link" class="w-4 h-4 mr-2" />
                <span class="text-sm">{{ invitationUrl }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Share Buttons -->
        <div class="share-buttons mt-4">
          
          <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6 justify-center">
            <!-- WhatsApp -->
            <button 
              @click="shareToWhatsApp"
              class="share-btn whatsapp-btn"
            >
              <Icon name="logos:whatsapp-icon" class="w-8 h-8" />
            </button>

            <!-- Copy Link Button -->
            <button 
              @click="copyLink"
              class="share-btn copy-btn"
            >
              <Icon name="lucide:link" class="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useToastApp } from '~/composables/useToastApp'

// Refs
const sectionRef = ref<HTMLElement>()
const isVisible = ref(false)

// Toast composable
const { success, error } = useToastApp()

// Data
const invitationUrl = 'https://jiyanto-nuraini-weeding-invitation.netlify.app/'
const shareMessage = `🕌 Serat Pawiwahan 🕌

Jiyanto & Nur Aini
📅 Tanggal: 07 Desember 2025
🕰️ Wektu: 10:00 WIB - Selesai
📍 Wonten griyanipun penganten putra

Kanthi rasa bekti lan pangabekti, kula nyuwun pangapunten menawi wonten kalepatan. Mugi-mugi panjenengan kersa rawuh wonten ing adicara pawiwahan punika kangge maringi berkah lan pangestu dhumateng kekalih penganten.

Matur nuwun sanget

${invitationUrl}`

// Methods
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

/* Share Preview */
.share-preview {
  max-width: 500px;
  margin: 0 auto;
}

.message-card {
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

.message-card:hover {
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

/* Share Buttons */
.share-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
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
  background: linear-gradient(135deg, #25d366, #128c7e);
  box-shadow: 0 2px 8px rgba(37, 211, 102, 0.3);
}

.whatsapp-btn:hover {
  background: linear-gradient(135deg, #128c7e, #075e54);
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
}

/* Copy Button */
.copy-btn {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
}

.copy-btn:hover {
  background: linear-gradient(135deg, #4f46e5, #4338ca);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}

/* Animation for scroll reveal */
.share-content.animate-in .share-preview {
  animation: slideInUp 0.6s ease-out 0.2s forwards;
}

.share-content.animate-in .share-buttons {
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
@media (max-width: 640px) {
  .share-buttons .flex {
    flex-direction: row;
    gap: 1rem;
  }
  
  .share-btn {
    width: 50px;
    height: 50px;
  }
  
  .share-btn .w-8 {
    width: 1.5rem;
    height: 1.5rem;
  }
  
  .message-card {
    padding: 1.5rem;
  }
}
</style>
