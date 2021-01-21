import React, { useState } from 'react';

import { Button } from 'antd-mobile';
import { ModalWrap } from 'eco-mobile';
import { createUseStyles } from '@wonder-ui/styles';

const styles = createUseStyles({
  root: {
    width: '375px',
    padding: '20px',
    boxSizing: 'border-box',
    background: '#fff',
    boxShadow: '0 3px 5px 0 #efefef',
  },
  red: {
    color: '#F54D4F',
    fontSize: '17px',
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
      <ModalWrap
        title="我是标题"
        visible={visible}
        onClose={onClose}
        footer={[
          {
            text: <div className={s.red}>重新拍摄/上传</div>,
            onPress: onClose,
          },
          {
            text: <div className={s.red}>上传手持身份证照认证</div>,
            onPress: onClose,
          },
          { text: <div className={s.red}>取消</div>, onPress: onClose },
        ]}
      >
        <div className={s.content}>我是内容</div>
      </ModalWrap>
    </div>
  );
};
