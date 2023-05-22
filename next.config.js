/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/gh-pages',
  experimental: {
    esmExternals: true,
    appDir: true,
  },
  pageExtensions: ['js', 'jsx'],
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/json',
          destination: '/feed.json',
        },
        {
          source: '/rss',
          destination: '/feed.xml',
        },
      ],
    };
  },
};

module.exports = nextConfig;
