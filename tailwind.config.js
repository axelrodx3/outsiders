/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        slab: ['Roboto Slab', 'serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'hero-enter': 'fade-in-up 0.7s ease-out both',
      },
      colors: {
        tavern: {
          black: '#0a0a0a',
          dark: '#111111',
          charcoal: '#1a1a1a',
          gray: '#2d2d2d',
          silver: '#a0a0a0',
          white: '#f5f5f5',
          offwhite: '#e5e5e5',
        }
      }
    },
  },
  plugins: [],
}
