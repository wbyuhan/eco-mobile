---
group:
  title: ImagePicker 图片选择器
---

# ImagePicker 图片选择器

## 基本用法

```tsx
import React, { useState } from 'react';
import { createUseStyles } from '@wonder-ui/styles';

import { WhiteSpace, Flex, WingBlank } from 'antd-mobile';
import { ImagePicker } from 'eco-mobile';

export default () => {
  const [filesList, setFilesList] = useState([]);

  interface Files {
    url: string; // 图片url
    loading: boolean; // 图片是否加载中
    previewUrl?: string; // 预览图url
    name?: string; // 图片名称
    [index: string]: any;
  }

  // 数组改变
  const onChange = (arr: Array<Files>) => {
    console.log('onChange', arr);
    arr.forEach(item => (item.name = '示例图'));
    setFilesList(arr);
  };

  return (
    <Flex direction="row" wrap="wrap">
      <WingBlank>
        <ImagePicker filesList={filesList} onChange={onChange} />
        <WhiteSpace />
      </WingBlank>
      <WingBlank>
        <ImagePicker
          filesList={filesList}
          onChange={onChange}
          config={['defaultBackGround']}
        />
        <WhiteSpace />
      </WingBlank>
      <WingBlank>
        <ImagePicker
          filesList={filesList}
          onChange={onChange}
          config={['defaultDashed']}
        />
        <WhiteSpace />
      </WingBlank>
      <WingBlank>
        <ImagePicker
          filesList={filesList}
          onChange={onChange}
          config={['defaultBorder', 'defaultBackGround']}
        />
        <WhiteSpace />
      </WingBlank>
      <WingBlank>
        <ImagePicker
          filesList={filesList}
          onChange={onChange}
          config={['defaultDashed', 'defaultBackGround']}
        />
        <WhiteSpace />
      </WingBlank>
    </Flex>
  );
};
```

## 多选+实时上传

```tsx
import React, { useState } from 'react';
import { createUseStyles } from '@wonder-ui/styles';

import { ImagePicker } from 'eco-mobile';

export default () => {
  const [filesList, setFilesList] = useState([]);

  interface Files {
    url: string; // 图片url
    loading: boolean; // 图片是否加载中
    previewUrl?: string; // 预览图url
    name?: string; // 图片名称
    [index: string]: any;
  }

  // 数组改变
  const onChange = (arr: Array<Files>) => {
    console.log('onChange', arr);
    setFilesList(arr);
  };

  // 实时上传方法
  const onUpload = () => {
    return new Promise((resolve, reject) => {
      const rate = Math.random();
      setTimeout(() => {
        if (rate > 0.3) {
          // 成功
          return resolve({ fssid: rate.toString().slice(-6) });
        }
        reject('上传失败，请重试~');
      }, 3000);
    });
  };

  return (
    <div>
      <ImagePicker
        filesList={filesList}
        onChange={onChange}
        multiple
        max={10}
        onUpload={onUpload}
      />
    </div>
  );
};
```

## API

### ImagePicker

| 属性      | 说明                                                                                                                                                                  | 类型                         | 默认值          |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------- |
| filesList | 图片文件数组,元素为对象,包含属性 `url`: 图片路径(`必选`), `loading`: 图片加载状态, `errorTip`: 图片加载失败提示文案,`name`: 图片底部显示的名称,以及业务需要的其它属性 | `Array`                      | `[]`            |
| max       | 最大上传文件数量                                                                                                                                                      | `number`                     | `1`             |
| onChange  | files 值发生变化触发的回调函数                                                                                                                                        | `(arr: Array<Files>) => any` | -               |
| onUpload  | 图片实时上传方法                                                                                                                                                      | `(file) => Promise`          | -               |
| accept    | 图片类型                                                                                                                                                              | `string`                     | `image/*`       |
| multiple  | 是否多选                                                                                                                                                              | `boolean`                    | `false`         |
| width     | 图片宽度                                                                                                                                                              | `string`                     | `80px`          |
| height    | 图片高度                                                                                                                                                              | `string`                     | `80px`          |
| config    | 图片的额外扩展项,`defaultBorder`: 显示实线边框, `defaultBackGround`: 显示默认背景色, `defaultDashed`: 显示虚线边框                                                    | `string[]`                   | `defaultBorder` |
| children  | 选择图片元素                                                                                                                                                          | `React.ReactNode`            | `default`       |
| mode      | 图片裁切类型(同 css 中`object-fit`属性), `fill`, `cover`, `contain`, `scale-down`                                                                                     | `string`                     | `fill`          |
| size      | 单个图片限制大小，单位 M                                                                                                                                              | `number`                     | -               |
| onFail    | 图片选择失败                                                                                                                                                          | `(msg: string): void`        | -               |
