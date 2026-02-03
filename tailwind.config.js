/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        'street-black': '#1a1a1a',
        'street-white': '#fafafa',
        'street-beige': '#e5e5e5',
        'street-accent': '#646cff',
      }
    },
  },
  plugins: [],
}

