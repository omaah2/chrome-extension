module.exports = {
  globals: {
    chrome: "readonly", // Define 'chrome' as a global variable
  },
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    "react/no-unescaped-entities": "off",
  },
  parserOptions: {
    ecmaVersion: 2021, // Make sure this version is correct
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    parser: "babel-eslint",
  },
  plugins: ["react"],
  extends: ["plugin:react/recommended"],
};
