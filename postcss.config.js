const path = require('path');

const purgecssConfig = [
  '@fullhuman/postcss-purgecss',
  {
    content: [path.join(__dirname, 'src', '**', '*.{js,jsx}')],
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
