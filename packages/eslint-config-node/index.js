'use strict';

const rules = [
  './rules/best-practices',
  './rules/errors',
  './rules/es6',
  './rules/node',
  './rules/style',
  './rules/variables',
].map(require.resolve);

module.exports = {
  extends: ['eslint:recommended', ...rules],
  rules: {
    strict: ['error', 'global'],
  },
};
