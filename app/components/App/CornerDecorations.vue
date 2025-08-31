<template>
  <div class="corner-decorations">
    <!-- Top Left -->
    <div class="absolute top-8 left-8 z-20 corner-decoration fade-in-corner-tl">
      <img src="/assets/images/angeldecor.png" alt="Angel Decoration" class="w-20 h-20 opacity-60" />
    </div>
    
    <!-- Top Right -->
    <div class="absolute top-8 right-8 z-20 corner-decoration fade-in-corner-tr">
      <img src="/assets/images/angeldecor.png" alt="Angel Decoration" class="w-20 h-20 opacity-60 transform scaleX(-1) -rotate-90" />
    </div>
    
    <!-- Bottom Left -->
    <div class="absolute bottom-8 left-8 z-20 corner-decoration fade-in-corner-bl">
      <img src="/assets/images/angeldecor.png" alt="Angel Decoration" class="w-20 h-20 opacity-60 transform rotate-270" />
    </div>
    
    <!-- Bottom Right -->
    <div class="absolute bottom-8 right-8 z-20 corner-decoration fade-in-corner-br">
      <img src="/assets/images/angeldecor.png" alt="Angel Decoration" class="w-20 h-20 opacity-60 transform rotate-180 scaleX(-1)" />
    </div>
  </div>
</template>

<script setup lang="ts">
// No script needed for this component
</script>

<style scoped>
/* Corner animations */
.fade-in-corner-tl {
  animation: fadeInCornerTL 1.5s ease-out forwards;
  opacity: 0;
}

.fade-in-corner-tr {
  animation: fadeInCornerTR 1.5s ease-out 0.3s forwards;
  opacity: 0;
}

.fade-in-corner-bl {
  animation: fadeInCornerBL 1.5s ease-out 0.6s forwards;
  opacity: 0;
}

.fade-in-corner-br {
  animation: fadeInCornerBR 1.5s ease-out 0.9s forwards;
  opacity: 0;
}

@keyframes fadeInCornerTL {
  from {
    opacity: 0;
    transform: translateX(-20px) translateY(-20px) rotate(-10deg);
  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(0) rotate(0deg);
  }
}

@keyframes fadeInCornerTR {
  from {
    opacity: 0;
    transform: translateX(20px) translateY(-20px) rotate(10deg) scaleX(-1);
  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(0) rotate(0deg) scaleX(-1);
  }
}

@keyframes fadeInCornerBL {
  from {
    opacity: 0;
    transform: translateX(-20px) translateY(20px) rotate(190deg);
  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(0) rotate(180deg);
  }
}

@keyframes fadeInCornerBR {
  from {
    opacity: 0;
    transform: translateX(20px) translateY(20px) rotate(170deg) scaleX(-1);
  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(0) rotate(180deg) scaleX(-1);
  }
}

/* Corner decoration hover effects */
.corner-decoration {
  transition: all 0.4s ease;
}

.corner-decoration:hover {
  transform: scale(1.1);
  filter: brightness(1.2);
}

.corner-decoration:hover img {
  animation: gentle-glow 2s ease-in-out infinite;
}

@keyframes gentle-glow {
  0%, 100% { filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3)); }
  50% { filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.5)); }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .corner-decoration {
    top: 1rem !important;
    bottom: 1rem !important;
    left: 1rem !important;
    right: 1rem !important;
  }
  
  .corner-decoration img {
    width: 3rem !important;
    height: 3rem !important;
  }
  
  /* Maintain rotation and scaling for each corner on mobile */
  .fade-in-corner-tr img {
    transform: scaleX(-1) !important;
  }
  
  .fade-in-corner-bl img {
    transform: rotate(90deg) !important;
  }
  
  .fade-in-corner-br img {
    transform: rotate(90deg) scaleX(-1) !important;
  }
}

@media (max-width: 640px) {
  .corner-decoration img {
    width: 3rem !important;
    height: 3rem !important;
  }
  
  /* Maintain rotation and scaling for each corner on small mobile */
  .fade-in-corner-tr img {
    transform: scaleX(-1) !important;
  }
  
  .fade-in-corner-bl img {
    transform: rotate(90deg) !important;
  }
  
  .fade-in-corner-br img {
    transform: rotate(90deg) scaleX(-1) !important;
  }
}
</style>
