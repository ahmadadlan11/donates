module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        background: "#F6F6F6",
        orang: "#EE3C38",
        fontColor1: "#E41C31",
        buttonFrom: "#EC3620",
        buttonTo: "#E32624",
      },
      height: (theme) => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
    },
  },
  variants: {},
  plugins: [],
};
