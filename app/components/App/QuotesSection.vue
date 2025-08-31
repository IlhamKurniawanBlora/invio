<template>
  <section class="min-h-screen relative overflow-hidden items-center justify-center">
    <!-- Main Content -->
    <div class="relative z-30 text-center text-white px-6 max-w-5xl mx-auto flex items-center justify-center min-h-screen">
      <div class="w-full">
      <!-- Main Heading -->
      <div class="fade-in-up mb-8">
        <h1 class="gradient-text font-great-vibes text-5xl md:text-6xl lg:text-7xl font-normal leading-tight">
        Jiyanto & Nur Aini
        </h1>
        <h2 class="font-dancing text-2xl md:text-3xl lg:text-4xl font-bold mt-4 text-white/90 tracking-wide">
        Wedding
        </h2>
      </div>

      <!-- Decorative Divider -->
      <div class="fade-in-up-delay-1">
        <div class="flex items-center justify-center mb-8">
        <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-24"></div>
        <div class="mx-6 text-white/80">
          <i class="fas fa-heart heart-beat text-xl"></i>
        </div>
        <div class="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-24"></div>
        </div>
      </div>

      <!-- Quote -->
      <div class="fade-in-up-delay-2 mb-12">
        <blockquote class="font-playfair text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed italic">
        "Alhamdulillah, Allah telah mempertemukan kami sebagai jodoh. Dengan ridho-Nya, kami akan menjalani hidup bersama dalam ikatan yang suci"
        </blockquote>
      </div>

      <!-- Countdown Timer -->
      <div class="fade-in-up-delay-3">
        <div class="mb-6">
        <h3 class="font-poppins text-lg md:text-xl text-white/80 mb-6">Menuju Hari Bahagia</h3>
        <div class="grid grid-cols-4 gap-4 max-w-md mx-auto">
          <div class="countdown-item">
          <div class="countdown-number">{{ timeLeft.days }}</div>
          <div class="countdown-label">Hari</div>
          </div>
          <div class="countdown-item">
          <div class="countdown-number">{{ timeLeft.hours }}</div>
          <div class="countdown-label">Jam</div>
          </div>
          <div class="countdown-item">
          <div class="countdown-number">{{ timeLeft.minutes }}</div>
          <div class="countdown-label">Menit</div>
          </div>
          <div class="countdown-item">
          <div class="countdown-number">{{ timeLeft.seconds }}</div>
          <div class="countdown-label">Detik</div>
          </div>
        </div>
        </div>
        
        <!-- Wedding Date -->
        <div class="font-poppins text-base md:text-lg text-white/70">
        07 Desember 2025 • 07:00 WIB
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Countdown state
const targetDate = new Date('2025-12-07T07:00:00')
const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

// Methods
const updateCountdown = () => {
  const now = new Date().getTime()
  const distance = targetDate.getTime() - now

  if (distance > 0) {
    timeLeft.value = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    }
  }
}

// Lifecycle
onMounted(() => {
  updateCountdown()
  setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  // Cleanup if needed
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
  .countdown-number {
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

.heart-beat {
  animation: heartbeat 2s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Animation utilities */
.fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

.fade-in-up-delay-1 {
  animation: fadeInUp 1s ease-out 0.5s forwards;
  opacity: 0;
  transform: translateY(30px);
}

.fade-in-up-delay-2 {
  animation: fadeInUp 1s ease-out 1s forwards;
  opacity: 0;
  transform: translateY(30px);
}

.fade-in-up-delay-3 {
  animation: fadeInUp 1s ease-out 1.5s forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Countdown Styles */
.countdown-item {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.countdown-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.countdown-number {
  font-weight: bold;
  font-size: 1.5rem;
  color: white;
  font-family: 'Poppins', sans-serif;
}

@media (min-width: 768px) {
  .countdown-number {
    font-size: 1.875rem;
  }
}

.countdown-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.25rem;
  font-family: 'Poppins', sans-serif;
}
</style>
