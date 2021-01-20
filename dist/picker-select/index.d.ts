import React from 'react';
import { ClassKeysOfStyles } from '@wonder-ui/styles';
import styles from './styles';
interface Item {
  value: string;
  text: string;
}
interface Props {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  visible?: boolean;
  dataList?: Item[];
  onOk?: (item: Item) => void;
  onCancel?: () => void;
  title?: string | React.ReactElement;
  value?: string | null;
  showSearchBox?: boolean;
  placeholder?: string;
  height?: number | string;
}
declare const _default: React.ForwardRefExoticComponent<Pick<
  Props & {
    theme?: unknown;
  } & import('@wonder-ui/styles/dist/withStyles').StyledComponentProps<
      unknown,
      'root' | 'pickerTitle' | 'searhInputBox' | 'pickerContent'
    >,
  | 'height'
  | 'visible'
  | 'title'
  | 'theme'
  | 'classes'
  | 'dataList'
  | 'onOk'
  | 'onCancel'
  | 'value'
  | 'showSearchBox'
  | 'placeholder'
> &
  React.RefAttributes<(props: Props) => JSX.Element>>;
export default _default;
