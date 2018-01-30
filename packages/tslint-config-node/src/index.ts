import { dirname, join } from 'path';

export = {
  extends: 'tslint:recommended',
  rules: {
    'conditional-expression-parens': true,
    'ext-variable-name': [
      true,
      ['class', 'pascal'],
      ['interface', 'pascal', { regex: '^I.*$' }],
      ['parameter', 'camel'],
      ['property', 'static', 'camel', { regex: '^s.*$' }],
      ['property', 'private', 'camel', 'require-leading-underscore'],
      ['property', 'protected', 'camel', 'allow-leading-underscore'],
      ['variable', 'local', 'camel'],
      ['variable', 'const', 'upper'],
      ['variable', 'camel', { regex: '^g.*$' }],
      ['method', 'private', 'camel', 'require-leading-underscore'],
      ['method', 'protected', 'camel', 'allow-leading-underscore'],
      ['function', 'camel'],
      ['default', 'camel'],
    ],
    'max-params': [true, 3],
    'multiline-arrow': [true, 'require-parens', 'require-block'],
    'no-banned-terms': true,
    'no-unused-variable': false,
    'prefer-literal': [true, 'object', 'function', 'array'],
    'quotemark': [true, 'single', 'avoid-escape', 'avoid-template'],
    'variable-name': false,
  },
  rulesDirectory: [
    'tslint-consistent-codestyle',
    'tslint-microsoft-contrib',
    join(dirname(require.resolve('vrsource-tslint-rules')), './rules'),
  ],
};
