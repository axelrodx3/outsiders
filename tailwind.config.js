/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Source Sans 3', 'sans-serif'],
      },
      colors: {
        tavern: {
          dark: '#1a1510',
          wood: '#2d2419',
          amber: '#c9a227',
          cream: '#f5ebe0',
        }
      }
    },
  },
  plugins: [],
}
