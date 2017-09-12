'use strict';

module.exports = {
  env: {
    node: true
  },
  rules: {
    'callback-return': 'off',
    'global-require': 'error',
    'handle-callback-err': 'warn',
    'no-buffer-constructor': 'error',
    'no-mixed-requires': ['off', false],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'off',
  }
}
