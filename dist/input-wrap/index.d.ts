import React from 'react';
import { ClassKeysOfStyles } from '@wonder-ui/styles';
import styles from './styles';
interface Props {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  [index: string]: any;
}
declare const _default: React.ForwardRefExoticComponent<Pick<
  Props & {
    theme?: unknown;
  } & import('@wonder-ui/styles/dist/withStyles').StyledComponentProps<
      unknown,
      'root'
    >,
  string | number
> &
  React.RefAttributes<(props: Props) => JSX.Element>>;
export default _default;
