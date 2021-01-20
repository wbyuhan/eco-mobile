import React, { useState, useEffect } from 'react';
import { List, DatePicker, Flex, Toast } from 'antd-mobile';
import classnames from 'classnames';
import { withStyles, ClassKeysOfStyles } from '@wonder-ui/styles';
import { formatDate, judeDate } from '@/utils/tools';

import styles from './styles';

const { Item } = List;

const noon = () => {};

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

const ValidRange = (props: ValidRangeProps) => {
  const {
    classes: s = {},
    value = [],
    onChange = noon,
    labels = ['证件起始日期', '证件终止日期'],
    titles = ['起始日期', '终止日期'],
    placeholders = ['请选择起始日期', '请选择终止日期'],
    forerverTxt = '长期',
    foreverDate = '9999-12-31',
    minDate = new Date(1980, 0, 1, 23, 59, 59),
    maxDate = new Date(2060, 11, 30, 23, 59, 59),
    cache = true,
  } = props;

  const [check, setCheck] = useState<boolean>(false);
  const [cacheVal, setcacheVal] = useState<string>();

  // 监听日期
  useEffect(() => {
    setCheck(value[1] === foreverDate);
    if (cache && value[1] && value[1] !== foreverDate) {
      setcacheVal(value[1]);
    }
  }, [value[1], foreverDate]);

  // 切换
  const onCheckHandle = () => {
    const arr = [value[0], check ? (cacheVal ? cacheVal : '') : foreverDate];
    const type = check ? 'unCheck' : 'check';
    onChange(arr, type);
    setCheck(val => !val);
  };

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
      <List>
        <div className={classnames({ [s.dateValue as string]: value[0] })}>
          <DatePicker
            mode="date"
            title={titles[0]}
            extra={placeholders[0]}
            value={judeDate(value[0])}
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
              [s.dateValue as string]: value[1] && value[1] !== foreverDate,
            })}
          >
            <DatePicker
              mode="date"
              title={titles[1]}
              extra={placeholders[1]}
              value={value[1] === foreverDate ? undefined : judeDate(value[1])}
              onChange={date => onChangeHandle(date, 'end')}
              minDate={minDate}
              maxDate={maxDate}
            >
              <Item className={s.itemEnd} arrow="horizontal">
                {labels[1]}{' '}
              </Item>
            </DatePicker>
          </div>
          <Flex className={s.forerverBox} onClick={onCheckHandle}>
            <i
              className={classnames(s.iconCheck, {
                [s.iconChecked as string]: check,
              })}
            />
            <span>{forerverTxt}</span>
          </Flex>
        </Flex>
      </List>
    </div>
  );
};

export default withStyles(styles)(ValidRange);
