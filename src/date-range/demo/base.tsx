import React, { useState } from 'react';

import { DateRange } from 'eco-mobile';
import { createUseStyles } from '@wonder-ui/styles';

const styles = createUseStyles({
  root: {
    width: '375px',
    padding: '20px',
    boxSizing: 'border-box',
    background: '#fff',
    boxShadow: '0 3px 5px 0 #ccc',
  },
});

export default () => {
  const s = styles();

  const [value, setValue] = useState<Array<string | undefined>>([]);

  // 日期改变
  const onChange = (arr: Array<string | undefined>, type: string) => {
    console.log('onChange', arr, type);
    setValue(arr);
  };

  return (
    <div className={s.root}>
      <DateRange value={value} onChange={onChange} />
    </div>
  );
};
