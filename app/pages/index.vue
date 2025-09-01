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
import audioFile from '~/assets/music/NikenSalindry-SangGuruSejati.mp3';

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
        '/music/NikenSalindry-SangGuruSejati.mp3', // Public folder
        '/_nuxt/assets/music/NikenSalindry-SangGuruSejati.mp3', // Build path
        '/assets/music/NikenSalindry-SangGuruSejati.mp3' // Direct assets
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
    '/music/NikenSalindry-SangGuruSejati.mp3',
    '/_nuxt/music/NikenSalindry-SangGuruSejati.mp3',
    '/public/music/NikenSalindry-SangGuruSejati.mp3'
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

// Auto scroll functionality
const startAutoScroll = () => {
  if (isAutoScrolling.value) return;
  
  isAutoScrolling.value = true;
  document.documentElement.classList.add('auto-scrolling');
  
  // Start smooth auto scroll
  const scrollStep = () => {
    if (!isAutoScrolling.value) return;
    
    const scrollSpeed = 3; // pixels per frame (increased from 1)
    const currentScroll = window.pageYOffset;
    const targetScroll = currentScroll + scrollSpeed;
    
    window.scrollTo({
      top: targetScroll,
      behavior: 'auto' // Use auto for smooth continuous scroll
    });
    
    // Continue scrolling if not at bottom
    if (currentScroll < document.documentElement.scrollHeight - window.innerHeight) {
      requestAnimationFrame(scrollStep);
    } else {
      stopAutoScroll();
    }
  };
  
  requestAnimationFrame(scrollStep);
};

const stopAutoScroll = () => {
  isAutoScrolling.value = false;
  document.documentElement.classList.remove('auto-scrolling');
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
  let scrollTimeout: NodeJS.Timeout;
  const handleManualScroll = () => {
    if (isAutoScrolling.value) {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Only stop if user is actively scrolling
        stopAutoScroll();
      }, 150);
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
});

onUnmounted(() => {
  cleanupAudio();
});

const handleEnterInvitation = async () => {
  console.log('Entering invitation, starting music...');
  await startMusic();
  showWelcome.value = false;
  
  // Start auto scroll after a short delay
  setTimeout(() => {
    startAutoScroll();
  }, 1000);
};

// Expose functions to template if needed
defineExpose({
  startMusic,
  toggleMusic,
  isPlaying,
  startAutoScroll,
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