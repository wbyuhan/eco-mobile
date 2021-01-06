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
