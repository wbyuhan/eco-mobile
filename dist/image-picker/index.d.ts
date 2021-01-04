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
  onChange?: (arr: Array<Files>) => any;
  onUpload?: (file: any) => Promise<object | undefined>;
  accept?: string;
  multiple?: boolean;
  width?: string;
  height?: string | number;
  config?: string[];
  children?: React.ReactNode;
  mode?: string;
  size?: number;
  onFail?: (e: any) => any;
  resize?: boolean;
  disabledPreview?: boolean;
  onGetPreviewUrl?: (index: number) => Promise<string>;
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
}
declare const _default: React.ForwardRefExoticComponent<Pick<
  ImagePickerProps & {
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
  | 'children'
  | 'theme'
  | 'classes'
  | 'filesList'
  | 'max'
  | 'onChange'
  | 'onUpload'
  | 'accept'
  | 'config'
  | 'mode'
  | 'onFail'
  | 'disabledPreview'
  | 'onGetPreviewUrl'
> &
  React.RefAttributes<(props: ImagePickerProps) => JSX.Element>>;
export default _default;
