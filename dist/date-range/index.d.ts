import React from 'react';
import { ClassKeysOfStyles } from '@wonder-ui/core';
import styles from './styles';
interface DateRangeProps {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  label?: string;
  tip?: string;
  value?: Array<string | undefined>;
  onChange?: (value: Array<string | undefined>, type: string) => void;
  titles?: string[];
  placeholders?: string[];
  minDate?: Date;
  maxDate?: Date;
  splitText?: string;
}
declare const _default: React.ComponentType<Omit<DateRangeProps, 'classes'> &
  Partial<
    import('@wonder-ui/core').WithStylesProps<
      import('@wonder-ui/core').Styles<
        import('@wonder-ui/core').DefaultTheme,
        {},
        | 'root'
        | 'label'
        | 'tip'
        | 'dateBox'
        | 'splitText'
        | 'datePicker'
        | 'dateValue'
      >
    >
  > & {
    innerRef?: React.RefObject<any> | ((instance: any) => void) | undefined;
  }>;
export default _default;
