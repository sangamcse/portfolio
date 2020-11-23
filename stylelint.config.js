module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind'],
      },
    ],
    'block-no-empty': null,
    'custom-property-empty-line-before': null,
    'unit-allowed-list': ['em', 'rem', 's', 'px', '%', 'vh'],
  },
};
