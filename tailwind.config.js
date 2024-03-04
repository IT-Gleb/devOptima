/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      aeonik: ["AeonikR","AeonikB","AeonikL"],
      inter: ["InterL","InterR", "InterB"],
    },
    extend: {
      colors:{
        primary_blue: "#243BB9",
        secondary_blue: "#234690",
        btn_secondary_blue: "#3F57DA",
        black_optima: "#0A0812",
        blue_400: "#172136",
        gray_200:"#BDC4D1", 
        gray_100:"#EFF1F6",
        button_blue: "#4D7CB2",
        btn_text_blue: "#749FF6",
        primary_orange: "#D8A87C",
        btn_back: "#4DB29A",
        gradient1: "#6D9CF6",
        blue_500: "#BDD2FC",
        blue_600: "#5F82C7",
        primary_pink: "#BE6AA7",
        bg_tooltip: "#AD79D2",
      },
  
    },
  },
  plugins: [],
}

