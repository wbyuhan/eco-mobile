import { createStyles } from '@wonder-ui/styles';
import { iconRemove, iconLoading } from '../assets/icon';

const styles = createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  justifyContent: {
    justifyContent: 'space-between',
  },
  hidden: {
    display: 'none',
  },
  imgBox: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '5px',
    boxSizing: 'border-box',
  },
  img: {
    display: 'block',
    boxSizing: 'border-box',
    borderRadius: '5px',
    width: '100%',
    height: '100%',
  },
  errorTip: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#d56161',
    fontSize: '12px',
    border: '1px solid #d56161',
    boxSizing: 'border-box',
    borderRadius: '5px',
    padding: '0 3px',
  },
  iconRemove: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 99,
    backgroundImage: `url(${iconRemove})`,
    backgroundSize: '100% 100%',
  },
  parent: {
    overflow: 'hidden',
    margin: '0 8px 8px 0',
  },
  noMargin: {
    margin: '0 0 8px 0',
  },
  name: {
    textAlign: 'center',
    wordBreak: 'break-all',
    marginBottom: '10px',
    color: '#999',
    fontSize: '12px',
    lineHeight: 1.4,
    marginTop: '8px',
  },
  childrenEle: {
    position: 'relative',
    borderRadius: '5px',
    boxSizing: 'border-box',
    '&:before': {
      content: '""',
      width: '30px',
      height: '4px',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#ccc',
    },
    '&:after': {
      content: '""',
      width: '4px',
      height: '30px',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#ccc',
    },
  },
  defaultDashed: {
    border: '1px dashed #ccc',
  },
  defaultBackGround: {
    background: '#e8f1fc',
  },
  defaultBorder: {
    border: '1px solid #ddd',
  },
  loadingBox: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 100,
    background: 'rgba(0,0,0,.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    width: '35px',
    height: '35px',
    backgroundImage: `url(${iconLoading})`,
    backgroundSize: '100% 100%',
    animation: '$myRound 1s linear infinite',
  },
  '@keyframes myRound': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
});

export default styles;
