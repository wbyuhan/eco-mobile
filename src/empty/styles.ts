/**
 * styles
 */
import { createStyles } from '@wonder-ui/styles';

import { empty } from '../assets/icon';

const styles = createStyles({
  root: {
    fontSize: '13px',
    color: '#7d7d80',
    background: '#fff',
    textAlign: 'center',
    padding: '30px 0',
  },
  img: {
    display: 'block',
    width: '50px',
    height: '42px',
    margin: '0 auto 20px',
    backgroundImage: `url(${empty})`,
    backgroundSize: '100% 100%',
  },
});

export default styles;
