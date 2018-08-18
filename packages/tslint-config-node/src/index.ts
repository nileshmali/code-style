export = {
  extends: 'tslint:recommended',
  rules: {
    'arrow-parens': [true, 'ban-single-arg-parens'],
    'conditional-expression-parens': false,
    curly: [true, 'ignore-same-line'],
    'no-bitwise': false,
    'no-unused-variable': false,
    'object-literal-sort-keys': false,
    'object-literal-key-quotes': [true, 'as-needed'],
    'prefer-for-of': false,
    quotemark: [true, 'single', 'avoid-escape', 'avoid-template'],
    'variable-name': false,
    'ordered-imports': false,
    'interface-name': false,
  },
  rulesDirectory: ['tslint-consistent-codestyle'],
};
