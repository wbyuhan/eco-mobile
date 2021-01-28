import React from 'react';

import {
  ActivityIndicator,
  withStyles,
  ClassKeysOfStyles,
} from '@wonder-ui/core';

import styles from './styles';

interface Props {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  text?: string | React.ReactElement;
  loading?: boolean;
}

const Empty = (props: Props) => {
  const { classes: s = {}, text = '暂无数据', loading } = props;

  return (
    <div className={s.root}>
      {loading ? (
        <ActivityIndicator text="loading..." />
      ) : (
        <>
          <div className={s.img} />
          <p>{text}</p>
        </>
      )}
    </div>
  );
};

export default withStyles(styles)(Empty);
