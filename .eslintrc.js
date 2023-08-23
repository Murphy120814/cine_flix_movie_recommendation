module.exports = {

  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    // es2021: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-unused-vars': 'off',
    'import/no-cycle': 0,
    'no-console': 0,
    'consistent-return': 'off',
    'react/prop-types': 0,
    'linebreak-style': 0,
    'react/state-in-constructor': 0,
    'import/prefer-default-export': 0,
    'max-len': [2, 252],
    'object-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-ally/click-events-have-key-events': 0,
    'jsx-ally/alt-text': 0,
    'jsx-ally/no-autofocus': 0,
    'jsx-ally/no-static-element-interactions': 0,
    'react/no-array-index-key': 0,
    'no-param-reassign': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'no-sparse-arrays': 0,
    'no-array-index-key': 0,
    camelcase: 0,
  },
};

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: 'airbnb',
//   overrides: [
//     {
//       env: {
//         node: true,
//       },
//       files: [
//         '.eslintrc.{js,cjs}',
//       ],
//       parserOptions: {
//         sourceType: 'script',
//       },
//     },
//   ],
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   rules: {
//   },
// };
