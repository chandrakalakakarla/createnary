module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        indigo: { 600: "#4a508e", "600_01": "#4a508e" },
        gray: {
          50: "#f8f9fb",
          800: "#3f3f3f",
          900: "#11151d",
          "50_01": "#f8f9fb",
          "900_01": "#11151d",
          "900_14_01": "#11151d14",
          "800_01": "#3f3f3f",
          "900_66_01": "#11151d66",
          "300_01": "#dddce0",
        },
        blue_gray: {
          100: "#d5d5d5",
          "100_66": "#d6d6d666",
          "100_02": "#d5d5d5",
          "100_03": "#cccccc",
          "100_66_01": "#d6d6d666",
        },
        white: { A700_01: "#ffffff", A700: "#ffffff" },
        black: { 600: "#656d76", "900_01": "#000000", A700_01: "#000000" },
      },
      boxShadow: { xs: "0px 0px 13px 5px #00000029" },
      fontFamily: { urbanist: "Urbanist", monoton: "Monoton", opensans: "Open Sans" },
      backgroundImage: { gradient: "linear-gradient(100deg, #4a508e,#674a8e)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
