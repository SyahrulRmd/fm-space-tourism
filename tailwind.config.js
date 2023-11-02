/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'xs': { min: '320px', max: '575px' },
        'sm': { min: '576px', max: '768px' },
        'md': { min: '769px', max: '1119px' },
        'lg': '1120px',
      },
      container: {
        center: true,
        screens: {
          mobile: "320px",
          tablet: "576px",
          desktop: "1024px",
        },
      },
      colors: {
        'primary-black': '#0B0D17',
        'grayish-blue': '#D0D6F9',
        'sub-gray': '#ffffff85'
      },
      backgroundImage: {
        'home-desktop': 'url(/src/assets/home/background-home-desktop.jpg)',
        'home-mobile': 'url(/src/assets/home/background-home-mobile.jpg)',
        'home-tablet': 'url(/src/assets/home/background-home-tablet.jpg)',
        'destination-desktop': 'url(/src/assets/destination/background-destination-desktop.jpg)',
        'destination-tablet': 'url(/src/assets/destination/background-destination-tablet.jpg)',
        'destination-mobile': 'url(/src/assets/destination/background-destination-mobile.jpg)',
        'crew-desktop': 'url(/src/assets/crew/background-crew-desktop.jpg)',
        'crew-mobile': 'url(/src/assets/crew/background-crew-mobile.jpg)',
        'crew-tablet': 'url(/src/assets/crew/background-crew-tablet.jpg)',
        'tech-desktop': 'url(/src/assets/technology/background-technology-desktop.jpg)',
        'tech-mobile': 'url(/src/assets/technology/background-technology-mobile.jpg)',
        'tech-tablet': 'url(/src/assets/technology/background-technology-tablet.jpg)',
      },
      fontFamily: {
        'barlow-condensed': ['Barlow Condensed', 'sans'],
        'bellefair': ['Bellefair', 'sans-serif']
      }
    },
  },
  plugins: [],
}

