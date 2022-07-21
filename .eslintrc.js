module.exports = {
  'root': false,
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'plugins': [
    'svelte3',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'ignorePatterns': ['www/**/*', 'capacitor*'],
  'rules': {
    'require-jsdoc': 0,
    'max-len': ['error', 120, 2],
  },
};
