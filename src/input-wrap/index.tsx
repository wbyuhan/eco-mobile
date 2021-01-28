import React, { useRef } from 'react';
import { withStyles, ClassKeysOfStyles } from '@wonder-ui/core';

import { InputItem } from 'antd-mobile';
import styles from './styles';

const noon = () => {};

interface Props {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  [index: string]: any;
}

const InputWrap = (props: Props) => {
  const { classes: s = {}, onExtraClick = noon, ...resProps } = props;
  const ref = useRef<any>(null);

  // 点击extra
  const onExtraClickHandle = () => {
    ref.current.focus();
    onExtraClick();
  };

  return (
    <div className={s.root}>
      <InputItem ref={ref} onExtraClick={onExtraClickHandle} {...resProps} />
    </div>
  );
};

export default withStyles(styles)(InputWrap);
