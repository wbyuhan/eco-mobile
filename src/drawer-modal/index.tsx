import React from 'react';

import { Drawer, Flex, withStyles, ClassKeysOfStyles } from '@wonder-ui/core';
import styles from './styles';

const DrawerWrap = withStyles(() => ({
  root: {
    backgroundColor: '#fff',
  },
}))(Drawer);

const noon = () => {};

interface Props {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  title?: string | React.ReactElement;
  children?: React.ReactElement;
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  onCancel?: () => void;
  [index: string]: any;
}

const DrawerModal = (props: Props) => {
  const {
    classes: s = {},
    title,
    children,
    anchor = 'bottom',
    onCancel = noon,
    ...resProps
  } = props;

  return (
    <DrawerWrap onCancel={onCancel} anchor={anchor} {...resProps}>
      <div className={s.root}>
        <Flex className={s.title}>
          {title}
          <i onClick={onCancel} />
        </Flex>
        {children}
      </div>
    </DrawerWrap>
  );
};

export default withStyles(styles)(DrawerModal);
