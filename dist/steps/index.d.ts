import React from 'react';
import { ClassKeysOfStyles } from '@wonder-ui/styles';
import styles from './styles';
interface Props {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  current?: number;
  stepList?: string[];
}
declare const _default: React.ForwardRefExoticComponent<Pick<
  Props & {
    theme?: unknown;
  } & import('@wonder-ui/styles/dist/withStyles').StyledComponentProps<
      unknown,
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
    >,
  'theme' | 'classes' | 'current' | 'stepList'
> &
  React.RefAttributes<(props: Props) => JSX.Element>>;
export default _default;
