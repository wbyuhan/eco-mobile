import { defineConfig } from 'dumi';

const publicPath =
  process.env.NODE_ENV === 'production'
    ? 'https://yicoding.github.io/eco-mobile/'
    : '/';

const manifestLink = `${publicPath}asset-manifest.json`;

const links =
  process.env.NODE_ENV === 'production'
    ? [{ rel: 'manifest', href: manifestLink }]
    : [];

const umiConfig = {
  title: 'eco-mobile',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'site',
  // more config: https://d.umijs.org/config
  mode: 'doc',
  publicPath,
  manifest: {
    publicPath,
  },
  history: {
    type: 'hash',
  },
  links,
  hash: true,
};

if (process.env.NODE_ENV === 'production') {
  umiConfig.chunks = ['vendors', 'umi'];
  umiConfig.chainWebpack = function(config, { webpack }) {
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /node_modules/,
              chunks: 'all',
              name: 'vendors',
              priority: -10,
              enforce: true,
            },
          },
        },
      },
    });
  };
}

export default defineConfig(umiConfig);
