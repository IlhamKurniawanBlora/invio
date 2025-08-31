<script setup lang="ts">
import { ref, computed } from 'vue'

interface RSVPForm {
    nama: string
    kehadiran: string
    ucapan: string
}

const props = defineProps<{
    form?: RSVPForm
    submitButtonClass?: string
    submitButtonIcon?: string
    submitButtonText?: string
}>()

// Internal form state jika props.form tidak diberikan
const internalForm = ref<RSVPForm>({
    nama: '',
    kehadiran: '',
    ucapan: ''
})

const form = computed({
    get() {
        return props.form ?? internalForm.value
    },
    set(val: RSVPForm) {
        if (!props.form) internalForm.value = val
    }
})
</script>

<template>
    <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div data-aos="fade-up" data-aos-duration="1000" class="text-center mb-16">
                <h2 class="font-dancing text-5xl md:text-6xl text-gray-800 mb-4">RSVP</h2>
                <div class="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    Kehadiran dan doa restu Anda merupakan kebahagiaan bagi kami
                </p>
            </div>
            <div class="max-w-md mx-auto">
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-xl">
                    <form @submit.prevent="$emit('submit-rsvp')" class="space-y-6">
                        <div>
                            <label class="block text-gray-700 font-semibold mb-2">Nama Lengkap</label>
                            <input 
                                v-model="form.value.nama" 
                                type="text" 
                                class="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300" 
                                placeholder="Masukkan nama Anda"
                            >
                        </div>
                        <div>
                            <label class="block text-gray-700 font-semibold mb-2">Konfirmasi Kehadiran</label>
                            <select 
                                v-model="form.value.kehadiran" 
                                class="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300"
                            >
                                <option value="">Pilih konfirmasi</option>
                                <option value="hadir">Hadir</option>
                                <option value="tidak_hadir">Tidak Hadir</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-gray-700 font-semibold mb-2">Ucapan & Doa</label>
                            <textarea 
                                v-model="form.value.ucapan" 
                                rows="4" 
                                class="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300" 
                                placeholder="Berikan ucapan dan doa untuk kami"
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            :class="props.submitButtonClass"
                            class="w-full py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105"
                        >
                            <i :class="props.submitButtonIcon" class="mr-2"></i>
                            {{ props.submitButtonText || 'Kirim RSVP' }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

