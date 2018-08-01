export = {
  extends: 'tslint:recommended',
  rules: {
    'arrow-parens': [true, 'ban-single-arg-parens'],
    'conditional-expression-parens': false,
    'curly': [true, 'ignore-same-line'],
    'no-banned-terms': true,
    'no-bitwise': false,
    'no-unused-variable': false,
    'object-literal-sort-keys': false,
    'prefer-for-of': false,
    'quotemark': [true, 'single', 'avoid-escape', 'avoid-template'],
    'variable-name': false,
  },
  rulesDirectory: ['tslint-consistent-codestyle', 'tslint-microsoft-contrib'],
};