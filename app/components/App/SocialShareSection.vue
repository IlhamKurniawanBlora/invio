<template>
  <section class="py-16 text-center" ref="sectionRef">
    <div class="max-w-3xl mx-auto px-6">
      <div class="share-content" :class="{ 'animate-in': isVisible }">
        <!-- Title -->
        <div class="mb-8">
          <h2 class="font-great-vibes text-3xl md:text-4xl font-normal mb-3 text-gray-800">
            Bagikan Kebahagiaan
          </h2>
          <p class="text-gray-600 italic">
            "Berbagi momen indah bersama orang-orang tercinta"
          </p>
        </div>

        <!-- Share Message Preview -->
        <div class="share-preview mb-8">
          <h3 class="font-semibold text-lg mb-4 text-gray-800">
            Pesan yang akan dibagikan:
          </h3>
          <div class="message-card">
            <p class="text-gray-700 leading-relaxed text-sm">
              🎉 <strong>Undangan Pernikahan</strong> 🎉
              <br /><br />
              Jiyanto & Nur Aini
              <br />
              📅 07 Desember 2025
              <br />
              🕰️ 07:00 WIB
              <br /><br />
              Kami dengan hormat mengundang Anda untuk hadir dalam momen bahagia kami ✨
              <br /><br />
              🔗 {{ invitationUrl }}
            </p>
          </div>
        </div>

        <!-- Social Share Buttons -->
        <div class="share-buttons">
          <h3 class="font-semibold text-lg mb-6 text-gray-800">
            Pilih Platform untuk Berbagi:
          </h3>
          
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto mb-6">
            <!-- WhatsApp -->
            <button 
              @click="shareToWhatsApp"
              class="share-btn whatsapp-btn"
            >
              <i class="fab fa-whatsapp text-2xl mb-2"></i>
              <span class="font-semibold">WhatsApp</span>
            </button>

            <!-- Instagram -->
            <button 
              @click="shareToInstagram"
              class="share-btn instagram-btn"
            >
              <i class="fab fa-instagram text-2xl mb-2"></i>
              <span class="font-semibold">Instagram</span>
            </button>

            <!-- Facebook -->
            <button 
              @click="shareToFacebook"
              class="share-btn facebook-btn"
            >
              <i class="fab fa-facebook text-2xl mb-2"></i>
              <span class="font-semibold">Facebook</span>
            </button>
          </div>

          <!-- Copy Link Button -->
          <button 
            @click="copyLink"
            class="copy-link-btn"
          >
            <i class="fas fa-link mr-2"></i>
            Salin Link Undangan
          </button>
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

// Data
const invitationUrl = 'https://jiyanto-nuraini-weeding-invitation.netlify.app/'
const shareMessage = `🎉 Undangan Pernikahan 🎉

Jiyanto & Nur Aini
📅 07 Desember 2025
🕰️ 07:00 WIB

Kami dengan hormat mengundang Anda untuk hadir dalam momen bahagia kami ✨

${invitationUrl}`

// Methods
const shareToWhatsApp = () => {
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`
  window.open(whatsappUrl, '_blank')
}

const shareToInstagram = () => {
  // Instagram doesn't have direct web sharing, so we copy the link and show instruction
  copyLink()
  alert('Link berhasil disalin! Buka Instagram dan paste link ini di story atau post Anda.')
}

const shareToFacebook = () => {
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(invitationUrl)}&quote=${encodeURIComponent(shareMessage)}`
  window.open(facebookUrl, '_blank')
}

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(invitationUrl)
    alert('Link undangan berhasil disalin!')
  } catch (err) {
    console.error('Failed to copy: ', err)
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = invitationUrl
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    alert('Link undangan berhasil disalin!')
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
/* Share Preview */
.share-preview {
  max-width: 500px;
  margin: 0 auto;
}

.message-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.message-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
}

/* Share Buttons */
.share-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  color: white;
  min-height: 100px;
  font-size: 0.875rem;
}

.share-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.2);
}

/* WhatsApp Button */
.whatsapp-btn {
  background: linear-gradient(135deg, #25d366, #128c7e);
}

.whatsapp-btn:hover {
  background: linear-gradient(135deg, #128c7e, #075e54);
}

/* Instagram Button */
.instagram-btn {
  background: linear-gradient(135deg, #e1306c, #bc2a8d);
}

.instagram-btn:hover {
  background: linear-gradient(135deg, #bc2a8d, #8a3ab9);
}

/* Facebook Button */
.facebook-btn {
  background: linear-gradient(135deg, #4267B2, #3b5998);
}

.facebook-btn:hover {
  background: linear-gradient(135deg, #3b5998, #2d4373);
}

/* Copy Link Button */
.copy-link-btn {
  background: linear-gradient(45deg, #6366f1, #4f46e5);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 0.875rem;
}

.copy-link-btn:hover {
  background: linear-gradient(45deg, #4f46e5, #4338ca);
  transform: translateY(-1px);
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
  .share-buttons .grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .share-btn {
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
    min-height: auto;
    padding: 1rem 1.5rem;
  }
  
  .share-btn i {
    margin-right: 0.75rem;
    margin-bottom: 0 !important;
  }
  
  .message-card {
    padding: 1rem;
  }
  
  .copy-link-btn {
    padding: 0.625rem 1.25rem;
    font-size: 0.8rem;
  }
}
</style>
