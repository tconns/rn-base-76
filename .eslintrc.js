const path = require('path')

// const prettierOptions = require(path.resolve(__dirname, '.prettierrc.js'))

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['*.js', '*.spec.ts', '*.spec.tsx'],
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    // 'prettier/prettier': ['warn', prettierOptions],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        // 'prettier/prettier': ['warn', prettierOptions],
        '@typescript-eslint/no-unused-vars': 'off',
        'import/no-anonymous-default-export': 'off',
        'react/no-unescaped-entities': 'off',
        'react/jsx-no-comment-textnodes': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/no-deprecated': 'off',
      },
    },
  ],
}