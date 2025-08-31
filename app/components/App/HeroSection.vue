<script setup lang="ts">
// No props or logic needed
</script>
<template>
    <section class="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center relative overflow-hidden">
        <!-- Decorative Elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute -top-10 -left-10 w-40 h-40 bg-gray-100 rounded-full opacity-50"></div>
            <div class="absolute -bottom-10 -right-10 w-60 h-60 bg-gray-100 rounded-full opacity-30"></div>
            <div class="absolute top-1/2 left-10 w-20 h-20 bg-gray-200 rounded-full opacity-40"></div>
        </div>
        <div class="container mx-auto px-6 text-center relative z-10">
            <div data-aos="fade-down" data-aos-duration="1000">
                <h1 class="font-vibes text-7xl md:text-8xl text-gray-800 mb-4">
                    Jiyanto
                </h1>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" class="my-8">
                <div class="flex items-center justify-center">
                    <div class="h-px bg-gray-400 w-24"></div>
                    <div class="mx-6">
                        <i class="fas fa-heart text-4xl text-gray-600 heart-beat"></i>
                    </div>
                    <div class="h-px bg-gray-400 w-24"></div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                <h1 class="font-vibes text-7xl md:text-8xl text-gray-800 mb-8">
                    Nur Aini
                </h1>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
                <p class="text-xl md:text-2xl text-gray-600 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
                    Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Anda untuk menjadi saksi dalam momen bahagia kami
                </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">
                <button 
                    @click="$emit('scroll-to-section', 'couple')" 
                    class="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                    <i class="fas fa-arrow-down mr-2"></i>
                    Lihat Detail
                </button>
            </div>
        </div>
    </section>
</template>
