<template>
  <Teleport to="body">
    <div class="toast-container">
      <TransitionGroup name="toast" tag="div" class="toast-wrapper">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          class="toast-item"
          :class="[`toast-${toast.type}`]"
          @click="removeToast(toast.id)"
        >
          <div class="toast-content">
            <!-- Icon -->
            <div class="toast-icon">
              <i v-if="toast.type === 'success'" class="fas fa-check-circle"></i>
              <i v-else-if="toast.type === 'error'" class="fas fa-times-circle"></i>
              <i v-else-if="toast.type === 'warning'" class="fas fa-exclamation-triangle"></i>
              <i v-else-if="toast.type === 'info'" class="fas fa-info-circle"></i>
            </div>
            
            <!-- Text Content -->
            <div class="toast-text">
              <div class="toast-title">{{ toast.title }}</div>
              <div v-if="toast.message" class="toast-message">{{ toast.message }}</div>
            </div>
            
            <!-- Close Button -->
            <button
              v-if="toast.persistent"
              class="toast-close"
              @click.stop="removeToast(toast.id)"
              aria-label="Close notification"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
          
          <!-- Progress bar for non-persistent toasts -->
          <div
            v-if="!toast.persistent && toast.duration"
            class="toast-progress"
            :style="{ animationDuration: `${toast.duration}ms` }"
          ></div>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useToastApp } from '~/composables/useToastApp'

const { toasts, removeToast } = useToastApp()
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  pointer-events: none;
}

.toast-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
  width: 100%;
}

.toast-item {
  pointer-events: auto;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  min-width: 300px;
}

.toast-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.toast-content {
  display: flex;
  align-items: flex-start;
  padding: 16px;
  gap: 12px;
}

.toast-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
}

.toast-text {
  flex: 1;
  min-width: 0;
}

.toast-title {
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 2px;
  font-family: 'Poppins', sans-serif;
}

.toast-message {
  font-size: 13px;
  line-height: 1.4;
  opacity: 0.8;
  font-family: 'Poppins', sans-serif;
}

.toast-close {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border: none;
  background: none;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
}

.toast-close:hover {
  opacity: 1;
}

.toast-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: currentColor;
  opacity: 0.6;
  animation: toast-progress linear forwards;
}

@keyframes toast-progress {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}

/* Toast type styles */
.toast-success {
  color: #059669;
  border-left: 4px solid #059669;
}

.toast-error {
  color: #DC2626;
  border-left: 4px solid #DC2626;
}

.toast-warning {
  color: #D97706;
  border-left: 4px solid #D97706;
}

.toast-info {
  color: #0284C7;
  border-left: 4px solid #0284C7;
}

/* Toast transitions */
.toast-enter-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.toast-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%) scale(0.8);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%) scale(0.8);
}

.toast-move {
  transition: transform 0.3s ease;
}

/* Mobile responsive */
@media (max-width: 640px) {
  .toast-container {
    top: 10px;
    right: 10px;
    left: 10px;
  }
  
  .toast-wrapper {
    max-width: none;
  }
  
  .toast-item {
    min-width: auto;
  }
  
  .toast-content {
    padding: 12px;
  }
  
  .toast-title {
    font-size: 13px;
  }
  
  .toast-message {
    font-size: 12px;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .toast-item {
    background: rgba(30, 30, 30, 0.95);
    border-color: rgba(255, 255, 255, 0.1);
    color: white;
  }
  
  .toast-title,
  .toast-message {
    color: white;
  }
  
  .toast-message {
    opacity: 0.7;
  }
}
</style>
