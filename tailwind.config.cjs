/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0284c7',
        error: '#ef4444'
      },
      fontFamily: {
        primary: ['Open Sans', 'sans-serif']
      }
    }
  },
  plugins: [
  ]
}
