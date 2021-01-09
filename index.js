const plugin = require("tailwindcss/plugin");
const flatten = require("flatten-tailwindcss-theme");

const shadowFill = plugin(
  ({ addUtilities, variants, theme, e }) => {
    const colors = flatten(theme("colors"));
    const utils = Object.entries(colors).reduce(
      (res, [key, value]) =>
        Object.assign(res, {
          [`.${e(`shadow-fill-${key}`)}`]: {
            "--tw-shadow": `0 0 0 9999px ${value} inset`,
            boxShadow:
              "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
          },
        }),
      {}
    );
    addUtilities(utils, variants("shadowFill"));
  },
  { variants: { shadowFill: [] } }
);

module.exports = shadowFill;
