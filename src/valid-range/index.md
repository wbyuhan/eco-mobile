---
group:
  title: ValidRange 证件有效期
---

# ValidRange 证件有效期

## 基本用法

```tsx
import React, { useState } from 'react';
import { createUseStyles } from '@wonder-ui/styles';

import { WhiteSpace, Flex, WingBlank } from 'antd-mobile';
import { ValidRange } from 'eco-mobile';

export default () => {
  return (
    <Flex direction="row" wrap="wrap">
      <ValidRange />
    </Flex>
  );
};
```

## API

### ValidRange

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
