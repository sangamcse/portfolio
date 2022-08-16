module.exports = {
  extends: ['stylelint-config-standard-scss'],
  customSyntax: require('postcss-scss'),
  plugins: ['stylelint-scss'],
  rules: {
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind'],
      },
    ],
    'block-no-empty': null,
    'custom-property-empty-line-before': null,
    'unit-allowed-list': ['em', 'rem', 's', 'px', '%', 'ch', 'vh'],
  },
};
