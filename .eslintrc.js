module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb/hooks",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  root: true,
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "import"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "no-use-before-define": "off",
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
        svg: "always",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
