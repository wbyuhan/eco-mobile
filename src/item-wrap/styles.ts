import { createStyles } from '@wonder-ui/styles';

const styles = createStyles({
  root: {
    '& .am-list-item': {
      paddingLeft: 0,
      '& .am-list-line': {
        paddingRight: 0,
        '& .am-list-content, & .am-list-extra': {
          fontSize: '15px',
        },
        '& .am-list-content': {
          color: '#333333',
          width: '102px',
          flex: 'initial',
        },
        '& .am-list-extra': {
          color: 'rgba(51,51,51,0.40)',
          flex: 1,
          textAlign: 'left',
          whiteSpace: 'normal',
        },
      },
    },
    dateValue: {
      '& .am-list-extra': {
        color: '#333333 !important',
      },
    },
  },
});

export default styles;
