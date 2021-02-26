import React from 'react';
import { ClassKeysOfStyles } from '@wonder-ui/core';
import styles from './styles';
interface Props {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  title?: string | React.ReactElement;
  children?: React.ReactElement;
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  onCancel?: () => void;
  [index: string]: any;
}
declare const _default: React.ComponentType<Omit<Props, 'classes'> &
  Partial<
    import('@wonder-ui/core').WithStylesProps<
      import('@wonder-ui/core').Styles<
        import('@wonder-ui/core').DefaultTheme,
        {},
        'title' | 'root'
      >
    >
  > & {
    innerRef?: React.RefObject<any> | ((instance: any) => void) | undefined;
  }>;
export default _default;
