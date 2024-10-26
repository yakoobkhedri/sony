/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary':'#0F1339',
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      fontFamily: {
        yekanBakhRegular: "yekanBakh-Regular",
        yekanBakhBold: "yekanBakh-bold",
        MontserratRegular: "Montserrat-Regular",
        MontserratBold: "Montserrat-Bold",
        RokhBold: "Rokh-Bold",
        RokhExtraBold: "Rokh-ExtraBold",
        RokhBlack: "Rokh-Black",
      },
      maxWidth:{
        'content':'1280px',
      },
    }
},
}

