module.exports = {
  content: ["./src/**/*.{html,js}",

  ],


  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {

          primary: "#db81f9",

          secondary: "#f48c42",

          accent: "#0c8e76",

          neutral: "#172026",

          "base-100": "#E0EBF1",

          info: "#7CB0D5",

          success: "#3DD194",

          warning: "#BC900B",

          error: "#DF3A60",


          /*           primary: "#E37078",
                    secondary: "#FFD73C",
                    accent: "#3A4256",
                    neutral: "#3d4451",
                    "base-100": "#ffffff",
                    info: "#98A8DD",
                    success: "#1BBB70",
                    warning: "#DF7E07",
                    error: "#FA5C5C", */
        },
      },
      {
        dark: {


          primary: "#3ABFF8",

          secondary: "#828DF8",

          accent: "#F471B5",

          neutral: "#1D283A",

          "base-100": "#0F1729",

          info: "#0CA6E9",

          success: "#2BD4BD",

          warning: "#F4C152",

          error: "#FB6F84",
        },
      },


    ],
  },
  plugins: [require("daisyui"),


  ],
}
