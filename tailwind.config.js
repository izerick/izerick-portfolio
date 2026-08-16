/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        emerald: {
          450: '#10b981',
          500: '#10b981',
          950: '#022c22',
        },
        slate: {
          850: '#0f172a',
          950: '#080c0a', // Deep Emerald Dark Background
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.3)',
        'glow-emerald-lg': '0 0 40px -10px rgba(16, 185, 129, 0.45)',
      }
    },
  },
  plugins: [],
}
