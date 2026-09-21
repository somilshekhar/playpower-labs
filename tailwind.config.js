/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        airbnb: {
          pink: '#FF385C',
          darkPink: '#E00B41',
          black: '#222222',
          gray: '#717171',
          lightGray: '#F7F7F7',
          border: '#DDDDDD',
        }
      },
      fontFamily: {
        sans: ['Circular', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Helvetica Neue', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 6px 16px rgba(0,0,0,0.12)',
        'modal': '0 8px 28px rgba(0,0,0,0.28)',
        'header': '0 1px 2px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}
