module.exports = {
  'env': {
    'es2021': true,
    'node': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'max-len': 'off',
    'react/prop-types': ['error', {'ignore': ['navigation']}],
  },
};