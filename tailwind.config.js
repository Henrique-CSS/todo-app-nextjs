/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        lightBlue: {
          100: "#f7fcff",
          200: "#eff8ff",
          300: "#e8f5fe",
          400: "#e0f1fe",
          500: "#d8eefe",
          600: "#adbecb",
          700: "#828f98",
          800: "#565f66",
          900: "#2b3033"
        },
        blue: {
          100: "#d8eefe",
          200: "#b1ddfe",
          300: "#8bcbfd",
          400: "#64bafd",
          500: "#3da9fc",
          600: "#3187ca",
          700: "#256597",
          800: "#184465",
          900: "#0c2232"
},
      }
    },
  },
  plugins: [],
}
