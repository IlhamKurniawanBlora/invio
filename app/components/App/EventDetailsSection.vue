<script setup lang="ts">
// No props or logic needed
</script>
<template>
    <section class="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div class="container mx-auto px-6">
            <div data-aos="fade-up" data-aos-duration="1000" class="text-center mb-16">
                <h2 class="font-dancing text-5xl md:text-6xl mb-4">Detail Acara</h2>
                <div class="w-24 h-1 bg-white mx-auto"></div>
            </div>
            <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <!-- Akad -->
                <div data-aos="flip-left" data-aos-duration="1000" class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                    <div class="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <i class="fas fa-mosque text-3xl"></i>
                    </div>
                    <h3 class="font-dancing text-3xl mb-4">Akad Nikah</h3>
                    <div class="space-y-2 text-gray-200">
                        <p><i class="fas fa-calendar mr-2"></i> Sabtu, 15 Februari 2025</p>
                        <p><i class="fas fa-clock mr-2"></i> 08:00 - 10:00 WIB</p>
                        <p><i class="fas fa-map-marker-alt mr-2"></i> Masjid Al-Ikhlas</p>
                        <p class="text-sm mt-4">Jl. Raya Tanjung, Kedungtuban, Blora</p>
                    </div>
                </div>
                <!-- Reception -->
                <div data-aos="flip-right" data-aos-duration="1000" class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                    <div class="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <i class="fas fa-glass-cheers text-3xl"></i>
                    </div>
                    <h3 class="font-dancing text-3xl mb-4">Resepsi</h3>
                    <div class="space-y-2 text-gray-200">
                        <p><i class="fas fa-calendar mr-2"></i> Sabtu, 15 Februari 2025</p>
                        <p><i class="fas fa-clock mr-2"></i> 11:00 - 15:00 WIB</p>
                        <p><i class="fas fa-map-marker-alt mr-2"></i> Gedung Serbaguna</p>
                        <p class="text-sm mt-4">Desa Tanjung, Kedungtuban, Blora</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
