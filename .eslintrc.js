module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    "no-console": "warn",
    "no-unused-vars": "off",
    "no-undef": "off"
  }
}
