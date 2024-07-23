/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hijau: '#2f9e51',
        biru: '#459ed5',
        kuning: '#f8bf15',
        putih: '#f9fcfa',
        hitam : '#2f9e51'
      }
    },
  },
  plugins: [],
}