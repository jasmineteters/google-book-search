module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto Slab', 'serif'],
        Nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        theme: '#C7998C',
        greyViolet: '#8389A0',
      },
      screens: {
        phone: '320px',
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
        '2xl': '1536px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
