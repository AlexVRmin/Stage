/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {

    screens: {
      "mobile": {'max': '640px'},
      "tablet": {'max': '1024px'},
      "desktop": {'max': '1280px'}
    },

    extend: {
      colors: {
        "edutech-orange": "#F29005",
        "lightgrey": "#F7F6F6",
      },
    },
  },
  plugins: [],
}

