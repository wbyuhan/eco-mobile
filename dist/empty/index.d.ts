import React from 'react';
import { ClassKeysOfStyles } from '@wonder-ui/core';
import styles from './styles';
interface Props {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  text?: string | React.ReactElement;
  loading?: boolean;
}
declare const _default: React.ComponentType<Omit<Props, 'classes'> &
  Partial<
    import('@wonder-ui/core').WithStylesProps<
      import('@wonder-ui/core').Styles<
        import('@wonder-ui/core').DefaultTheme,
        {},
        'root' | 'img'
      >
    >
  > & {
    innerRef?: React.RefObject<any> | ((instance: any) => void) | undefined;
  }>;
export default _default;
