/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        baseColor: '#6F11B3',
        secondGradient: '#9449CB',
        baseWhiteBg: '#F5F5FA',
        secondWhiteBg: '#F2F2F8',
        baseBlack: '#1E1E1E',
        baseGray: '#6B7280',
        grayText: '#4B5563',
      },
    },
  },
  plugins: [],
}