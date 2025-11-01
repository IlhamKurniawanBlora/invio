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
          name: 'keywords',
          content: 'pernikahan, jiyanto, nur aini, undangan',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  seo: {
    siteName: 'Pernikahan Jiyanto & Nur Aini',
    siteUrl: 'https://undangan-pernikahan-jiyanto-nuraini.vercel.app',
    description: 'Undangan pernikahan resmi Jiyanto dan Nur Aini.',
    twitterCard: 'summary_large_image',
    ogImage: '/og-image.png',
  },
})
