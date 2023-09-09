/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue': "#0a66c2",
        'blue-2': "rgba(112, 181, 249, 0.2)",
        'green': "#f4f389",
        'cream': "#f3f2ef",
        'grey': "rgba(0,0,0,0.6)",
        'blue-9': "#0c4a6e",
        'burnt': "#915907"
      },
      screens: {
        '2xl': {'max': '1535px'},
        'xl': {'max': '1279px'},
        'lg': {'max': '1023px'},
        'md': {'max': '767px'},  
        'sm': {'max': '639px'},
      },
      // backgroundImage:{
      //   'cover-photo': `"url${(process.env.PUBLIC_URL + '/images/user.svg')}"`
      // }
    },
  },
  plugins: [],
}
