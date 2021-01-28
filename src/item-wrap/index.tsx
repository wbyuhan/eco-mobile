import React from 'react';
import { withStyles, ClassKeysOfStyles } from '@wonder-ui/core';

import { List } from 'antd-mobile';
import styles from './styles';

const { Item } = List;

interface Props {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  [index: string]: any;
}

const ItemWrap = (props: Props) => {
  const { classes: s = {}, ...resProps } = props;

  return (
    <div className={s.root}>
      <Item {...resProps} />
    </div>
  );
};

export default withStyles(styles)(ItemWrap);
