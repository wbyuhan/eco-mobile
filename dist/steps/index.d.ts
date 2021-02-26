import React from 'react';
import { ClassKeysOfStyles } from '@wonder-ui/core';
import styles from './styles';
interface Props {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  current?: number;
  dataList?: string[];
}
declare const _default: React.ComponentType<Omit<Props, 'classes'> &
  Partial<
    import('@wonder-ui/core').WithStylesProps<
      import('@wonder-ui/core').Styles<
        import('@wonder-ui/core').DefaultTheme,
        {},
        | 'root'
        | 'bold'
        | 'icon'
        | 'steps'
        | 'step'
        | 'stepsIcon'
        | 'iconActive'
        | 'iconActiveOut'
        | 'stepLine'
        | 'stepActiveLine'
        | 'stepActive'
      >
    >
  > & {
    innerRef?: React.RefObject<any> | ((instance: any) => void) | undefined;
  }>;
export default _default;
