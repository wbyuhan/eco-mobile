import React, { useState } from 'react';

import { ValidRange } from 'eco-mobile';
import { createUseStyles } from '@wonder-ui/styles';

const styles = createUseStyles({
  root: {
    width: '375px',
    boxSizing: 'border-box',
    padding: '0 16px 10px 9px',
    background: '#fff',
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
