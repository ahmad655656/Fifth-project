/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    width:{
      maxWidth: '1440px',
    },
    height:{
      maxHeight: '3470px',
    },
    colors:{
      firstTextColor: '#000000',
      secondTextColor: '#FFFFFF',
      starColor: '#FFC633',
      trueColor: '#01AB31',
    },
    backgroundColor:{
      bgMainSection: '#F2F0F1',
      bgSecondSection: '#F0F0F0',
      bgNav: "#000000",
      bgNav2: "#444444",
    },
    extend: {
      backgroundImage:{
        bgHome: "url(/src/assests/photoHome.png)"
      },
      borderColor:{
      borderButton: '#F2F0F1',
      },
      
    },

  },
  plugins: [
    
  ],
}

