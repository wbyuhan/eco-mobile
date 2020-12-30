import React from 'react';
import { ClassKeysOfStyles } from '@wonder-ui/styles';
import styles from './styles';
interface DateRangeProps {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  label?: string;
  tip?: string;
  values?: Array<string | undefined>;
  onChange?: (values: Array<string | undefined>, type?: string) => any;
  titles?: string[];
  placeholders?: string[];
  minDate?: Date;
  maxDate?: Date;
  splitTxt?: string;
}
declare const _default: React.ForwardRefExoticComponent<Pick<
  DateRangeProps & {
    theme?: unknown;
  } & import('@wonder-ui/styles/dist/withStyles').StyledComponentProps<
      unknown,
      | 'root'
      | 'label'
      | 'tip'
      | 'dateBox'
      | 'splitTxt'
      | 'datePicker'
      | 'dateValue'
    >,
  | 'label'
  | 'tip'
  | 'splitTxt'
  | 'theme'
  | 'classes'
  | 'values'
  | 'onChange'
  | 'titles'
  | 'placeholders'
  | 'minDate'
  | 'maxDate'
> &
  React.RefAttributes<(props: DateRangeProps) => JSX.Element>>;
export default _default;
