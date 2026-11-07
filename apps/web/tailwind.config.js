/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f5fa',
          100: '#e1ecf5',
          200: '#c2d9ec',
          300: '#94bde0',
          400: '#5e9dd0',
          500: '#387ec0',
          600: '#2763a4',
          700: '#1e4f85',
          800: '#1a416e',
          900: '#102a48', // Deep Gov Navy Blue
          950: '#09192d',
        },
        verified: {
          50: '#f0fdf4',
          500: '#22c55e',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          700: '#b45309',
        },
        critical: {
          50: '#fef2f2',
          500: '#ef4444',
          700: '#b91c1c',
        }
      },
    },
  },
  plugins: [],
}
