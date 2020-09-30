// [
//   "./src/components/**/*.{js,ts,jsx,tsx}",
//   "./src/pages/**/*.{js,ts,jsx,tsx}",
// ]
module.exports = {
  purge: false,
  theme: {
    screens: {
      xs: { max: "37.5em" },
      sm: { max: "56.25em" },
      md: { max: "75em" },
      xl: { max: "112.5em" },
    },
    extend: {
      fontFamily: {
        sans: [
          "Lato",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        "primary-color": "#01B8F0",
        "primary-dark-color": "#01A4D6",
        "secondary-color": "",
        "black-color": "#1D1D1D",
      },
    },
  },
  variants: {},
  plugins: [],
};
