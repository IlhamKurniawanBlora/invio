import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ['"Dancing Script"', 'cursive'],
      },
      colors: {
        wedding: {
          softpink: "#FDE2E4",
          gold: "#FFD700",
          cream: "#FFF5E1"
        }
      }
    }
  },
  plugins: [],
}

export default config
