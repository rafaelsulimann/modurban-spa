module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "airbnb-typescript/base",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint", "import", "prettier"],
  rules: {
    "react/jsx-filename-extension": "off",
    "react-refresh/only-export-components": "off",
    "import/no-extraneous-dependencies": "off",
    "prettier/prettier": ["error", {
      "printWidth": 80,
      "tabWidth": 2,
      "trailingComma": "all",
      "arrowParens": "always",
      "endOfLine": "auto",
    }],
  },
};
