---
group:
  title: ValidRange 证件有效期
---

# ValidRange 证件有效期

## 基本用法

```tsx
import React, { useState } from 'react';

import { ValidRange } from 'eco-mobile';
import { createUseStyles } from '@wonder-ui/styles';

const styles = createUseStyles({
  root: {
    width: '375px',
  },
});

export default () => {
  const s = styles();

  const [values, setValues] = useState<Array<string | undefined>>([]);

  // 日期改变
  const onChange = (arr: Array<string | undefined>, type: string) => {
    console.log('onChange', arr, type);
    setValues(arr);
  };

  return (
    <div className={s.root}>
      <ValidRange values={values} onChange={onChange} />
    </div>
  );
};
```

## 更改默认项

```tsx
import React, { useState } from 'react';

import { Button, WhiteSpace } from 'antd-mobile';
import { ValidRange } from 'eco-mobile';
import { createUseStyles } from '@wonder-ui/styles';

const styles = createUseStyles({
  root: {
    width: '375px',
  },
});

export default () => {
  const s = styles();

  const [values, setValues] = useState<Array<string | undefined>>([
    '2011-12-01',
    '2020-07-20',
  ]);

  // 日期改变
  const onChange = (arr: Array<string | undefined>, type: string) => {
    console.log('onChange', arr, type);
    setValues(arr);
  };

  // 外部填充
  const onFill = () => {
    setValues(['2020-11-10', '2020-12-30']);
  };

  return (
    <div className={s.root}>
      <ValidRange
        values={values}
        onChange={onChange}
        labels={['开始营业时间:', '结束营业时间:']}
        placeholders={['请选择', '请选择']}
        titles={['开始日期', '结束日期']}
        forerverTxt="永久"
        foreverDate="2999-12-31"
        minDate={new Date(2010, 0, 1, 23, 59, 59)}
        maxDate={new Date(2020, 9, 28, 23, 59, 59)}
      />
      <WhiteSpace />
      <Button onClick={onFill} inline type="primary" size="small">
        外部填充
      </Button>
    </div>
  );
};
```

## 外部处理日期 toast 提示

```tsx
import React, { useState } from 'react';

import { Toast } from 'antd-mobile';
import { ValidRange } from 'eco-mobile';
import moment from 'moment';
import { createUseStyles } from '@wonder-ui/styles';

const styles = createUseStyles({
  root: {
    width: '375px',
  },
});

export default () => {
  const s = styles();

  const [values, setValues] = useState<Array<string | undefined>>([]);

  // 日期改变
  const onChange = (arr: Array<string | undefined>, type: string) => {
    console.log('onChange', arr, type);
    const today = moment().format('YYYY-MM-DD');
    if (type === 'start') {
      // 开始日期
      if (arr[0] > arr[1]) {
        return Toast.info('起始日期不能大于结束日期');
      }
      if (arr[0] > today) {
        return Toast.info('起始日期不能大于今天');
      }
    } else if (type === 'end') {
      // 结束日期
      if (arr[1] < arr[0]) {
        return Toast.info('结束日期不能小于起始日期');
      }
      if (arr[1] < today) {
        return Toast.info('结束日期不能小于今天');
      }
    }
    setValues(arr);
  };

  return (
    <div className={s.root}>
      <ValidRange values={values} onChange={onChange} />
    </div>
  );
};
```

## API

### ValidRange

| 属性         | 说明                     | 类型                    | 默认值                                 |
| ------------ | ------------------------ | ----------------------- | -------------------------------------- |
| values       | 开始结束日期             | `Array`                 | `[]`                                   |
| onChange     | 日期改变回调             | `(values, type) => any` | -                                      |
| labels       | 开始结束标签名           | `Array`                 | `['证件起始日期:', '证件终止日期:']`   |
| titles       | 开始结束日期弹窗标题     | `Array`                 | `['起始日期', '终止日期']`             |
| placeholders | 开始结束日期 placeholder | `Array`                 | `['请选择起始日期', '请选择终止日期']` |
| forerverTxt  | checked 的文本显示       | `string`                | `长期`                                 |
| foreverDate  | checked 的日期显示       | `Array`                 | `9999-12-31`                           |
| minDate      | 最小可选日期             | `Date`                  | `new Date(1980, 0, 1, 23, 59, 59)`     |
| maxDate      | 最大可选日期             | `Date`                  | `new Date(2100, 11, 30, 23, 59, 59)`   |
