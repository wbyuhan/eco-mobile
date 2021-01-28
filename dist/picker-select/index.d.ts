import React from 'react';
import { ClassKeysOfStyles } from '@wonder-ui/core';
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
declare const _default: React.ComponentType<Pick<
  Props,
  | 'height'
  | 'visible'
  | 'dataList'
  | 'onOk'
  | 'onCancel'
  | 'title'
  | 'value'
  | 'showSearchBox'
  | 'placeholder'
> &
  Partial<
    import('@wonder-ui/styles/dist/withStyles').WithStylesProps<
      import('@wonder-ui/core').Styles<
        import('@wonder-ui/core').DefaultTheme,
        {},
        'root' | 'pickerTitle' | 'searhInputBox' | 'pickerContent'
      >
    >
  > & {
    innerRef?: React.RefObject<any> | ((instance: any) => void) | undefined;
  }>;
export default _default;
