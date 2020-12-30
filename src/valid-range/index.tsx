import React, { useState, useEffect } from 'react';
import { List, DatePicker, Flex } from 'antd-mobile';
import classnames from 'classnames';
import { withStyles, ClassKeysOfStyles } from '@wonder-ui/styles';
import { formatDate } from '@/utils/tools';

import styles from './styles';

const { Item } = List;

const noon = () => {};

interface ValidRangeProps {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  values?: Array<string | undefined>;
  onChange?: (values: Array<string | undefined>, type?: string) => any;
  labels?: string[];
  titles?: string[];
  placeholders?: string[];
  forerverTxt?: string;
  foreverDate?: string;
  minDate?: Date;
  maxDate?: Date;
}

const ValidRange = (props: ValidRangeProps) => {
  const {
    classes: s = {},
    values = [],
    onChange = noon,
    labels = ['证件起始日期:', '证件终止日期:'],
    titles = ['起始日期', '终止日期'],
    placeholders = ['请选择起始日期', '请选择终止日期'],
    forerverTxt = '长期',
    foreverDate = '9999-12-31',
    minDate = new Date(1980, 0, 1, 23, 59, 59),
    maxDate = new Date(2100, 11, 30, 23, 59, 59),
  } = props;

  const [check, setCheck] = useState<boolean>(false);

  // 监听日期
  useEffect(() => {
    setCheck(values[1] === foreverDate);
  }, [values[1], foreverDate]);

  // 转换时间
  const judeDate = (val: string | undefined) => {
    if (!val) return;
    return new Date(val);
  };

  // 切换
  const onCheckHandle = () => {
    const arr = [values[0], check ? '' : foreverDate];
    const type = check ? 'unCheck' : 'check';
    onChange(arr, type);
    setCheck(val => !val);
  };

  // 开始日期改变
  const onChangeHandle = (date: Date, type: string) => {
    const val = formatDate(date);
    let arr = [];
    if (type === 'start') {
      arr = [val, values[1]];
    } else {
      arr = [values[0], val];
    }
    onChange(arr, type);
  };

  return (
    <div className={s.root}>
      <List>
        <div className={classnames({ [s.dateValue as string]: values[0] })}>
          <DatePicker
            mode="date"
            title={titles[0]}
            extra={placeholders[0]}
            value={judeDate(values[0])}
            onChange={date => onChangeHandle(date, 'start')}
            minDate={minDate}
            maxDate={maxDate}
          >
            <Item arrow="horizontal">{labels[0]}</Item>
          </DatePicker>
        </div>
        <Flex>
          <div
            className={classnames(s.datePicker, {
              [s.dateValue as string]: values[1] && values[1] !== foreverDate,
            })}
          >
            <DatePicker
              mode="date"
              title={titles[1]}
              extra={placeholders[1]}
              value={
                values[1] === foreverDate ? undefined : judeDate(values[1])
              }
              onChange={date => onChangeHandle(date, 'end')}
              minDate={minDate}
              maxDate={maxDate}
            >
              <Item arrow="horizontal">{labels[1]} </Item>
            </DatePicker>
          </div>
          <Flex className={s.forerverBox}>
            <i
              className={classnames(s.iconCheck, {
                [s.iconChecked as string]: check,
              })}
              onClick={onCheckHandle}
            />
            <span>{forerverTxt}</span>
          </Flex>
        </Flex>
      </List>
    </div>
  );
};

export default withStyles(styles)(ValidRange);
