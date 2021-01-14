import React, { useState } from 'react';

import { Button } from 'antd-mobile';
import { ValidRange } from 'eco-mobile';
import { createUseStyles } from '@wonder-ui/styles';
import { createForm } from 'rc-form';

const styles = createUseStyles({
  root: {
    width: '375px',
  },
});

export default createForm()(({ form }: { form: any }) => {
  const s = styles();
  const { getFieldProps, getFieldsValue } = form;

  const [value, setValue] = useState<Array<string | undefined>>([]);

  // 日期改变
  const onChange = (arr: Array<string | undefined>, type: string) => {
    console.log('onChange', arr, type);
    setValue(arr);
  };

  return (
    <div className={s.root}>
      {/* <ValidRange value={value} onChange={onChange} /> */}
      <ValidRange {...getFieldProps('date')} />
      <Button>submit</Button>
    </div>
  );
});
