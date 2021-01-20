import React from 'react';
import { ClassKeysOfStyles } from '@wonder-ui/styles';
import styles from './styles';
interface Props {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  title?: string | React.ReactElement;
  children?: React.ReactElement;
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  onCancel?: () => void;
  [index: string]: any;
}
declare const _default: React.ComponentType<Pick<Props, string | number> &
  import('@wonder-ui/core').StyledComponentProps<'root' | 'title'>>;
export default _default;
