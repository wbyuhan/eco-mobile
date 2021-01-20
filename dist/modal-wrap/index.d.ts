import React from 'react';
import { ClassKeysOfStyles } from '@wonder-ui/styles';
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
declare const _default: React.ComponentType<Pick<Props, string | number> &
  import('@wonder-ui/core').StyledComponentProps<'root' | 'red' | 'title'>>;
export default _default;
