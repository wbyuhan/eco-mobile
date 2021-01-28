/**
 * styles
 */
import { createStyles } from '@wonder-ui/core';
import { close } from '../assets/icon';

const styles = createStyles({
  root: {},
  title: {
    height: '50px',
    justifyContent: 'center',
    position: 'relative',
    fontWeight: 'bold',
    '& i': {
      width: '16px',
      height: '16px',
      backgroundImage: `url(${close})`,
      backgroundSize: '100% 100%',
      position: 'absolute',
      right: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '1px',
      background: '#ccc',
      transform: 'scaleY(0.5)',
    },
  },
});

export default styles;
