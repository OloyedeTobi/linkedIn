/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue': "#0a66c2",
        'blue-2': "rgba(112, 181, 249, 0.2)",
        'green': "#f4f389"
      },
      screens: {
        '2xl': {'max': '1535px'},
        'xl': {'max': '1279px'},
        'lg': {'max': '1023px'},
        'md': {'max': '767px'},  
        'sm': {'max': '639px'},
      }
    },
  },
  plugins: [],
}
