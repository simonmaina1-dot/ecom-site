/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
      colors: {
        'street-black': '#1a1a1a',
        'street-white': '#fafafa',
        'street-accent': '#646cff',
      },
      borderRadius: {
        'sm': '4px',
      }
    },
  },
  plugins: [],
}
