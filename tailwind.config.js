/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    width:{
      maxWidth: '1440px',
      widthMobile: '390px',
    },
    screens:{
      'sm': '208px',
      'md': '768px',
      'lg': '1023px',
      'xlg': '1700px',
    },
    height:{
      maxHeight: '3470px',
      heightMobile: '3656px',
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
      bgTheardSection: '#FFFFFF',
      bgNav: "#000000",
      bgNav2: "#444444",
    },
    extend: {
      backgroundImage:{
        bgHome: "url(/src/assests/photoHome.png)",
        bgHomeMobile: "url(/src/assests/Rectangle 2.png)",
      },
      borderColor:{
      borderButton: '#F2F0F1',
      borderFooter: 'rgb(201 201 201)',
      },
      
    },

  },
  plugins: [
    
  ],
}

