/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    '.content/**/*.html',
    '.content/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        linkblue: '#0085ff',
      },
    },
  },
  plugins: [],
}
