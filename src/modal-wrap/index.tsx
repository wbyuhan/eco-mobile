import React from 'react';

import { Modal } from 'antd-mobile';
import { withStyles } from '@wonder-ui/core';
import { ClassKeysOfStyles } from '@wonder-ui/styles';
import styles from './styles';

const noon = () => {};

interface Props {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  visible: boolean;
  title?: string | React.ReactElement;
  className?: string;
  transparent?: boolean;
  onClose?: () => void;
  footer?: any[];
  [index: string]: any;
}

const ModalWrap = (props: Props) => {
  const {
    classes: s = {},
    visible,
    title,
    className = s.root,
    onClose = noon,
    footer = [{ text: <div className={s.red}>知道了</div>, onPress: onClose }],
    transparent = true,
    ...resProps
  } = props;

  return (
    <Modal
      className={className}
      transparent={transparent}
      visible={visible}
      title={<div className={s.title}>{title}</div>}
      footer={footer}
      onClose={onClose}
      {...resProps}
    />
  );
};

export default withStyles(styles)(ModalWrap);
