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
  value?: Array<Files>;
  max?: number;
  onChange?: (arr: Array<Files>) => void;
  onUpload?: (file: any) => Promise<object | undefined>;
  onInit?: (index: number) => Promise<object | undefined>;
  accept?: string;
  multiple?: boolean;
  capture?: string;
  width?: string;
  height?: string | number;
  config?: Array<'defaultBackGround' | 'defaultDashed' | 'defaultBorder'>;
  children?: React.ReactNode;
  mode?: 'fill' | 'cover' | 'contain' | 'scale-down';
  size?: number;
  onFail?: (e: any) => void;
  resize?: boolean;
  disabledSelect?: boolean;
  disabledPreview?: boolean;
  onGetPreviewUrl?: (index: number) => Promise<string>;
  showRemove?: boolean;
  replace?: boolean;
  quality?: number;
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
}
declare const _default: React.ForwardRefExoticComponent<Pick<
  ImagePickerProps &
    React.RefAttributes<unknown> & {
      theme?: unknown;
    } & import('@wonder-ui/styles/dist/withStyles').StyledComponentProps<
      unknown,
      | 'defaultBackGround'
      | 'defaultDashed'
      | 'defaultBorder'
      | 'root'
      | 'justifyContent'
      | 'marginBottom'
      | 'hidden'
      | 'imgBox'
      | 'img'
      | 'errorTip'
      | 'iconRemove'
      | 'parent'
      | 'noMargin'
      | 'name'
      | 'childrenEle'
      | 'loadingBox'
      | 'loading'
      | '@keyframes myRound'
    >,
  | 'height'
  | 'resize'
  | 'width'
  | 'size'
  | 'multiple'
  | 'value'
  | 'max'
  | 'onChange'
  | 'onUpload'
  | 'onInit'
  | 'accept'
  | 'capture'
  | 'config'
  | 'children'
  | 'mode'
  | 'onFail'
  | 'disabledSelect'
  | 'disabledPreview'
  | 'onGetPreviewUrl'
  | 'showRemove'
  | 'replace'
  | 'quality'
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
