# 🎨 tailwindcss-shadow-fill

[![npm version][npm badge]][npm url]
[![GitHub license][license badge]][license url]

TailwindCSS utility to override background fill color using `box-shadow`, is especially useful to style autocompleted form fields with [tailwindcss-autofill] because `background-color` won't work.

## Requirements

- Node.js 12+

- TailwindCSS 2+

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
    // ...other plugins.
  ],
};
```

Style your components using `shadow-fill-{color}`, e.g. `shadow-fill-gray-100`, `shadow-fill-gray-200`, `shadow-fill-red-500`, etc.

```jsx
<input className="shadow-fill-white dark:shadow-fill-black" />
```

## Contributing

### Requirements

- Node 12+

- Yarn 1.22+

### Setup

1. Install requirements

2. Clone the repository

3. Run `yarn` to install dependencies

### Develop

- Commit adhering to [Angular commit convention](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit), use `yarn commit` or [Code conventional commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) to commit interactively

- Submit a PR and make sure required status checks pass

- When a PR is merged or code is pushed to `master`, Github automatically builds and publishes a new release if there're relevant changes

## Author

- [Minh-Phuc Tran][@phuctm97]

<!-- Badges -->

[npm badge]: https://img.shields.io/npm/v/tailwindcss-shadow-fill?logo=npm
[license badge]: https://img.shields.io/github/license/phuctm97/tailwindcss-shadow-fill
[npm url]: https://www.npmjs.com/package/tailwindcss-shadow-fill
[license url]: /LICENSE

<!-- Links -->

[@phuctm97]: https://phuctm97.com
[tailwindcss-autofill]: https://github.com/phuctm97/tailwindcss-autofill
