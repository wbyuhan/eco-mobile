import React, { useState } from 'react';

import { Button } from 'antd-mobile';
import { ModalWrap } from 'eco-mobile';
import { createUseStyles } from '@wonder-ui/core';

const styles = createUseStyles({
  root: {
    width: '375px',
    padding: '20px',
    boxSizing: 'border-box',
    background: '#fff',
    boxShadow: '0 3px 5px 0 #efefef',
  },
  content: {
    padding: '30px 20px',
  },
});

export default () => {
  const s = styles();

  const [visible, setVisible] = useState<boolean>(false);

  // 关闭
  const onClose = () => {
    setVisible(val => !val);
  };

  return (
    <div className={s.root}>
      <Button onClick={onClose} inline type="primary" size="small">
        show
      </Button>
      <ModalWrap title="我是标题" visible={visible} onClose={onClose}>
        <div className={s.content}>我是内容</div>
      </ModalWrap>
    </div>
  );
};
