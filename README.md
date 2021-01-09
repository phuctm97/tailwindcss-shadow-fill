# 🎨 tailwindcss-shadow-fill

[![npm version][npm badge]][npm url]
[![GitHub license][license badge]][license url]

TailwindCSS utility to override background fill color using `box-shadow`, is especially useful to style autocompleted form fields with [tailwindcss-autofill] because `background-color` won't work.

## Install

```bash
yarn add tailwindcss-shadow-fill
```

Or if you use `npm`:

```bash
npm i --save tailwindcss-shadow-fill
```

## Usage

Add to `plugins` in your **tailwind.config.js**:

```js
module.exports = {
  // ...
  plugins: [
    require("tailwindcss-shadow-fill"),
    // Other plugins.
  ],
  variants: {
    extend: {
      shadowFill: ["dark"], // Enable variants.
    },
  },
};
```

Style your components using `shadow-fill-{color}`, e.g. `shadow-fill-gray-100`, `shadow-fill-gray-200`, `shadow-fill-red-500`, etc.

```jsx
<input className="shadow-fill-white dark:shadow-fill-black" />
```

## Requirements

- Node.js 12+

- TailwindCSS 2

---

Made by [@phuctm97].

<!-- Badges -->

[npm badge]: https://img.shields.io/npm/v/tailwindcss-shadow-fill?logo=npm
[license badge]: https://img.shields.io/github/license/phuctm97/tailwindcss-shadow-fill
[npm url]: https://www.npmjs.com/package/tailwindcss-shadow-fill
[license url]: /LICENSE

<!-- Links -->

[@phuctm97]: https://phuctm97.com
[tailwindcss-autofill]: https://github.com/phuctm97/tailwindcss-autofill
