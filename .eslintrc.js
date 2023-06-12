/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'indent': ['error', 2],
    'object-curly-spacing': ['error', 'always'],
    'no-multiple-empty-lines': 'error',
  },
  settings: {
    'import/resolver' : {
      alias : {
        map : [
          ['@mock', './mock/'],
        ]
      }
    }
  }
};
