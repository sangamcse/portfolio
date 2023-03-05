module.exports = {
  experimental: {
    esmExternals: true,
  },
  // webpack5: true,
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
  webpack: (config, { dev, isServer }) => {
    if (!dev && isServer) {
      const originalEntry = config.entry;

      config.entry = async () => {
        const entries = { ...(await originalEntry()) };

        // These scripts can import components from the app and use ES modules
        entries['scripts/generate-rss.js'] = './src/scripts/generate-rss.js';

        return entries;
      };
    }

    return config;
  },
};
