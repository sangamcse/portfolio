module.exports = {
  presets: ['next/babel'],
  plugins: [
    'inline-react-svg',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
          utils: './src/utils',
          posts: './src/posts',
          styles: './src/styles',
        },
      },
    ],
  ],
};
