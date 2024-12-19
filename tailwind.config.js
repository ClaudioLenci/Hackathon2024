/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Noto: ["Noto Sans", "serif"]
      },
      colors: {
        "primary-charcoal": "#373F51",
        "primary-moonstone": "#58A4B0",
        "secondary-green": "#A7C957",
        "secondary-blue": "#90D5FF",
        "secondary-coral": "#E07A5F",
        "neutral-white": "#D8DBE2"
      }
    },
  },
  plugins: [],
}

