import { createStyles } from '@wonder-ui/core';

import { close, check, search } from '../assets/icon';

// eslint-disable-next-line
const styles = createStyles({
  root: {
    background: '#fff',
  },
  pickerTitle: {
    fontSize: '15px',
    fontWeight: 'bold',
    height: '44px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    color: '#323233',
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '1px',
      background: '#e8e8e8',
      transform: 'scaleY(0.5)',
    },
    '& i': {
      position: 'absolute',
      right: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '22px',
      height: '22px',
      background: `url(${close})`,
      backgroundSe: '100% 100%',
    },
  },
  searhInputBox: {
    padding: ' 7px 15px',
    '& .search-input-content': {
      background: '#f0f1f3',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '7px',
      paddingRight: '10px',
      borderRadius: '4px',
      '& i': {
        width: '15px',
        height: '15px',
        backgroundImage: `url(${search})`,
        backgroundSize: '100% 100%',
      },
      '& input': {
        height: '30px',
        flex: 1,
        marginLeft: '10px',
        border: 0,
        outline: 'none',
        background: 'transparent',
      },
    },
  },
  pickerContent: {
    padding: '0 0 20px 20px',
    minHeight: '300px',
    overflow: 'auto',
    overflowScrolling: 'touch',
    '& li': {
      color: '#323233',
      height: '45px',
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: '22px',
      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '1px',
        background: '#e8e8e8',
        transform: 'scaleY(0.5)',
      },
      '&.picker-li-active': {
        color: '#f54d4f',
      },
      '& i': {
        width: '22px',
        height: '22px',
        background: `url(${check})`,
        backgroundSize: '100% 100%',
      },
    },
  },
});

export default styles;
