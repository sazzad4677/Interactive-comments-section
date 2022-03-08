const defaultTheme = require("tailwindcss/defaultTheme");
// opacity value will be 1 if no opacity defined
function opacityCalculation(variable) {
  return ({ opacityValue }) => `hsla(var(${variable}), ${opacityValue || 1} )`;
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          "grayish-blue": opacityCalculation("--primary-light-grayish-blue"),
          "moderate-blue": opacityCalculation("--primary-moderate-blue"),
          "soft-red": opacityCalculation("--primary-soft-red"),
          "pale-red": opacityCalculation("--primary-pale-red"),
        },
        neutral: {
          "dark-blue": opacityCalculation("--neutral-dark-blue"),
          "grayish-blue": opacityCalculation("--neutral-grayish-blue"),
          "light-gray": opacityCalculation("--neutral-light-gray"),
          "very-light-gray": opacityCalculation("--neutral-very-light-gray"),
          white: opacityCalculation("--neutral-white"),
        },
      },
      fontFamily: {
        mono: ["Rubik", ...defaultTheme.fontFamily.mono],
      },
      width: {
        128: "45rem",
      },
      screens: {
        "mobile": "375px",
        "desktop": "1440px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
