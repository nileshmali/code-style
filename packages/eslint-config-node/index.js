'use strict';

module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/variables',
  ].map(require.resolve),
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'strict',
    ecmaFeatures: {

    }
  },
  rules: {
    'strict': ['error', 'global']
  }
};
