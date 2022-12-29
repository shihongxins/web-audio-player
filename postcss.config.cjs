module.exports = {
  plugins: {
    "postcss-preset-env": {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      selectorBlackList: ["keep-unit"],
      exclude: [/node_modules/],
    },
  },
};
