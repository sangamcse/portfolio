const path = require('path');

const purgecssConfig = [
  '@fullhuman/postcss-purgecss',
  {
    content: [
      path.join(__dirname, 'pages', '**', '*.{js,jsx,ts,tsx}'),
      path.join(__dirname, 'components', '**', '*.{js,jsx,ts,tsx}')
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }
];

module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
    ...(process.env.PURGE_CSS ? [purgecssConfig] : [])
  ]
};
