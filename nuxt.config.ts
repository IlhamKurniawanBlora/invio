import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['@/assets/css/tailwind.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo',
    'nuxt-og-image', 
  ],

  googleFonts: {
    families: {
      'Dancing+Script': [400, 700],
      'Great+Vibes': [400],
      'Inter': [400, 700],
    },
    display: 'swap',
    preconnect: true,
  },

  app: {
    head: {
      title: 'Pernikahan Jiyanto dan Nur Aini',
      meta: [
        {
          name: 'description',
          content: 'Undangan Pernikahan Jiyanto dan Nur Aini',
        },
        {
          property: 'og:title',
          content: 'Pernikahan Jiyanto & Nur Aini',
        },
        {
          property: 'og:description',
          content:
            'Dengan penuh rasa syukur dan kebahagiaan, kami mengundang Anda untuk hadir dan memberikan doa restu pada hari bahagia kami dalam pernikahan Jiyanto dan Nur Aini.',
        },
        {
          property: 'og:image',
          content:
            'https://undangan-pernikahan-jiyanto-nuraini.vercel.app/og-image.png',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    },
  },

  seo: {
    siteName: 'Wedding Jiyanto & Nur Aini',
    description: 'Undangan pernikahan resmi Jiyanto dan Nur Aini.',
    twitterCard: 'summary_large_image',
  },

  ogImage: {
    defaults: {
      component: 'OgImage',
      props: {
        title: 'Wedding Jiyanto & Nur Aini',
        description: 'Undangan pernikahan resmi Jiyanto dan Nur Aini.',
        image:
          'https://undangan-pernikahan-jiyanto-nuraini.vercel.app/og-image.png',
      },
    },
  },
})
