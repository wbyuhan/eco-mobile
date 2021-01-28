import { createStyles } from '@wonder-ui/core';

const styles = createStyles({
  root: {
    color: '#757575',
  },
  steps: {
    display: 'flex',
  },
  step: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepsIcon: {
    marginBottom: '7px',
  },
  icon: {
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    position: 'relative',
    zIndex: 3,
    '&:after': {
      content: '""',
      display: 'block',
      width: '7px',
      height: '7px',
      background: '#9B9B9B',
      borderRadius: '50%',
      zIndex: 9,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
  iconActive: {
    '&:after': {
      background: 'linear-gradient(142deg, #FC7457 0%, #F63E31 100%)',
    },
  },
  iconActiveOut: {
    background: '#d2493d',
  },
  stepLine: {
    position: 'relative',
    '&:after': {
      content: '""',
      display: 'block',
      height: '2px',
      background: '#AFAFAF',
      opacity: 0.39,
      width: '100%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      zIndex: 2,
      transform: 'translateY(-50%)',
    },
  },
  stepActiveLine: {
    '&:after': {
      background: '#F74737',
      opacity: 1,
    },
  },
  stepActive: {
    color: '#F74838',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default styles;
