/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'ibm-plex': ['IBM Plex Sans', 'sans-serif'],
      },
      colors: {
        amul: {
          blue: '#1e40af',
          yellow: '#fbbf24',
          green: '#10b981',
          red: '#ef4444',
        }
      }
    },
  },
  plugins: [],
};
