<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Animated Background (Global) -->
    <AnimatedBackground />
    
    <!-- Animated Bubbles (Global) -->
    <AnimatedBubbles />
    
    <!-- Corner Decorations (Global) -->
    <CornerDecorations />
    
    <!-- Main Content Slot -->
    <div class="relative z-30">
      <slot />
    </div>
    
    <!-- Toast Notifications (Global) -->
    <ToastNotif />
  </div>
</template>

<script setup lang="ts">
import AnimatedBackground from '~/components/App/AnimatedBackground.vue'
import AnimatedBubbles from '~/components/App/AnimatedBubbles.vue'
import CornerDecorations from '~/components/App/CornerDecorations.vue'
import ToastNotif from '~/components/App/ToastNotif.vue'

// Props
interface Props {
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: false
})
</script>

<style scoped>
/* Style khusus untuk layout jika diperlukan */
</style>
