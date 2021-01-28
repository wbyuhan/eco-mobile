import { createStyles } from '@wonder-ui/core';

const styles = createStyles({
  root: {
    '& .am-list-item': {
      border: '1px solid #F0F0F0',
      minHeight: '36px',
      paddingLeft: '10px',
      '& .am-list-line': {
        '& .am-list-extra': {
          flex: 1,
          fontSize: '14px !important',
          whiteSpace: 'normal',
          textAlign: 'left !important',
        },
      },
    },
  },
  label: {
    color: '#666',
    fontSize: '14px',
  },
  tip: {
    color: '#999',
    fontSize: '12px',
  },
  dateBox: {
    marginTop: '10px',
  },
  splitText: {
    margin: '0 10px',
    color: '#666',
  },
  datePicker: {
    flex: 1,
  },
  dateValue: {
    '& .am-list-extra': {
      color: '#323232 !important',
    },
  },
});

export default styles;
