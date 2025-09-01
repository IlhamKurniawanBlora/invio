import { ref, reactive } from 'vue'

export interface Toast {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message?: string
  duration?: number
  persistent?: boolean
}

export interface ToastState {
  toasts: Toast[]
}

const state = reactive<ToastState>({
  toasts: []
})

let toastId = 0

export const useToastApp = () => {
  const generateId = (): string => {
    return `toast-${++toastId}-${Date.now()}`
  }

  const addToast = (toast: Omit<Toast, 'id'>): string => {
    const id = generateId()
    const newToast: Toast = {
      id,
      duration: 3000,
      persistent: false,
      ...toast
    }
    
    state.toasts.push(newToast)
    
    // Auto remove toast after duration (unless persistent)
    if (!newToast.persistent && newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        removeToast(id)
      }, newToast.duration)
    }
    
    return id
  }

  const removeToast = (id: string): void => {
    const index = state.toasts.findIndex(toast => toast.id === id)
    if (index > -1) {
      state.toasts.splice(index, 1)
    }
  }

  const clearAll = (): void => {
    state.toasts.length = 0
  }

  // Convenience methods
  const success = (title: string, message?: string, options?: Partial<Toast>): string => {
    return addToast({
      type: 'success',
      title,
      message,
      ...options
    })
  }

  const error = (title: string, message?: string, options?: Partial<Toast>): string => {
    return addToast({
      type: 'error',
      title,
      message,
      duration: 5000, // Error messages stay longer by default
      ...options
    })
  }

  const warning = (title: string, message?: string, options?: Partial<Toast>): string => {
    return addToast({
      type: 'warning',
      title,
      message,
      ...options
    })
  }

  const info = (title: string, message?: string, options?: Partial<Toast>): string => {
    return addToast({
      type: 'info',
      title,
      message,
      ...options
    })
  }

  return {
    toasts: state.toasts,
    addToast,
    removeToast,
    clearAll,
    success,
    error,
    warning,
    info
  }
}