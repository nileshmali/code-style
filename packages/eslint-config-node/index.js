'use strict';

module.exports = {
  extends: [
    'eslint:recommended',
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/node',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),
  rules: {
    strict: ['error', 'global'],
  },
};
