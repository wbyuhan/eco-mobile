import React from 'react';
import { ClassKeysOfStyles } from '@wonder-ui/core';
import styles from './styles';
interface Props {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  visible: boolean;
  title?: string | React.ReactElement;
  className?: string;
  transparent?: boolean;
  onClose?: () => void;
  footer?: any[];
  [index: string]: any;
}
declare const _default: React.ComponentType<Omit<Props, 'classes'> &
  Partial<
    import('@wonder-ui/core').WithStylesProps<
      import('@wonder-ui/core').Styles<
        import('@wonder-ui/core').DefaultTheme,
        {},
        'root' | 'red' | 'title'
      >
    >
  > & {
    innerRef?: React.RefObject<any> | ((instance: any) => void) | undefined;
  }>;
export default _default;
