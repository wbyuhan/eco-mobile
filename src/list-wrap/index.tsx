import React from 'react';
import { withStyles, ClassKeysOfStyles } from '@wonder-ui/styles';

import { List } from 'antd-mobile';
import styles from './styles';

interface Props {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  [index: string]: any;
}

const ListWrap = (props: Props) => {
  const { classes: s = {}, ...resProps } = props;

  return (
    <div className={s.root}>
      <List {...resProps} />
    </div>
  );
};

export default withStyles(styles)(ListWrap);
