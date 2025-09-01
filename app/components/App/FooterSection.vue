<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'

// Scroll animation setup
const { observe } = useScrollAnimation({
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
  once: true,
  stagger: 150
})

// Template refs
const footerContentRef = ref<HTMLElement>()

// Lifecycle
onMounted(() => {
  nextTick(() => {
    if (footerContentRef.value) observe(footerContentRef.value)
  })
})
</script>
<template>
    <footer id="footer" class="bg-white py-12 text-center">
        <div class="container mx-auto px-6">
            <div class="scroll-animate-fade-up" ref="footerContentRef">
                <h3 class="font-dancing text-4xl text-gray-800 mb-4">Terima Kasih</h3>
                <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
                </p>
                <div class="flex justify-center space-x-6 mb-6">
                    <a href="#" class="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                        <i class="fab fa-instagram text-2xl"></i>
                    </a>
                    <a href="#" class="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                        <i class="fab fa-whatsapp text-2xl"></i>
                    </a>
                    <a href="#" class="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                        <i class="fas fa-envelope text-2xl"></i>
                    </a>
                </div>
                <p class="text-sm text-gray-500">
                    © 2025 Jiyanto & Nur Aini. Made with ♥
                </p>
            </div>
        </div>
    </footer>
</template>
