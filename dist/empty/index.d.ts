import React from 'react';
import { ClassKeysOfStyles } from '@wonder-ui/styles';
import styles from './styles';
interface Props {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  text?: string | React.ReactElement;
  loading?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<Pick<
  Props & {
    theme?: unknown;
  } & import('@wonder-ui/styles/dist/withStyles').StyledComponentProps<
      unknown,
      'root' | 'img'
    >,
  'text' | 'theme' | 'classes' | 'loading'
> &
  React.RefAttributes<(props: Props) => JSX.Element>>;
export default _default;
