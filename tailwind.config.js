const { borderRadius } = require('@mui/system');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    width: {
      maxWidth: "1440px",
      widthMobile: "390px",
    },
    screens: {
      sm: "208px",
      md: "768px",
      lg: "1023px",
      xlg: "1700px",
    },
    height: {
      maxHeight: "4770px",
      heightMobile: "4776px",
    },
    borderRadius: {
      borderComment: "0px 20px 0px 0px",
      borderComment2: "0px 0px 0px 20px",
    },
    colors: {
      firstTextColor: "#E5E5E5",
      secondTextColor: "#8B8B8B",
      textButton: "#006B5F",
      textOutline: "#0B0B0D",
      starColor: "#FFC633",
      trueColor: "#01AB31",
      textFocus: "#1F7A7A",
    },
    backgroundColor: {
      bgMainSection: "#0B0B0D",
      bgSecondSection: "#8A8A8A",
      bgTheardSection: "#1F7A7A",
      bgheaderfooter: "#0A0A0A",
      bgNav: "#1F7A7A",
      bgNav2: "#1F7A7A",
      hoverButton: "#00524A",
    },
    extend: {
      backgroundImage: {
        bgHome:"url(https://lh3.googleusercontent.com/-Q_bnzAvIY5k/Zp96YjEJJTI/AAAAAAAAOIg/RWCc21NEDccKVDfX8BzHb0lV5zMZdGoowCNcBGAsYHQ/w1600/%25D8%25AE%25D9%2584%25D9%2581%25D9%258A%25D8%25A9%2B%25D8%25B3%25D9%258A%25D8%25A7%25D8%25B1%25D8%25A9%2B%25D8%25A8%25D9%2588%25D8%25BA%25D8%25A7%25D8%25AA%25D9%258A%2B%25D8%25AA%25D9%2588%25D8%25B1%25D8%25A8%25D9%258A%25D9%2588%25D9%2586%2B%25D8%25A8%25D8%25AF%25D9%2582%25D8%25A9%2B4K%2B%25D9%2584%25D9%2584%25D8%25A7%25D8%25A8%25D8%25AA%25D9%2588%25D8%25A8%2B%25D9%2588%25D8%25A7%25D9%2584%25D9%2583%25D9%2585%25D8%25A8%25D9%258A%25D9%2588%25D8%25AA%25D8%25B1.jpg)",
        bgHomeMobile:"url(https://cdn.pixabay.com/photo/2020/01/16/18/29/ferrari-4771347_640.jpg)",
        bgAboutMobile:"/kevin-fitzgerald-Z4CfUB0U9aA-unsplash-removebg-preview.png",
      },
      borderColor: {
        borderButton: "#006B5F",
        borderFooter: "rgb(201 201 201)",
        borderDetailsPage: "#0B0B0D",
      },
      boxShadow: {
        shadowSign: "4px 20px 18px 3px",
        shadowButton: "2px 2px 10px 2px inset",
        shadowFqs: "-5px 127px 88px 79px",
      },
      boxShadowColor: {
        shadowSignColor: "[#8B8B8B]/60",
        shadowPhoto: "[#8B8B8B]/60",
        hoverShadow: "[#8B8B8B]/60",
        shadowFqs: "#1F7A7A",
      },
      animation: {
        animPhoto: "aminPhoto 3s ease-in-out infinite 5s alternate",
        aminComment: "aminComment 4s ease-in-out infinite 5s alternate",
        aminComment2: "aminComment 4s ease-in-out infinite 5s alternate",
        aminatetext1: "aminatetext1 2s ease-in-out infinite 1s alternate",
        aminatetext2: "aminatetext2 2s ease-in-out infinite 1s alternate",
        aminatetext3: "aminatetext3 2s ease-in-out infinite 1s alternate",
        aminatetext4: "aminatetext4 2s ease-in-out infinite 1s alternate",
        aminatetext5: "aminatetext5 2s ease-in-out infinite 1s alternate",
        aminatetext6: "aminatetext6 2s ease-in-out infinite 1s alternate",
        aminatetext7: "aminatetext7 2s ease-in-out infinite 1s alternate",
        aminatetext: "aminatetext 1s ease-in-out 1 1s forwards",
        aminatePhoto1: "aminatePhoto1 10s ease-in-out 1 0s alternate forwards",
        aminatePhoto2: "aminatePhoto2 10s ease-in-out 1 20s alternate forwards",
        aminatePhoto3: "aminatePhoto3 10s ease-in-out 1 40s alternate forwards",
        aminatePhoto4: "aminatePhoto4 10s ease-in-out 1 60s alternate forwards",
        aminateBoxPhoto: "aminateBoxPhoto 10s ease-in-out 1 80s alternate forwards",
        aminatetextAbout: "aminatetextAbout 10s ease-in-out 1 80s alternate forwards",
        aminatePhoto1Sm: "aminatePhoto1Sm 10s ease-in-out 1 0s alternate forwards",
        aminatePhoto2Sm: "aminatePhoto2Sm 10s ease-in-out 1 20s alternate forwards",
        aminatePhoto3Sm: "aminatePhoto3Sm 10s ease-in-out 1 40s alternate forwards",
        aminatePhoto4Sm: "aminatePhoto3Sm 10s ease-in-out 1 60s alternate forwards",

      },
      keyframes: {
        aminatePhoto1Sm:{
          "0%": { transform: "translate(0px, 0px)" },
          "100%": { transform: "translate(0px, 80px)", left: '41px' ,width: '310px', height: '420px', borderRadius: '20px' },
        },
        aminatePhoto2Sm:{
          "0%": { transform: "translate(-50px, 0px)" },
          "100%": { transform: "translate(0px, 80px)" ,width: '310px', left: '41px' , height: '420px', borderRadius: '20px' },
        },
        aminatePhoto3Sm:{
          "0%": { transform: "translate(-50px, 0px)" },
          "100%": { transform: "translate(0px, 80px)" ,width: '310px', left: '41px' , height: '420px', borderRadius: '20px' },
        },
        aminatePhoto4Sm:{
          "0%": { transform: "translate(-50px, 0px)" },
          "100%": { transform: "translate(0px, 80px)" ,width: '310px',left: '41px' , height: '420px', borderRadius: '20px' },
        },
        aminatetextAbout:{
          "0%": { transform: "translate(0px, 0px)" },
          "100%": { width: '70%' },
        },
        aminateBoxPhoto:{
          "0%": { transform: "translate(0px, 0px)" },
          "100%": { transform: "translate(-100px, 0px)" },
        },
        aminatePhoto1:{
          "0%": { transform: "translate(0px, 0px)" },
          "100%": { transform: "translate(150px, 0px)" ,width: '400px', height: '500px', borderRadius: '20px' },
        },
        aminatePhoto2:{
          "0%": { transform: "translate(0px, 0px)" },
          "100%": { transform: "translate(150px, -110px)" ,width: '400px', height: '500px', borderRadius: '20px' },
        },
        aminatePhoto3:{
          "0%": { transform: "translate(0px, 0px)" },
          "100%": { transform: "translate(150px, -220px)" ,width: '400px', height: '500px', borderRadius: '20px' },
        },
        aminatePhoto4:{
          "0%": { transform: "translate(0px, 0px)" },
          "100%": { transform: "translate(150px, -330px)" ,width: '400px', height: '500px', borderRadius: '20px' },
        },
        animPhoto: {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(360deg)" },
        },
        aminComment: {
          "0%": { height: "100px", width: "100px" },
          "50%": { height: "50px", width: "150px" },
          "100%": { height: "100px", width: "100px" },
        },
        aminComment2: {
          "0%": { height: "100px", width: "100px" },
          "50%": { height: "50px", width: "150px" },
          "100%": { height: "100px", width: "100px" },
        },
        aminatetext: {
          "0%": { transform: "translateX(-1300px)" },
          "100%": { transform: "translateX(0px)" },
        },
        aminatetext1: {
          "0%": { fontSize: "30px" },
          "50%": { fontSize: "35px", marginRight: '10px' },
          "100%": { fontSize: "40px", color: '#1F7A7A' },
        },
        aminatetext2: {
          "0%": { fontSize: "30px" },
          "50%": { fontSize: "35px", marginRight: '10px' },
          "100%": { fontSize: "40px", color: '#1F7A7A' },
        },
        aminatetext3: {
          "0%": { fontSize: "30px" },
          "50%": { fontSize: "35px", marginRight: '10px' },
          "100%": { fontSize: "40px", color: '#1F7A7A' },
        },
        aminatetext4: {
          "0%": { fontSize: "30px" },
          "50%": { fontSize: "35px", marginRight: '10px' },
          "100%": { fontSize: "40px", color: '#1F7A7A' },
        },
        aminatetext5: {
          "0%": { fontSize: "30px" },
          "50%": { fontSize: "35px", marginRight: '10px' },
          "100%": { fontSize: "40px", color: '#1F7A7A' },
        },
        aminatetext6: {
          "0%": { fontSize: "30px" },
          "50%": { fontSize: "35px", marginRight: '10px' },
          "100%": { fontSize: "40px", color: '#1F7A7A' },
        },
        aminatetext7: {
          "0%": { fontSize: "30px" },
          "50%": { fontSize: "35px", marginRight: '10px' },
          "100%": { fontSize: "40px", color: '#1F7A7A' },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
