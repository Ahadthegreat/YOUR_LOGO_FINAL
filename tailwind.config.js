/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'color-cycle': 'colorCycle 5s ease-in-out infinite', // Animation name and duration
      },
      keyframes: {
        colorCycle: {
          '0%, 100%': {
            background: 'rgb(243, 244, 246)', // slate-100 (light gray)
          },
          '50%': {
            background: 'rgb(236, 72, 153)', // pink-300
          },
        },
      },
    },
  },
  plugins: [],
}

