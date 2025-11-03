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
      title: 'Jiyanto & Nur Aini Wedding Invitation',
      meta: [
        { name: 'description', content: 'Undangan pernikahan Jiyanto & Nur Aini - 07 Desember 2025' },
        { property: 'og:title', content: 'Jiyanto & Nur Aini Wedding Invitation' },
        { property: 'og:description', content: 'Undangan pernikahan Jiyanto & Nur Aini - 07 Desember 2025' },
        { property: 'og:image', content: 'https://undangan-pernikahan-jiyanto-nuraini.vercel.app/og-image.jpg' },
        { property: 'og:url', content: 'https://undangan-pernikahan-jiyanto-nuraini.vercel.app/' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    },
  },
})
