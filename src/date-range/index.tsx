import React from 'react';
import { List, Flex, Toast } from 'antd-mobile';
import { DatePicker } from '@wonder-ui/core';
import classnames from 'classnames';
import { withStyles, ClassKeysOfStyles } from '@wonder-ui/styles';
import { formatDate, judeDate } from '@/utils/tools';

import styles from './styles';

const { Item } = List;

const noon = () => {};

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

const DateRange = (props: DateRangeProps) => {
  const {
    classes: s = {},
    label = '自定义日期',
    tip = '时间范围最长30天',
    value = [],
    onChange = noon,
    titles = ['起始日期', '终止日期'],
    placeholders = ['请选择起始日期', '请选择终止日期'],
    minDate = new Date(1980, 0, 1, 23, 59, 59),
    maxDate = new Date(2060, 11, 30, 23, 59, 59),
    splitText = '至',
  } = props;

  // 日期改变
  const onChangeHandle = (date: Date, type: string) => {
    const val = formatDate(date);
    let arr = [];
    if (type === 'start') {
      if (val > (value[1] as string)) {
        return Toast.info(`${titles[0]}不能大于${titles[1]}`);
      }
      arr = [val, value[1]];
    } else {
      if (val < (value[0] as string)) {
        return Toast.info(`${titles[1]}不能小于${titles[0]}`);
      }
      arr = [value[0], val];
    }
    onChange(arr, type);
  };

  return (
    <div className={s.root}>
      <Flex justify="between">
        <span className={s.label}>{label}</span>
        <span className={s.tip}>{tip}</span>
      </Flex>
      <Flex className={s.dateBox}>
        <div
          className={classnames(s.datePicker, {
            [s.dateValue as string]: value[0],
          })}
        >
          <DatePicker
            mode="date"
            title={titles[0]}
            extra={placeholders[0]}
            value={judeDate(value[0])}
            onChange={date => onChangeHandle(date, 'start')}
            minDate={minDate}
            maxDate={maxDate}
          >
            <Item arrow="down" />
          </DatePicker>
        </div>
        <span className={s.splitText}>{splitText}</span>
        <div
          className={classnames(s.datePicker, {
            [s.dateValue as string]: value[1],
          })}
        >
          <DatePicker
            mode="date"
            title={titles[1]}
            extra={placeholders[1]}
            value={judeDate(value[1])}
            onChange={date => onChangeHandle(date, 'end')}
            minDate={minDate}
            maxDate={maxDate}
          >
            <Item arrow="down" />
          </DatePicker>
        </div>
      </Flex>
    </div>
  );
};

export default withStyles(styles)(DateRange);
