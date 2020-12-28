export default {
  esm: 'rollup',
  cjs: 'rollup',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'eco-mobile',
        libraryDirectory: 'dist',
        style: true,
      },
    ],
  ],
};
