import { createStyles } from '@wonder-ui/core';

const styles = createStyles({
  root: {
    '& .am-list-item': {
      paddingLeft: 0,
      minHeight: '50px',
      '& .am-input-label': {
        color: '#333333',
        fontSize: '15px',
        marginRight: 0,
      },
      '& .am-input-control': {
        '& input': {
          fontSize: '15px',
        },
      },
    },
  },
});

export default styles;
