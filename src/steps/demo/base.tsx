import React, { useState } from 'react';

import { Button, WhiteSpace } from 'antd-mobile';
import { Steps } from 'eco-mobile';
import { createUseStyles } from '@wonder-ui/core';

const styles = createUseStyles({
  root: {
    width: '375px',
    padding: '20px',
    boxSizing: 'border-box',
    background: '#fff',
    boxShadow: '0 3px 5px 0 #efefef',
  },
});

const dataList = ['Step1', 'Step2', 'Step3', 'Step4'];

export default () => {
  const s = styles();

  const [current, setCurrent] = useState<number>(0);

  // 下一步
  const onChange = (type: string) => {
    if (type === 'prev') {
      if (current === 0) return;
      setCurrent(val => val - 1);
    } else if (type === 'next') {
      if (current === dataList.length - 1) return;
      setCurrent(val => val + 1);
    }
  };

  return (
    <div className={s.root}>
      <Steps current={current} dataList={dataList} />
      <WhiteSpace size="lg" />
      <Button
        onClick={() => onChange('prev')}
        inline
        type="primary"
        size="small"
      >
        上一步
      </Button>
      <Button
        onClick={() => onChange('next')}
        inline
        type="primary"
        size="small"
      >
        下一步
      </Button>
    </div>
  );
};
