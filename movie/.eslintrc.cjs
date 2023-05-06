module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],

  ignorePatterns: ["tailwind.config.js"],

  rules: {
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "react/prop-types": "off",
    "react/destructuring-assignment": ["error", "always"],
    "no-nested-ternary": "off",
    "import/prefer-default-export": [
      "off" || "warn" || "error",
      { target: "any" },
    ],
  },
};
