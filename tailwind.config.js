/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },

      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      screens: {
        'smallMobile': { 'min': '320px', 'max': '480px' },
        'middleMobile': { 'min': '481px', 'max': '640px' },
        'bigMobile': { 'min': '641px', 'max': '768px' },
        'tabletsInPortraitMode': { 'min': '769px', 'max': '1024px' },
        'landscapeTabletsAndSmallDesktops': { 'min': '1025px ', 'max': '1280px' },
        'commonNotebook': { 'min': '1281px', 'max': '1440px' },
        'largeDesktops': { 'min': '1441px', 'max': '1920px' },
      },

    },

  },
  plugins: [],
};
