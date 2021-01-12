import React from 'react';
import { ClassKeysOfStyles } from '@wonder-ui/styles';
import styles from './styles';
interface Files {
  url: string;
  preview?: string;
  loading?: boolean;
  errorTip?: string;
  name?: string;
  [index: string]: any;
}
interface ImagePickerProps {
  filesList: Array<Files>;
  max?: number;
  onChange?: (arr: Array<Files>) => void;
  onUpload?: (file: any) => Promise<object | undefined>;
  accept?: string;
  multiple?: boolean;
  capture?: string;
  width?: string;
  height?: string | number;
  config?: string[];
  children?: React.ReactNode;
  mode?: string;
  size?: number;
  onFail?: (e: any) => void;
  resize?: boolean;
  disabledPreview?: boolean;
  onGetPreviewUrl?: (index: number) => Promise<string>;
  showRemove?: boolean;
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
}
declare const _default: React.ForwardRefExoticComponent<Pick<
  ImagePickerProps &
    React.RefAttributes<unknown> & {
      theme?: unknown;
    } & import('@wonder-ui/styles/dist/withStyles').StyledComponentProps<
      unknown,
      | 'root'
      | 'justifyContent'
      | 'hidden'
      | 'imgBox'
      | 'img'
      | 'errorTip'
      | 'iconRemove'
      | 'parent'
      | 'noMargin'
      | 'name'
      | 'childrenEle'
      | 'defaultDashed'
      | 'defaultBackGround'
      | 'defaultBorder'
      | 'loadingBox'
      | 'loading'
      | '@keyframes myRound'
    >,
  | 'height'
  | 'resize'
  | 'width'
  | 'size'
  | 'multiple'
  | 'filesList'
  | 'max'
  | 'onChange'
  | 'onUpload'
  | 'accept'
  | 'capture'
  | 'config'
  | 'children'
  | 'mode'
  | 'onFail'
  | 'disabledPreview'
  | 'onGetPreviewUrl'
  | 'showRemove'
  | 'classes'
  | 'theme'
  | 'key'
> &
  React.RefAttributes<
    React.ForwardRefExoticComponent<
      ImagePickerProps & React.RefAttributes<unknown>
    >
  >>;
export default _default;
