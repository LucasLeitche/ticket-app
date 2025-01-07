/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary': '#1A15BE',
        'light-primary': '#1A15c2',
      }
    },
  },
  plugins: [],
};
