# eslint-config-minim
[![npm version](https://img.shields.io/npm/v/eslint-config-minim.svg)](https://www.npmjs.com/package/eslint-config-minim)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

ESLint config that only helps you when you are going to mess it up and doesn't bother you about code style

## Why?
If you are frustrated extending your ESLint config from [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard) or [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) then you are in the right place.

ESLint is an essential tool to lint your code, but sometimes does too much job and could be frustrating. This config is an approach to let ESLint help you, without changing your code style. To mantain a consistent code style I recommend you [Prettier](https://prettier.io/), try it and never look back.

Basically **eslint-config-minim** is just extending the awesome [eslint-config-unobtrusive](https://github.com/suchipi/eslint-config-unobtrusive), I recommend you to read the documentation to understand better the main goals and advantages of this approach.

## Who should use it
If you use ES6 modules, React, Jest or Cypress this config could be really useful for you.

## Installation
1. Install the package:
```shell
npm install --save-dev eslint-config-minim
```

2. Use this ESLint configuration creating an `.eslintrc.json` file in the root of your project with this content:
```json
{
  "extends": "minim"
}
```

3. If you use a webpack config with resolvers or aliases this config will automatically validate your imports if your webpack config is in the root of your project and is called `webpack.config.js`, if you have your config in another place just use this in your `.eslintrc.json` file:
```json
{
  "extends": "minim",
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "path/to/webpack.base.config.js"
      }
    }
  }
}
```
