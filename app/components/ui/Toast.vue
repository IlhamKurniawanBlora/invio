<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="visible"
        class="fixed top-4 right-4 z-50 flex items-center p-4 mb-4 text-sm rounded-lg shadow-lg backdrop-blur-md"
        :class="toastClasses"
        role="alert"
      >
        <div class="flex items-center">
          <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg mr-3">
            <i :class="iconClass" class="text-lg"></i>
          </div>
          <div class="text-sm font-medium">{{ message }}</div>
          <button
            @click="hide"
            class="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8 hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <i class="fas fa-times text-sm"></i>
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface Props {
  message: string
  type?: 'success' | 'error' | 'warning' | 'info'
  duration?: number
  show?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'success',
  duration: 3000,
  show: false
})

const emit = defineEmits<{
  hide: []
}>()

const visible = ref(false)
let timeoutId: NodeJS.Timeout | null = null

const toastClasses = computed(() => {
  const baseClasses = 'border'
  
  switch (props.type) {
    case 'success':
      return `${baseClasses} bg-green-50/90 text-green-800 border-green-300`
    case 'error':
      return `${baseClasses} bg-red-50/90 text-red-800 border-red-300`
    case 'warning':
      return `${baseClasses} bg-yellow-50/90 text-yellow-800 border-yellow-300`
    case 'info':
      return `${baseClasses} bg-blue-50/90 text-blue-800 border-blue-300`
    default:
      return `${baseClasses} bg-green-50/90 text-green-800 border-green-300`
  }
})

const iconClass = computed(() => {
  switch (props.type) {
    case 'success':
      return 'fas fa-check-circle text-green-500'
    case 'error':
      return 'fas fa-exclamation-circle text-red-500'
    case 'warning':
      return 'fas fa-exclamation-triangle text-yellow-500'
    case 'info':
      return 'fas fa-info-circle text-blue-500'
    default:
      return 'fas fa-check-circle text-green-500'
  }
})

const show = () => {
  visible.value = true
  
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  
  if (props.duration > 0) {
    timeoutId = setTimeout(() => {
      hide()
    }, props.duration)
  }
}

const hide = () => {
  visible.value = false
  emit('hide')
  
  if (timeoutId) {
    clearTimeout(timeoutId)
    timeoutId = null
  }
}

// Watch for show prop changes
watch(() => props.show, (newVal) => {
  if (newVal) {
    show()
  } else {
    hide()
  }
}, { immediate: true })

// Expose methods for parent component
defineExpose({
  show,
  hide
})
</script>

<style scoped>
/* Additional styles if needed */
</style>
