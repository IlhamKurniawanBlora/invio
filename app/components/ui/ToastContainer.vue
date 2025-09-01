<template>
  <Teleport to="body">
    <div class="fixed top-4 right-4 z-50 space-y-2">
      <TransitionGroup
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        move-class="transition-all duration-300"
      >
        <div
          v-for="toast in visibleToasts"
          :key="toast.id"
          class="flex items-center p-4 text-sm rounded-lg shadow-lg backdrop-blur-md max-w-xs"
          :class="getToastClasses(toast.type)"
          role="alert"
        >
          <div class="flex items-center w-full">
            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg mr-3">
              <i :class="getIconClass(toast.type)" class="text-lg"></i>
            </div>
            <div class="text-sm font-medium flex-1">{{ toast.message }}</div>
            <button
              @click="hideToast(toast.id)"
              class="ml-2 -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8 hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <i class="fas fa-times text-sm"></i>
            </button>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useToast } from '@/composables/useToastApp'

interface ToastItem {
  id: string
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  duration?: number
  visible: boolean
}

const { toasts, hideToast } = useToast()

const visibleToasts = computed(() => {
  return toasts.value.filter((toast: ToastItem) => toast.visible)
})

const getToastClasses = (type: string) => {
  const baseClasses = 'border'
  
  switch (type) {
    case 'success':
      return `${baseClasses} bg-green-50/95 text-green-800 border-green-300`
    case 'error':
      return `${baseClasses} bg-red-50/95 text-red-800 border-red-300`
    case 'warning':
      return `${baseClasses} bg-yellow-50/95 text-yellow-800 border-yellow-300`
    case 'info':
      return `${baseClasses} bg-blue-50/95 text-blue-800 border-blue-300`
    default:
      return `${baseClasses} bg-green-50/95 text-green-800 border-green-300`
  }
}

const getIconClass = (type: string) => {
  switch (type) {
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
}
</script>

<style scoped>
/* Additional animation improvements */
.v-enter-active,
.v-leave-active,
.v-move {
  transition: all 0.3s ease;
}

.v-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
