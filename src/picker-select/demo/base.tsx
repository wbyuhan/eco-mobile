import React, { useState } from 'react';

import { List } from 'antd-mobile';
import { PickerSelect } from 'eco-mobile';
import { createUseStyles } from '@wonder-ui/styles';

const styles = createUseStyles({
  root: {
    width: '375px',
    padding: '20px',
    boxSizing: 'border-box',
    background: '#fff',
    boxShadow: '0 3px 5px 0 #efefef',
  },
  content: {
    padding: '30px 20px 100px',
  },
});

interface Item {
  value: string;
  text: string;
}

const dataList: Item[] = [
  {
    value: '1',
    text: '中国工商银行',
  },
  {
    value: '2',
    text: '中国建设银行',
  },
  {
    value: '3',
    text: '中国工商银行',
  },
  {
    value: '4',
    text: '中国银行',
  },
];

export default () => {
  const s = styles();

  const [visible, setVisible] = useState<boolean>(false);
  const [value, setValue] = useState<string>();
  const [text, setText] = useState<string>();

  // 关闭
  const onCancel = () => {
    setVisible(val => !val);
  };

  // 选择
  const onOk = (item: Item) => {
    setValue(item.value);
    setText(item.text);
    onCancel();
  };

  return (
    <div className={s.root}>
      <List>
        <List.Item
          extra={text || '请选择'}
          arrow="horizontal"
          onClick={onCancel}
        >
          所选银行
        </List.Item>
      </List>
      <PickerSelect
        title="我是标题"
        visible={visible}
        value={value}
        onOk={onOk}
        onCancel={onCancel}
        dataList={dataList}
      />
    </div>
  );
};
