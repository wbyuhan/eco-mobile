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

  const [value, setValue] = useState<Array<string | undefined>>([]);

  // 日期改变
  const onChange = (arr: Array<string | undefined>, type: string) => {
    console.log('onChange', arr, type);
    const today = moment().format('YYYY-MM-DD');
    if (type === 'start') {
      if ((arr[0] as string) > today) {
        return Toast.info('起始日期不能大于今天');
      }
    } else if (type === 'end') {
      if ((arr[1] as string) < today) {
        return Toast.info('结束日期不能小于今天');
      }
    }
    setValue(arr);
  };

  return (
    <div className={s.root}>
      <ValidRange value={value} onChange={onChange} />
    </div>
  );
};
