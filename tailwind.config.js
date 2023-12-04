/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        darkgray: {
          "100": "#ababab",
          "200": "#959595",
          "300": "rgba(171, 171, 171, 0.75)",
        },
        dimgray: "#727272",
        peru: "#c99559",
        gainsboro: "rgba(217, 217, 217, 0.1)",
        gray: {
          "100": "#8e8e8e",
          "200": "#888",
          "300": "#828282",
          "400": "#7e7e7e",
          "500": "rgba(255, 255, 255, 0.23)",
        },
        darkslategray: "rgba(51, 51, 51, 0.3)",
        white: "#fff",
        lightgray: "#cdcdcd",
        darkcyan: "#42938e",
      },
      spacing: {},
      fontFamily: {
        "abhaya-libre": "'Abhaya Libre'",
        poppins: "Poppins",
        belleza: "Belleza",
        "work-sans": "'Work Sans'",
        baskervville: "Baskervville",
      },
      borderRadius: {
        "31xl": "50px",
        xl: "20px",
        "37xl": "56px",
      },
    },
    fontSize: {
      "21xl": "40px",
      xl: "20px",
      "5xl": "24px",
      "45xl": "64px",
      "6xl": "25px",
      "61xl": "80px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
