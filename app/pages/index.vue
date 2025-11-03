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

import audioFile from '~/assets/music/Kabagyan-Sadewok.mp3';

import { ref, onMounted, onUnmounted } from 'vue';

const loading = ref(true);
const showWelcome = ref(false);
const isAutoScrolling = ref(false);

const isPlaying = ref(false);
const audioPlayer = ref<HTMLAudioElement | null>(null);
const isAudioInitialized = ref(false);

// ============ AUDIO FUNCTIONS ============
const initializeAudio = () => {
  if (!audioPlayer.value && !isAudioInitialized.value) {
    try {
      const audioSources = [
        audioFile,
        '/music/Kabagyan-Sadewok.mp3',
        '/_nuxt/assets/music/Kabagyan-Sadewok.mp3',
        '/assets/music/Kabagyan-Sadewok.mp3'
      ];
      
      audioPlayer.value = new Audio();
      audioPlayer.value.loop = true;
      audioPlayer.value.volume = 0.3;
      audioPlayer.value.preload = 'auto';
      
      let sourceLoaded = false;
      for (const source of audioSources) {
        if (source && !sourceLoaded) {
          audioPlayer.value.src = source;
          console.log('Trying audio source:', source);
          break;
        }
      }
      
      audioPlayer.value.addEventListener('loadeddata', () => {
        console.log('Audio loaded successfully');
        isAudioInitialized.value = true;
      });

      audioPlayer.value.addEventListener('error', () => {
        console.error('Audio error');
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
        }
      };
      
      const onLoad = () => {
        audioPlayer.value?.removeEventListener('loadeddata', onLoad);
        audioPlayer.value?.removeEventListener('error', onError);
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
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  if (!audioPlayer.value) {
    console.error('Audio player not initialized');
    return;
  }
  
  try {
    audioPlayer.value.currentTime = 0;
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

const cleanupAudio = () => {
  if (audioPlayer.value) {
    audioPlayer.value.pause();
    audioPlayer.value.src = '';
    audioPlayer.value = null;
  }
  isAudioInitialized.value = false;
  isPlaying.value = false;
};

// ============ IMPROVED SCROLL FUNCTIONS ============
const currentSectionIndex = ref(0);
const currentGalleryPosition = ref(0);
let scrollTimeout: NodeJS.Timeout | null = null;

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

// Easing function untuk smooth animation
const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

// Smooth scroll dengan RAF untuk performa optimal
const smoothScrollTo = (
  targetY: number,
  duration: number = 1800,
  onComplete?: () => void,
  checkAutoScroll: boolean = true
): void => {
  const startY = window.pageYOffset;
  const distance = targetY - startY;

  if (Math.abs(distance) < 1) {
    if (onComplete) onComplete();
    return;
  }

  let startTime: number | null = null;
  const maxY = document.documentElement.scrollHeight - window.innerHeight;
  const finalY = Math.min(Math.max(targetY, 0), maxY);

  const scroll = (currentTime: number) => {
    // Hanya check isAutoScrolling jika checkAutoScroll adalah true
    if (checkAutoScroll && !isAutoScrolling.value) return;

    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const easeProgress = easeInOutCubic(progress);
    const currentY = startY + distance * easeProgress;

    window.scrollTo({
      top: currentY,
      left: 0
    });

    if (progress < 1) {
      requestAnimationFrame(scroll);
    } else {
      window.scrollTo(0, finalY);
      if (onComplete) {
        setTimeout(onComplete, 50);
      }
    }
  };

  requestAnimationFrame(scroll);
};

const scrollToNextSection = () => {
  if (!isAutoScrolling.value) return;

  const sections = getSections();

  if (currentSectionIndex.value >= sections.length) {
    stopAutoScroll();
    return;
  }

  const sectionId = sections[currentSectionIndex.value];

  if (sectionId === 'gallery') {
    scrollThroughGallery();
    return;
  }

  const element = document.getElementById(sectionId);

  if (element) {
    const headerOffset = 80;
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    smoothScrollTo(offsetPosition, 1800, () => {
      if (isAutoScrolling.value) {
        currentSectionIndex.value++;
        scrollTimeout = setTimeout(() => {
          if (isAutoScrolling.value) {
            scrollToNextSection();
          }
        }, 4000); // 4 detik pause
      }
    });
  } else {
    currentSectionIndex.value++;
    scrollToNextSection();
  }
};

const scrollThroughGallery = () => {
  if (!isAutoScrolling.value) return;

  const galleryElement = document.getElementById('gallery');
  if (!galleryElement) {
    currentSectionIndex.value++;
    scrollToNextSection();
    return;
  }

  const maxGalleryMoves = 5;

  if (currentGalleryPosition.value >= maxGalleryMoves) {
    currentSectionIndex.value++;
    currentGalleryPosition.value = 0;
    scrollToNextSection();
    return;
  }

  const viewportHeight = window.innerHeight;
  const headerOffset = 80;
  const galleryTop = galleryElement.offsetTop - headerOffset;
  const targetPosition = galleryTop + currentGalleryPosition.value * viewportHeight;

  smoothScrollTo(targetPosition, 1800, () => {
    if (isAutoScrolling.value) {
      currentGalleryPosition.value++;
      scrollTimeout = setTimeout(() => {
        if (isAutoScrolling.value) {
          scrollThroughGallery();
        }
      }, 4000); // 4 detik pause
    }
  });
};

const startAutoScroll = () => {
  if (isAutoScrolling.value) return;

  isAutoScrolling.value = true;
  document.documentElement.classList.add('auto-scrolling');

  const sections = getSections();
  const currentScroll = window.pageYOffset;
  let nearestSectionIndex = 0;

  for (let i = 0; i < sections.length; i++) {
    const sectionId = sections[i];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementTop = element.offsetTop - 80;
        if (currentScroll >= elementTop - window.innerHeight / 2) {
          nearestSectionIndex = i + 1;
        }
      }
    }
  }

  currentSectionIndex.value = Math.min(nearestSectionIndex, sections.length - 1);
  currentGalleryPosition.value = 0;
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

const stopAutoScroll = () => {
  isAutoScrolling.value = false;
  document.documentElement.classList.remove('auto-scrolling');

  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
    scrollTimeout = null;
  }

  currentSectionIndex.value = 0;
  currentGalleryPosition.value = 0;
};

const scrollToSection = (sectionId: string) => {
  stopAutoScroll();

  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    smoothScrollTo(offsetPosition, 1200);
  }
};

const scrollToTop = () => {
  stopAutoScroll();
  smoothScrollTo(0, 1200, undefined, false);
};

onMounted(() => {
  setTimeout(() => {
    initializeAudio();
  }, 100);

  setTimeout(() => {
    loading.value = false;
    showWelcome.value = true;
  }, 6000);

  let manualScrollTimeout: NodeJS.Timeout;
  const handleManualScroll = () => {
    if (isAutoScrolling.value) {
      clearTimeout(manualScrollTimeout);
      manualScrollTimeout = setTimeout(() => {
        stopAutoScroll();
      }, 100);
    }
  };

  window.addEventListener('wheel', handleManualScroll, { passive: true });
  window.addEventListener('touchmove', handleManualScroll, { passive: true });
  window.addEventListener('keydown', (e) => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(e.key)) {
      stopAutoScroll();
    }
  });

  window.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('.nav-link, .scroll-to-section')) {
      stopAutoScroll();
    }
  });
});

onUnmounted(() => {
  cleanupAudio();
  stopAutoScroll();
});

const handleEnterInvitation = async () => {
  console.log('Entering invitation, starting music...');
  await startMusic();
  showWelcome.value = false;

  setTimeout(() => {
    startAutoScroll();
  }, 7000);
};

defineExpose({
  startMusic,
  toggleMusic,
  isPlaying,
  startAutoScroll,
  startAutoScrollFromBeginning,
  stopAutoScroll,
  scrollToSection,
  scrollToTop
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
    <NavigationBar 
      v-if="!loading && !showWelcome" 
      :isPlaying="isPlaying"
      :toggleMusic="toggleMusic"
      :scrollToSection="scrollToSection"
      :isAutoScrolling="isAutoScrolling"
      :stopAutoScroll="stopAutoScroll"
      :startAutoScroll="startAutoScroll"
      :scrollToTop="scrollToTop"
    />
    <div v-if="!loading && !showWelcome">
      <QuotesSection id="quotes" />
      <CoupleProfileSection id="couple" />
      <EventDetailsSection id="event" />
      <GallerySection id="gallery" />
      <GiftSection id="gift" />
      <UcapanSection id="ucapan" />
      <SocialShareSection id="social" />
      <AppMap id="map" />
      <FooterSection id="footer" />
    </div>
  </NuxtLayout>
</template>