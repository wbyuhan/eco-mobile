import React from 'react';
import { ClassKeysOfStyles } from '@wonder-ui/core';
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
declare const _default: React.ComponentType<Pick<
  ImagePickerProps & React.RefAttributes<unknown>,
  | 'height'
  | 'resize'
  | 'width'
  | 'size'
  | 'multiple'
  | 'ref'
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
  | 'key'
> &
  Partial<
    import('@wonder-ui/styles/dist/withStyles').WithStylesProps<
      import('@wonder-ui/core').Styles<
        import('@wonder-ui/core').DefaultTheme,
        {},
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
      >
    >
  > & {
    innerRef?: React.RefObject<any> | ((instance: any) => void) | undefined;
  }>;
export default _default;
