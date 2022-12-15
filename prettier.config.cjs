/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  jsxSingleQuote: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
};
