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
    errorTip?: string; // 错误提示
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
    errorTip?: string; // 错误提示
    name?: string; // 图片名称
    [index: string]: any;
  }

  // 数组改变
  const onChange = (arr: Array<Files>) => {
    console.log('onChange', arr);
    arr.forEach((item, index) => (item.name = `示例图${index}`));
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
        mode="cover"
        onUpload={onUpload}
      />
    </div>
  );
};
```

## 自定义选择器(子组件)

```tsx
import React, { useState } from 'react';
import { createUseStyles } from '@wonder-ui/styles';

import { Flex, WingBlank } from 'antd-mobile';
import { ImagePicker } from 'eco-mobile';

const iconIdCard = require('./icon-idcard.png');
const iconIdCardBack = require('./icon-idcard-back.png');
const iconPhoto = require('./icon-photo.png');

const styles = createUseStyles({
  root: {
    width: '375px',
    boxSizing: 'border-box',
    padding: '20px',
    border: '1px solid #ddd',
    display: 'flex',
  },
  item: {
    flex: 1,
    '&:first-child': {
      marginRight: '30px',
    },
  },
  children: {
    background: '#e8f1fc',
    height: '102px',
    position: 'relative',
  },
  img: {
    width: '89px',
    height: '57px',
  },
  iconPhoto: {
    width: '32px',
    height: '28px',
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
  },
});

export default () => {
  const s = styles();

  interface Files {
    url: string; // 图片url
    loading: boolean; // 图片是否加载中
    errorTip?: string; // 错误提示
    name?: string; // 图片名称
    [index: string]: any;
  }

  const [idCard, setIdCard] = useState<Array<Files>>([
    { name: '身份证人像面' },
  ]);
  const [idCardBack, setIdCardBack] = useState<Array<Files>>([
    { name: '身份证国徽面' },
  ]);

  // 人像面改变
  const onChangeIdCard = (arr: Array<Files>) => {
    console.log('onChange', arr);
    arr.forEach((item, index) => (item.name = '身份证人像面'));
    setIdCard(arr);
  };

  // 国徽面改变
  const onChangeIdCardBack = (arr: Array<Files>) => {
    console.log('onChange', arr);
    arr.forEach((item, index) => (item.name = '身份证国徽面'));
    setIdCardBack(arr);
  };

  return (
    <div className={s.root}>
      <div className={s.item}>
        <ImagePicker
          filesList={idCard}
          onChange={onChangeIdCard}
          mode="cover"
          width="100%"
          height="102px"
        >
          <Flex className={s.children} justify="center">
            <img className={s.img} alt="" src={iconIdCard} />
            <img alt="" className={s.iconPhoto} src={iconPhoto} />
          </Flex>
        </ImagePicker>
      </div>
      <div className={s.item}>
        <ImagePicker
          filesList={idCardBack}
          onChange={onChangeIdCardBack}
          mode="cover"
          width="100%"
          height="102px"
        >
          <Flex className={s.children} justify="center">
            <img className={s.img} alt="" src={iconIdCardBack} />
            <img alt="" className={s.iconPhoto} src={iconPhoto} />
          </Flex>
        </ImagePicker>
      </div>
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
