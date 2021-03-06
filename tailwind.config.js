module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ["./src/**/*.js"],
  },
  theme: {
    extend: {
      colors: {
        background: "#F6F6F6",
        primary: "#E70E02",
        secondary: "#EEAC5A",
        deepOrange: "#e54a1f",
        border: "#E95363",
      },
    },
  },
  variants: {},
  plugins: [],
};
