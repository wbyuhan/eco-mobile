import { createStyles } from '@wonder-ui/core';

const styles = createStyles({
  root: {
    '& .am-list': {
      '& .am-list-body': {
        '&:before, &:after': {
          display: 'none',
        },
        '& .am-list-item': {
          paddingLeft: 0,
          minHeight: '50px',
          '& .am-list-line': {
            paddingRight: 0,
            '& .am-list-content, & .am-list-extra': {
              fontSize: '15px !important',
            },
            '& .am-list-content': {
              color: '#333333',
              width: '102px',
              marginRight: '0px',
              flex: 'initial',
            },
            '& .am-list-extra': {
              color: 'rgba(51,51,51,0.40)',
              flex: 1,
              whiteSpace: 'normal',
              textAlign: 'left !important',
            },
          },
        },
      },
    },
  },
  itemEnd: {
    '& .am-list-line': {
      '&:after': {
        display: 'none !important',
      },
    },
  },
  datePicker: {
    flex: 1,
  },
  dateValue: {
    '& .am-list-extra': {
      color: '#333333 !important',
    },
  },
  forerverBox: {
    whiteSpace: 'nowrap',
    margin: '0 2px 0 13px',
    position: 'relative',
    paddingLeft: '12px',
    fontSize: '15px',
    color: '#757570',
    overflow: 'initial',
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      height: '30px',
      width: '1px',
      background: '#F6F6F6',
    },
  },
  iconCheck: {
    width: '14px',
    height: '14px',
    border: '1px solid #538DED',
    borderRadius: '50%',
    marginRight: '4px',
    boxSizing: 'border-box',
    position: 'relative',
  },
  iconChecked: {
    '&:after': {
      content: '""',
      display: 'block',
      width: '7px',
      height: '7px',
      background: '#538DED',
      borderRadius: '50%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
    },
  },
});

export default styles;
