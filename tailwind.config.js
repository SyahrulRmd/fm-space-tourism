/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary-black': '#0B0D17',
        'grayish-blue': '#D0D6F9',
      },
      backgroundImage: {
        'home-desktop': 'url(/src/assets/home/background-home-desktop.jpg)'
      }
    },
  },
  plugins: [],
}

