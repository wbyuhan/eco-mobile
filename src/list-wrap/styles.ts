import { createStyles } from '@wonder-ui/core';

const styles = createStyles({
  root: {
    '& .am-list-body::before': {
      display: 'none !important',
    },
  },
});

export default styles;
