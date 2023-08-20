module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'prettier'],
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    'prettier',
    '@typescript-eslint',
    'import',
  ],
  rules: {
    'prettier/prettier': ['error'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    // Add other project-specific rules as needed
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
