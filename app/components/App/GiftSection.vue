<template>
  <section class="py-16 text-center" ref="sectionRef">
    <div class="max-w-4xl mx-auto px-6">
      <div class="gift-content" :class="{ 'animate-in': isVisible }">
        <!-- Title -->
        <div class="mb-8">
          <h2 class="font-great-vibes text-3xl md:text-4xl font-normal mb-3 text-gray-800">
            Gift Digital
          </h2>
          <p class="text-gray-600 italic">
            "Kehadiran Anda adalah hadiah terindah bagi kami"
          </p>
        </div>

        <!-- Gift Options -->
        <div class="space-y-6 max-w-lg mx-auto">
          <!-- Bank Transfer -->
          <div class="gift-card">
            <div class="flex items-center justify-center mb-3">
              <i class="fas fa-university text-xl text-blue-600 mr-2"></i>
              <h3 class="font-semibold text-lg">Bank Transfer</h3>
            </div>
            <div class="space-y-1">
              <div class="font-medium text-gray-700">Bank BRI</div>
              <div class="font-mono text-xl font-bold text-blue-600 tracking-wider">
                378401018627530
              </div>
              <div class="text-gray-600">a.n. Jiyanto</div>
            </div>
            <button 
              @click="copyToClipboard('378401018627530')"
              class="copy-btn mt-3"
            >
              <i class="fas fa-copy mr-2"></i>
              Salin Nomor Rekening
            </button>
          </div>

          <!-- QRIS -->
          <div class="gift-card">
            <div class="flex items-center justify-center mb-3">
              <i class="fas fa-qrcode text-xl text-green-600 mr-2"></i>
              <h3 class="font-semibold text-lg">QRIS</h3>
            </div>
            <div class="bg-gray-50 rounded-lg p-4 mb-3">
              <img src="/assets/images/qris.png" alt="QRIS Code" class="w-32 h-32 mx-auto rounded-lg bg-white p-2" />
            </div>
            <p class="text-sm text-gray-600">
              Scan QR Code untuk transfer via QRIS
            </p>
          </div>
        </div>

        <!-- Thank You Note -->
        <div class="mt-8">
          <p class="text-gray-600 italic max-w-xl mx-auto">
            "Terima kasih atas doa dan hadiah yang diberikan"
          </p>
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

// Methods
const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    alert('Nomor rekening berhasil disalin!')
  } catch (err) {
    console.error('Failed to copy: ', err)
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
/* Gift Cards */
.gift-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  transform: translateY(20px);
  opacity: 0;
}

.gift-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
}

/* Copy Button */
.copy-btn {
  background: linear-gradient(45deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.copy-btn:hover {
  background: linear-gradient(45deg, #1d4ed8, #1e40af);
  transform: translateY(-1px);
}

/* Animation for scroll reveal */
.gift-content.animate-in .gift-card:nth-child(2) {
  animation: slideInUp 0.6s ease-out 0.2s forwards;
}

.gift-content.animate-in .gift-card:nth-child(3) {
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
  .gift-card {
    padding: 1rem;
  }
}
</style>
