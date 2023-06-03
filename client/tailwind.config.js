/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors:{
      'txtPrimary':'#384152',
      'txtSecond':'#F97216',
      'bgPrimary':'#F3F4F6',
      'bgHover':'#FFEDD5',
      'bgSecond':'#FFFFFF'
    },
    },
  },
  plugins: [],
}