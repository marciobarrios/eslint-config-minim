module.exports = {
  parser: "babel-eslint",
  extends: [
    "unobtrusive",
    "unobtrusive/import",
    "unobtrusive/react",
    "plugin:promise/recommended",
  ],
  plugins: ["promise", "cypress"],
  rules: {
    // Warns if a prop is missing in an existing propTypes object
    "react/prop-types": [1, { ignore: ["classes"], skipUndeclared: true }],
  },
  settings: {
    "import/resolver": "webpack"
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
    "cypress/globals": true,
  },
}
