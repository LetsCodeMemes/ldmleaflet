/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../dist/**/*.{html,js}"
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        body: ['Roboto']
      },

      colors: {
        'darkBlue': '#005BB0',
        'blueBlack': '#1E4263',
        'realBlue': '#0075E3',
        'brightBlue': '#4599E8',
        'midnightBlue': '#003363',
      },
    },
  },
  plugins: [],
}

