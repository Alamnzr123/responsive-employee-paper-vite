/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: '#ffffff',
        surfaceDark: '#0b1220',
        surfaceAlt: '#EEF7EF',
        surfaceAltDark: '#0f1724',
        primary: '#059669',
        accent: '#06b6d4',
        text: '#0f172a',
        textDark: '#e6eef9',
        muted: '#6b7280',
      }
    },
  },
  plugins: [require("react-bootstrap")],
}