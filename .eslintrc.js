module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-app',
    '@typescript-eslint',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", "tsx"] }],
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
        "paths": ['./src']
      }
    }
  },
};
