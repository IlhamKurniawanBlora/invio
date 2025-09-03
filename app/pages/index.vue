<script setup lang="ts">
import LoadingApp from '../components/LoadingApp.vue';
import AppWelcomeSection from '../components/App/WelcomeSection.vue';
import NavigationBar from '../components/App/NavigationBar.vue';
import QuotesSection from '../components/App/QuotesSection.vue';
import CoupleProfileSection from '../components/App/CoupleProfileSection.vue';
import EventDetailsSection from '../components/App/EventDetailsSection.vue';
import GallerySection from '../components/App/GallerySection.vue';
import GiftSection from '../components/App/GiftSection.vue';
import UcapanSection from '../components/App/UcapanSection.vue';
import SocialShareSection from '../components/App/SocialShareSection.vue';
import FooterSection from '../components/App/FooterSection.vue';

// Import audio file - Nuxt 4 way
import audioFile from '~/assets/music/Kabagyan-Sadewok.mp3';

// State untuk loading dan welcome
import { ref, onMounted, onUnmounted } from 'vue';
const loading = ref(true);
const showWelcome = ref(false);
const isAutoScrolling = ref(false);

// Shared music state
const isPlaying = ref(false);
const audioPlayer = ref<HTMLAudioElement | null>(null);
const isAudioInitialized = ref(false);

useSeoMeta({
  title: 'Wedding Jiyanto & Nur Aini',
  ogTitle: 'Wedding Jiyanto & Nur Aini',
  description: 'Dengan penuh rasa syukur, kami mengundang Anda untuk menghadiri pernikahan kami.',
  ogDescription: 'Dengan penuh rasa syukur, kami mengundang Anda untuk menghadiri pernikahan kami.',
  ogImage: 'https://jiyanto-nuraini-weeding-invitation.netlify.app/og-image.png',
  twitterCard: 'summary_large_image',
})

// Shared music control functions
const initializeAudio = () => {
  if (!audioPlayer.value && !isAudioInitialized.value) {
    try {
      // Use imported audio file or try multiple paths
      const audioSources = [
        audioFile, // Vite imported asset
        '/music/Kabagyan-Sadewok.mp3', // Public folder
        '/_nuxt/assets/music/Kabagyan-Sadewok.mp3', // Build path
        '/assets/music/Kabagyan-Sadewok.mp3' // Direct assets
      ];
      
      audioPlayer.value = new Audio();
      audioPlayer.value.loop = true;
      audioPlayer.value.volume = 0.3;
      audioPlayer.value.preload = 'auto';
      
      // Try loading first available source
      let sourceLoaded = false;
      for (const source of audioSources) {
        if (source && !sourceLoaded) {
          audioPlayer.value.src = source;
          console.log('Trying audio source:', source);
          break;
        }
      }
      
      // Handle audio events
      audioPlayer.value.addEventListener('loadeddata', () => {
        console.log('Audio loaded successfully from:', audioPlayer.value?.src);
        isAudioInitialized.value = true;
      });

      audioPlayer.value.addEventListener('error', (e) => {
        console.error('Audio error with source:', audioPlayer.value?.src, e);
        // Try next source or fallback
        tryFallbackSources();
      });
      
      audioPlayer.value.addEventListener('ended', () => {
        isPlaying.value = false;
      });
      
      audioPlayer.value.addEventListener('pause', () => {
        isPlaying.value = false;
      });
      
      audioPlayer.value.addEventListener('play', () => {
        isPlaying.value = true;
      });

      audioPlayer.value.addEventListener('canplay', () => {
        console.log('Audio can play');
      });
      
    } catch (error) {
      console.error('Error initializing audio:', error);
    }
  }
};

const tryFallbackSources = () => {
  if (!audioPlayer.value) return;
  
  const fallbackSources = [
    '/music/Kabagyan-Sadewok.mp3',
    '/_nuxt/music/Kabagyan-Sadewok.mp3',
    '/public/music/Kabagyan-Sadewok.mp3'
  ];
  
  let currentIndex = 0;
  
  const tryNext = () => {
    if (currentIndex < fallbackSources.length && audioPlayer.value) {
      console.log('Trying fallback source:', fallbackSources[currentIndex]);
      audioPlayer.value.src = fallbackSources[currentIndex];
      
      const onError = () => {
        audioPlayer.value?.removeEventListener('error', onError);
        currentIndex++;
        if (currentIndex < fallbackSources.length) {
          setTimeout(tryNext, 100);
        } else {
          console.error('All audio sources failed');
        }
      };
      
      const onLoad = () => {
        audioPlayer.value?.removeEventListener('loadeddata', onLoad);
        audioPlayer.value?.removeEventListener('error', onError);
        console.log('Fallback source loaded successfully');
        isAudioInitialized.value = true;
      };
      
      audioPlayer.value.addEventListener('error', onError, { once: true });
      audioPlayer.value.addEventListener('loadeddata', onLoad, { once: true });
      audioPlayer.value.load();
    }
  };
  
  tryNext();
};

const startMusic = async () => {
  if (!isAudioInitialized.value) {
    initializeAudio();
    // Wait a bit for initialization
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  if (!audioPlayer.value) {
    console.error('Audio player not initialized');
    return;
  }
  
  try {
    // Reset audio to beginning
    audioPlayer.value.currentTime = 0;
    
    // Play audio with user gesture
    const playPromise = audioPlayer.value.play();
    
    if (playPromise !== undefined) {
      await playPromise;
      isPlaying.value = true;
      console.log('Music started successfully');
    }
  } catch (error) {
    console.error('Error playing audio:', error);
    isPlaying.value = false;
  }
};

const toggleMusic = async () => {
  if (!audioPlayer.value) {
    initializeAudio();
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  if (!audioPlayer.value) return;

  try {
    if (isPlaying.value) {
      audioPlayer.value.pause();
      isPlaying.value = false;
    } else {
      const playPromise = audioPlayer.value.play();
      if (playPromise !== undefined) {
        await playPromise;
        isPlaying.value = true;
      }
    }
  } catch (error) {
    console.error('Error toggling audio:', error);
    isPlaying.value = false;
  }
};

// Cleanup function
const cleanupAudio = () => {
  if (audioPlayer.value) {
    audioPlayer.value.pause();
    audioPlayer.value.src = '';
    audioPlayer.value = null;
  }
  isAudioInitialized.value = false;
  isPlaying.value = false;
};

// Auto scroll functionality with section-by-section movement (special handling for gallery)
const currentSectionIndex = ref(0);
const currentGalleryPosition = ref(0);
const scrollTimeout = ref<NodeJS.Timeout | null>(null);

const getSections = () => {
  return [
    'quotes',
    'couple', 
    'event',
    'gallery',
    'gift',
    'ucapan',
    'social',
    'footer'
  ];
};

const startAutoScroll = () => {
  if (isAutoScrolling.value) return;
  
  isAutoScrolling.value = true;
  document.documentElement.classList.add('auto-scrolling');
  
  // Determine current section based on scroll position
  const sections = getSections();
  const currentScroll = window.pageYOffset;
  let nearestSectionIndex = 0;
  
  for (let i = 0; i < sections.length; i++) {
    const element = document.getElementById(sections[i]);
    if (element) {
      const elementTop = element.offsetTop - 80; // Account for header
      if (currentScroll >= elementTop - (window.innerHeight / 2)) {
        nearestSectionIndex = i + 1; // Move to next section
      }
    }
  }
  
  currentSectionIndex.value = Math.min(nearestSectionIndex, sections.length - 1);
  currentGalleryPosition.value = 0; // Reset gallery position
  scrollToNextSection();
};

const startAutoScrollFromBeginning = () => {
  if (isAutoScrolling.value) {
    stopAutoScroll();
  }
  
  isAutoScrolling.value = true;
  document.documentElement.classList.add('auto-scrolling');
  currentSectionIndex.value = 0;
  currentGalleryPosition.value = 0;
  
  scrollToNextSection();
};

const scrollToNextSection = () => {
  if (!isAutoScrolling.value) return;
  
  const sections = getSections();
  
  // If we've reached the end, stop auto scrolling
  if (currentSectionIndex.value >= sections.length) {
    stopAutoScroll();
    return;
  }
  
  const sectionId = sections[currentSectionIndex.value];
  
  // Special handling for gallery section
  if (sectionId === 'gallery') {
    scrollThroughGallery();
    return;
  }
  
  const element = document.getElementById(sectionId);
  
  if (element) {
    const headerOffset = 80; // Account for navigation bar
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - headerOffset;
    
    // Use custom ease-in-out animation
    smoothScrollTo(offsetPosition, () => {
      // After scrolling is complete, wait 3 seconds then continue (except gallery)
      scrollTimeout.value = setTimeout(() => {
        if (isAutoScrolling.value) {
          currentSectionIndex.value++;
          scrollToNextSection();
        }
      }, 3000); // 3 second pause for regular sections
    });
  } else {
    // If section not found, move to next
    currentSectionIndex.value++;
    scrollToNextSection();
  }
};

const scrollThroughGallery = () => {
  if (!isAutoScrolling.value) return;
  
  const galleryElement = document.getElementById('gallery');
  if (!galleryElement) {
    // If gallery not found, skip to next section
    currentSectionIndex.value++;
    scrollToNextSection();
    return;
  }
  
  const viewportHeight = window.innerHeight;
  const headerOffset = 80;
  const galleryTop = galleryElement.offsetTop - headerOffset;
  const galleryHeight = galleryElement.offsetHeight;
  const galleryBottom = galleryTop + galleryHeight;
  
  // Calculate current position within gallery
  const currentGalleryScrollPosition = galleryTop + (currentGalleryPosition.value * viewportHeight);
  
  // Check if we've scrolled through the entire gallery
  if (currentGalleryScrollPosition >= galleryBottom - viewportHeight) {
    // Move to next section after gallery
    currentSectionIndex.value++;
    currentGalleryPosition.value = 0; // Reset for next time
    scrollToNextSection();
    return;
  }
  
  // Scroll to next viewport within gallery
  const targetPosition = Math.min(currentGalleryScrollPosition, galleryBottom - viewportHeight);
  
  smoothScrollTo(targetPosition, () => {
    // After scrolling is complete, wait 4 seconds then continue in gallery
    scrollTimeout.value = setTimeout(() => {
      if (isAutoScrolling.value) {
        currentGalleryPosition.value++;
        scrollThroughGallery();
      }
    }, 4000); // 4 second pause for gallery viewports
  });
};

const smoothScrollTo = (targetY: number, onComplete?: () => void) => {
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  const duration = 1200; // 1.2 second animation duration
  let startTime: number | null = null;
  
  // Ease-in-out function
  const easeInOut = (t: number): number => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };
  
  const scroll = (currentTime: number) => {
    if (!isAutoScrolling.value) return;
    
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Apply ease-in-out timing function
    const easedProgress = easeInOut(progress);
    const currentY = startY + (distance * easedProgress);
    
    window.scrollTo(0, currentY);
    
    if (progress < 1) {
      requestAnimationFrame(scroll);
    } else {
      // Animation complete
      if (onComplete) onComplete();
    }
  };
  
  requestAnimationFrame(scroll);
};

const stopAutoScroll = () => {
  isAutoScrolling.value = false;
  document.documentElement.classList.remove('auto-scrolling');
  
  // Clear any pending scroll timeout
  if (scrollTimeout.value) {
    clearTimeout(scrollTimeout.value);
    scrollTimeout.value = null;
  }
  
  // Reset positions
  currentSectionIndex.value = 0;
  currentGalleryPosition.value = 0;
};

// Enhanced smooth scroll to section
const scrollToSection = (sectionId: string) => {
  stopAutoScroll(); // Stop auto scroll when user manually navigates
  
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80; // Account for navigation bar
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

onMounted(() => {
  // Initialize audio early
  setTimeout(() => {
    initializeAudio();
  }, 100);
  
  setTimeout(() => {
    loading.value = false;
    showWelcome.value = true;
  }, 6000);
  
  // Add scroll event listener to stop auto scroll on manual interaction
  let manualScrollTimeout: NodeJS.Timeout;
  const handleManualScroll = () => {
    if (isAutoScrolling.value) {
      clearTimeout(manualScrollTimeout);
      manualScrollTimeout = setTimeout(() => {
        // Stop auto scroll immediately on manual interaction
        stopAutoScroll();
      }, 100);
    }
  };
  
  // Add wheel and touch events to detect manual scrolling
  window.addEventListener('wheel', handleManualScroll, { passive: true });
  window.addEventListener('touchmove', handleManualScroll, { passive: true });
  window.addEventListener('keydown', (e) => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(e.key)) {
      stopAutoScroll();
    }
  });
  
  // Also stop auto scroll on manual click navigation
  window.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('.nav-link, .scroll-to-section')) {
      stopAutoScroll();
    }
  });
});

onUnmounted(() => {
  cleanupAudio();
  stopAutoScroll(); // Clean up auto scroll timeouts
});

const handleEnterInvitation = async () => {
  console.log('Entering invitation, starting music...');
  await startMusic();
  showWelcome.value = false;
  
  // Start auto scroll after a longer delay to let user see the first section
  setTimeout(() => {
    startAutoScroll();
  }, 2500); // Increased to 2.5 seconds to let user appreciate the first section
};

// Expose functions to template if needed
defineExpose({
  startMusic,
  toggleMusic,
  isPlaying,
  startAutoScroll,
  startAutoScrollFromBeginning,
  stopAutoScroll,
  scrollToSection
});
</script>

<template>
  <NuxtLayout :loading="loading || showWelcome">
    <LoadingApp v-if="loading" />
    <AppWelcomeSection 
      v-if="showWelcome"
      :welcomeTransform="'translateY(0)'" 
      :welcomeOpacity="'1'"
      @enter-invitation="handleEnterInvitation"
    />
    <!-- Navigation Bar - only show when not loading and not showing welcome -->
    <NavigationBar 
      v-if="!loading && !showWelcome" 
      :isPlaying="isPlaying"
      :toggleMusic="toggleMusic"
      :scrollToSection="scrollToSection"
      :isAutoScrolling="isAutoScrolling"
      :stopAutoScroll="stopAutoScroll"
      :startAutoScroll="startAutoScroll"
    />
    <div v-if="!loading && !showWelcome">
      <QuotesSection id="quotes" />
      <CoupleProfileSection id="couple" />
      <EventDetailsSection id="event" />
      <GallerySection id="gallery" />
      <GiftSection id="gift" />
      <UcapanSection id="ucapan" />
      <SocialShareSection id="social" />
      <FooterSection id="footer" />
    </div>
  </NuxtLayout>
</template>