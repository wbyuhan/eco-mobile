import { defineConfig } from 'dumi';

const publicPath =
  process.env.NODE_ENV === 'production'
    ? 'https://yicoding.github.io/eco-mobile/'
    : // ? 'https://yicoding.github.io/eco-mobile/docs/'
      '/';

const manifestLink = `${publicPath}asset-manifest.json`;

//引入
const CompressionPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

//判断只有在生产模式才开启
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);

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
  outputPath: 'docs',
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
  extraBabelPlugins: [['import', { libraryName: 'antd-mobile', style: true }]],
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
    config.plugin('CompressionPlugin').use(
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: productionGzipExtensions,
        // 只处理大于xx字节 的文件，默认：0
        threshold: 10240,
        // 示例：一个1024b大小的文件，压缩后大小为768b，minRatio : 0.75
        minRatio: 0.8, // 默认: 0.8
        // 是否删除源文件，默认: false
        deleteOriginalAssets: false,
      }),
    );
  };
  umiConfig.extraBabelPlugins.push([IS_PROD ? 'transform-remove-console' : '']);
}

export default defineConfig(umiConfig);
