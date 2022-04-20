module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    extraFileExtensions: ['.mjs'],
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'consistent-return': 'warn', // Temporary
    'no-return-await': 'off', // note you must disable the base rule as it can report incorrect errors
    'no-underscore-dangle': 'warn', // Temporary
    'no-useless-escape': 'warn', // Temporarily changed it to warn
    'no-useless-concat': 'warn', // Temporarily changed it to warn
    'react/destructuring-assignment': 'warn',
    'react/no-unescaped-entities': 'warn', // Temporary
    'react/no-unused-prop-types': 'warn', // Temporary
    'react/react-in-jsx-scope': 'off', // Temporary
    'react/prop-types': 'warn', // temporarily changed it to warn
    'require-await': 'error',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          // "Interfaces must be named in PascalCase that does not start with I.",
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],
    '@typescript-eslint/no-use-before-define': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Allow variables begin with _
    '@typescript-eslint/no-unused-expressions': 'warn', // temporarily changed it to warn
    '@typescript-eslint/no-shadow': 'warn', // Temporary
    '@typescript-eslint/no-var-requires': 'warn',
    'react/no-unstable-nested-components': 'warn', // Temporary
    'react/jsx-no-useless-fragment': [
      'error',
      {
        allowExpressions: true,
      },
    ],
  },
  ignorePatterns: ['/node_modules/**', '/src/assets/images/**', '/public/**'],
};
