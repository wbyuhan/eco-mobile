# eco-mobile

基于`react`的移动端扩展组件

[查看文档和示例][site]

## 使用

### npm 或 yarn 安装

```shell
npm install eco-mobile --save
```

<br />

```shell
yarn add eco-mobile
```

### 按需加载

- 使用 [doly] 或 [umi] 脚手架，在配置文件中的 `extraBabelPlugins` 添加：

```javascript
[
  'import',
  {
    libraryName: 'eco-mobile',
    libraryDirectory: 'es',
    style: true,
  },
  'eco-mobile',
];
```

- 自定义配置的 `webpack` 项目，请安装 [babel-plugin-import] ，将上面配置添加到 `babel` 的 `plugins` 中。

[site]: https://yicoding.github.io/eco-mobile
[doly]: https://www.npmjs.com/package/doly-cli
[umi]: https://umijs.org/zh-CN
