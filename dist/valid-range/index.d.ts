import React from 'react';
import { ClassKeysOfStyles } from '@wonder-ui/styles';
import styles from './styles';
interface ValidRangeProps {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  value?: Array<string | undefined>;
  onChange?: (value: Array<string | undefined>, type: string) => void;
  labels?: string[];
  titles?: string[];
  placeholders?: string[];
  forerverTxt?: string;
  foreverDate?: string;
  minDate?: Date;
  maxDate?: Date;
  cache?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<Pick<
  ValidRangeProps & {
    theme?: unknown;
  } & import('@wonder-ui/styles/dist/withStyles').StyledComponentProps<
      unknown,
      | 'root'
      | 'itemEnd'
      | 'datePicker'
      | 'dateValue'
      | 'forerverBox'
      | 'iconCheck'
      | 'iconChecked'
    >,
  | 'theme'
  | 'classes'
  | 'value'
  | 'onChange'
  | 'labels'
  | 'titles'
  | 'placeholders'
  | 'forerverTxt'
  | 'foreverDate'
  | 'minDate'
  | 'maxDate'
  | 'cache'
> &
  React.RefAttributes<(props: ValidRangeProps) => JSX.Element>>;
export default _default;
