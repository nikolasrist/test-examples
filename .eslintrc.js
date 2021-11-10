const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended'
  ],
  plugins: [],
  env: {
    jest: true
  },
  parserOptions: {
    project: path.resolve(__dirname, 'tsconfig.eslint.json'),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  ignorePatterns: ['node_modules', 'jest.config.js', 'dist', 'coverage', 'src/**/*.sql', 'src/**/*.jsonl'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/camelcase': 'off'
  }
};
