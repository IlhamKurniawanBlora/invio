<template>
  <section class="py-16 text-center bg-gradient-to-br from-slate-50 via-white to-slate-100 min-h-screen">
    <!-- Section Title -->
    <div class="text-center mb-16 fade-in-up">
      <h2 class="gradient-text font-great-vibes text-4xl md:text-5xl lg:text-6xl font-normal mb-4">
        Galeri Foto
      </h2>
      <div class="flex items-center justify-center">
        <div class="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent w-24"></div>
        <div class="mx-6 text-slate-600">
          <i class="fas fa-heart heart-beat text-xl"></i>
        </div>
        <div class="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent w-24"></div>
      </div>
    </div>
    
    <!-- Grid Layout -->
    <div class="grid grid-cols-1 gap-3 max-w-6xl mx-auto px-4 md:grid-cols-4 md:grid-rows-3 md:h-[500px] md:gap-4">
      <!-- Large image (1x1 on mobile, 2x2 on desktop) -->
      <div class="col-span-1 row-span-1 h-screen md:col-span-2 md:row-span-2 md:h-full">
        <img :src="galleryImages[0].src" 
             :alt="galleryImages[0].alt"
             @click="openPreview(galleryImages[0])"
             class="w-full h-full object-cover rounded-lg shadow-xl cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl">
      </div>
      
      <!-- Medium image (1x1 on mobile, 1x2 on desktop) -->
      <div class="col-span-1 row-span-1 h-screen md:col-span-1 md:row-span-2 md:h-full">
        <img :src="galleryImages[1].src" 
             :alt="galleryImages[1].alt"
             @click="openPreview(galleryImages[1])"
             class="w-full h-full object-cover rounded-lg shadow-xl cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl">
      </div>
      
      <!-- Small images (1x1 each) -->
      <div class="col-span-1 row-span-1 h-screen md:col-span-1 md:row-span-1 md:h-full">
        <img :src="galleryImages[2].src" 
             :alt="galleryImages[2].alt"
             @click="openPreview(galleryImages[2])"
             class="w-full h-full object-cover rounded-lg shadow-xl cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl">
      </div>
      
      <div class="col-span-1 row-span-1 h-screen md:col-span-1 md:row-span-1 md:h-full">
        <img :src="galleryImages[3].src" 
             :alt="galleryImages[3].alt"
             @click="openPreview(galleryImages[3])"
             class="w-full h-full object-cover rounded-lg shadow-xl cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl">
      </div>
      
      <!-- Wide image (1x1 on mobile, 2x1 on desktop) -->
      <div class="col-span-1 row-span-1 h-screen md:col-span-2 md:row-span-1 md:h-full">
        <img :src="galleryImages[4].src" 
             :alt="galleryImages[4].alt"
             @click="openPreview(galleryImages[4])"
             class="w-full h-full object-cover rounded-lg shadow-xl cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl">
      </div>
    </div>

    <!-- Modal Preview Full Page -->
    <div v-if="showPreview" 
         @click="closePreview"
         class="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div class="relative w-full h-full flex items-center justify-center">
        <img :src="selectedImage?.src" 
             :alt="selectedImage?.alt"
             class="w-full h-full object-contain">
        <button @click="closePreview"
                class="absolute top-6 right-6 text-white text-3xl bg-black bg-opacity-70 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-90 transition-all duration-200">
          ×
        </button>
        <!-- Navigation arrows -->
        <button @click.stop="previousImage"
                class="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-70 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-90 transition-all duration-200">
          ‹
        </button>
        <button @click.stop="nextImage"
                class="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-70 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-90 transition-all duration-200">
          ›
        </button>
        <!-- Image counter -->
        <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-70 px-4 py-2 rounded-full text-sm">
          {{ selectedIndex + 1 }} / {{ galleryImages.length }}
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'

interface GalleryImage {
  src: string
  alt: string
}

const galleryImages = reactive<GalleryImage[]>([
  { src: '/images/weeding001.jpg', alt: 'Wedding Photo 1' },
  { src: '/images/weeding002.jpg', alt: 'Wedding Photo 2' },
  { src: '/images/weeding003.jpg', alt: 'Wedding Photo 3' },
  { src: '/images/weeding004.jpg', alt: 'Wedding Photo 4' },
  { src: '/images/weeding005.jpg', alt: 'Wedding Photo 5' }
])

const showPreview = ref(false)
const selectedImage = ref<GalleryImage | null>(null)
const selectedIndex = ref(0)

const openPreview = (image: GalleryImage) => {
  selectedImage.value = image
  selectedIndex.value = galleryImages.findIndex(img => img.src === image.src)
  showPreview.value = true
}

const closePreview = () => {
  showPreview.value = false
  selectedImage.value = null
}

const previousImage = () => {
  if (selectedIndex.value > 0) {
    selectedIndex.value = selectedIndex.value - 1
  } else {
    selectedIndex.value = galleryImages.length - 1
  }
  selectedImage.value = galleryImages[selectedIndex.value] || null
}

const nextImage = () => {
  if (selectedIndex.value < galleryImages.length - 1) {
    selectedIndex.value = selectedIndex.value + 1
  } else {
    selectedIndex.value = 0
  }
  selectedImage.value = galleryImages[selectedIndex.value] || null
}

// Close preview with ESC key
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closePreview()
  } else if (event.key === 'ArrowLeft') {
    previousImage()
  } else if (event.key === 'ArrowRight') {
    nextImage()
  }
}

// Add event listener when component mounts
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

// Remove event listener when component unmounts
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* Grid layout styles - Mobile first approach */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
}

/* Desktop grid layout */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: 500px;
    gap: 1rem;
  }
}

/* Typography styles matching CoupleProfileSection */
.gradient-text {
  background: linear-gradient(45deg, #334155, #475569, #64748b);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(71, 85, 105, 0.3);
}

.heart-beat {
  animation: heartbeat 2s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
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

/* Modal styles */
.fixed {
  backdrop-filter: none;
}

/* Full page modal image */
.fixed img {
  max-width: 100vw;
  max-height: 100vh;
  width: auto;
  height: auto;
  object-fit: contain;
}

/* Smooth transitions for hover effects */
img {
  transition: all 0.3s ease;
}

/* Enhanced hover effects */
.grid img:hover {
  transform: scale(1.05);
  filter: brightness(1.1);
}

/* Button hover effects */
button:hover {
  transform: scale(1.05);
  transition: all 0.2s ease;
}

/* Enhanced button styles for full page */
button {
  backdrop-filter: blur(8px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

button:hover {
  border-color: rgba(255, 255, 255, 0.4);
  transform: scale(1.05);
}

/* Image counter styling */
.absolute.bottom-6 {
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-weight: 500;
  letter-spacing: 0.5px;
}

/* Ensure modal is above everything */
.z-50 {
  z-index: 9999;
}

/* Add subtle hover effect for grid items */
.grid > div {
  overflow: hidden;
  border-radius: 0.5rem;
}

/* Mobile specific styles - Full height images */
@media (max-width: 767px) {
  .grid > div {
    height: 100vh;
  }
  
  .grid {
    gap: 0;
  }
  
  .grid img {
    border-radius: 0;
  }
}

/* Desktop specific styles - Full container height */
@media (min-width: 768px) {
  .grid > div {
    height: 100%;
  }
}

/* Smooth image loading */
img {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

/* Shadow and border enhancements */
.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>
