import { ref, onMounted, onUnmounted } from 'vue'

export interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
  delay?: number
  stagger?: number
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    once = true,
    delay = 0,
    stagger = 100
  } = options

  const elements = ref<Map<Element, boolean>>(new Map())
  const observer = ref<IntersectionObserver | null>(null)

  const animateElement = (element: Element, index: number = 0) => {
    setTimeout(() => {
      element.classList.add('is-visible')
    }, delay + (index * stagger))
  }

  const initObserver = () => {
    if (!process.client) return

    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const element = entry.target
            if (!elements.value.get(element)) {
              elements.value.set(element, true)
              animateElement(element, index)
              
              if (once) {
                observer.value?.unobserve(element)
              }
            }
          } else if (!once) {
            entry.target.classList.remove('is-visible')
            elements.value.set(entry.target, false)
          }
        })
      },
      {
        threshold,
        rootMargin
      }
    )
  }

  const observe = (element: Element) => {
    if (observer.value && element) {
      observer.value.observe(element)
      elements.value.set(element, false)
    }
  }

  const unobserve = (element: Element) => {
    if (observer.value && element) {
      observer.value.unobserve(element)
      elements.value.delete(element)
    }
  }

  const cleanup = () => {
    if (observer.value) {
      observer.value.disconnect()
      elements.value.clear()
    }
  }

  onMounted(() => {
    initObserver()
  })

  onUnmounted(() => {
    cleanup()
  })

  return {
    observe,
    unobserve,
    cleanup,
    elements: elements.value
  }
}

// Directive untuk auto-register elements
export function vScrollAnimate(el: Element, binding: any) {
  const { observe } = binding.instance.exposed || binding.instance.setupState || {}
  
  if (observe && typeof observe === 'function') {
    observe(el)
  }
}
