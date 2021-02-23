const path = require('path');
const withPlugins = require('next-compose-plugins');
const svgr = require('next-svgr');

module.exports = withPlugins([svgr], {
  pageExtensions: ['js', 'jsx'],
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});
