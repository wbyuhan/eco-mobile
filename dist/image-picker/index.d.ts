import React from 'react';
import styles from './styles';
import { ClassKeysOfStyles } from '@wonder-ui/styles';
interface Files {
  url: string;
  loading?: boolean;
  errorTip?: string;
  name?: string;
  [index: string]: any;
}
interface ImagePickerProps {
  filesList: Array<Files>;
  max?: number;
  onChange?: (arr: Array<Files>) => any;
  onUpload?: (file: any) => Promise<object | undefined>;
  accept?: string;
  multiple?: boolean;
  width?: string;
  height?: string;
  config?: string[];
  children?: React.ReactNode;
  mode?: string;
  size?: number;
  onFail?: (e: any) => any;
  classes: ClassKeysOfStyles<typeof styles>;
}
declare const _default: React.ForwardRefExoticComponent<Pick<
  any,
  string | number | symbol
> &
  React.RefAttributes<(props: ImagePickerProps) => JSX.Element>>;
export default _default;
