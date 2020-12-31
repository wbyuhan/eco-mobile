import { createStyles } from '@wonder-ui/styles';
import { iconCheck } from '../assets/icon';

const styles = createStyles({
  root: {
    '& .am-list-item': {
      '& .am-list-line': {
        paddingRight: '8px',
        '& .am-list-content, & .am-list-extra': {
          fontSize: '15px !important',
        },
        '& .am-list-content': {
          width: '112px',
          marginRight: '0px',
          flex: 'initial',
        },
        '& .am-list-extra': {
          flex: 1,
          whiteSpace: 'normal',
          textAlign: 'left !important',
        },
      },
    },
  },
  datePicker: {
    flex: 1,
  },
  dateValue: {
    '& .am-list-extra': {
      color: '#323232 !important',
    },
  },
  forerverBox: {
    whiteSpace: 'nowrap',
    marginRight: '5px',
    position: 'relative',
    paddingLeft: '8px',
    fontSize: '12px',
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      height: '15px',
      width: '1px',
      background: '#ddd',
    },
  },
  iconCheck: {
    width: '15px',
    height: '15px',
    border: '1px solid #999',
    borderRadius: '50%',
    marginRight: '5px',
    boxSizing: 'border-box',
  },
  iconChecked: {
    border: 0,
    backgroundImage: `url(${iconCheck})`,
    backgroundSize: '100% 100%',
  },
});

export default styles;
