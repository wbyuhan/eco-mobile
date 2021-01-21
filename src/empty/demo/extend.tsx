import React from 'react';

import { Empty } from 'eco-mobile';
import { createUseStyles } from '@wonder-ui/styles';

const styles = createUseStyles({
  root: {
    width: '375px',
    padding: '20px',
    boxSizing: 'border-box',
    background: '#fff',
    boxShadow: '0 3px 5px 0 #efefef',
  },
});

export default () => {
  const s = styles();

  return (
    <div className={s.root}>
      <Empty text="没有搜索到该商品" />
    </div>
  );
};
