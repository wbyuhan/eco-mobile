export default {
  esm: 'rollup',
  cjs: 'rollup',
  extraBabelPlugins: [['import', { libraryName: 'antd-mobile', style: 'css' }]],
};
