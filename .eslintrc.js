const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  extends: 'eslint-config-airbnb',
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['react'],
  rules: {
    'space-before-function-paren': 0,
    'camelcase': 1,
    'no-underscore-dangle': 1,
    'func-names': 0,
    'comma-dangle': 0,
    'prefer-rest-params': 0,
    'new-cap': 0,
    'arrow-body-style': 0,
    'arrow-parens': [2, "always", { "requireForBlockBody": true }],
    'max-len': 0,
    'no-param-reassign': 0,
    'consistent-return': ['error', {
      'treatUndefinedAsUnspecified': false // allow short-circuit returns
    }]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, 'cfg', 'webpack.config.dev.js'),
      },
    },
  },
}
