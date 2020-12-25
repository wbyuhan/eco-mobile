import React from 'react';
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
}
declare const ImagePicker: (props: ImagePickerProps) => JSX.Element;
export default ImagePicker;
