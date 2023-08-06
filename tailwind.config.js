/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#cce0ec",
          200: "#99c0d9",
          300: "#66a1c6",
          400: "#3381b3",
          500: "#0062a0",
          600: "#004e80",
          700: "#003b60",
          800: "#002740",
          900: "#001420"
        },
        secondary: '#BCE3FF',
        third: '#E5EBF5',
      },
    },
  },
  plugins: [],
}
