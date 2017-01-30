module.exports = {
  parser: 'babel-eslint',
  root: true,
  extends: [
    'airbnb-base',
  ],
  plugins: [
    'import',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'max-len': ['error', 120],
    'import/extensions': ['error', 'always',
      {
        js: 'never',
      }
    ],
    'linebreak-style': 'off',
  },
};
