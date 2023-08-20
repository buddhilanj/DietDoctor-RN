module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb', 'prettier'],
    plugins: ['react', 'react-hooks', 'jsx-a11y', 'import', 'prettier'],
    rules: {
      'prettier/prettier': ['error'],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // Add other project-specific rules as needed
    },
  };