import React, { useCallback, useState, useEffect, useRef } from 'react';

import { withStyles, ClassKeysOfStyles } from '@wonder-ui/styles';
import Empty from '../empty';
import DrawerModal from '../drawer-modal';

import styles from './styles';
const noon = () => {};

interface Item {
  value: string;
  text: string;
}

interface Props {
  classes?: Partial<ClassKeysOfStyles<typeof styles>>;
  visible?: boolean;
  dataList?: Item[];
  onOk?: (item: Item) => void;
  onCancel?: () => void;
  title?: string | React.ReactElement;
  value?: string | null;
  showSearchBox?: boolean;
  placeholder?: string;
  height?: number | string;
}

const PickerSelect = (props: Props) => {
  const {
    classes: s = {},
    visible,
    dataList = [],
    onOk = noon,
    onCancel = noon,
    title,
    value,
    showSearchBox,
    placeholder = '请输入',
    height = 300,
  } = props;
  let timeeInput = useRef<any>(null);

  const [search, setSearch] = useState<string>();
  const [filterList, setFilterList] = useState<Item[]>([]);

  // 搜索框改变
  const onChange = useCallback(
    e => {
      console.log('onChange', e.target.value);
      const val = e.target.value.trim();
      setSearch(val);
      const newList = dataList.filter((item: Item) => {
        return item.text.indexOf(val) > -1;
      });
      setFilterList(newList);
    },
    [dataList],
  );

  useEffect(() => {
    setFilterList(dataList);
  }, [dataList]);

  // 聚焦
  const onFocus = useCallback(() => {
    if (timeeInput.current) {
      clearTimeout(timeeInput.current);
      timeeInput.current = null;
    }
  }, []);

  // input失去焦点
  const onBlur = useCallback(() => {
    timeeInput.current = setTimeout(() => {
      window.scroll(0, 0);
    }, 200);
  }, []);

  return (
    <DrawerModal
      title={<p style={{ fontSize: '15px' }}>{title}</p>}
      visible={visible}
      anchor="bottom"
      onCancel={onCancel}
    >
      <div className={s.root}>
        {showSearchBox && (
          <div className={s.searhInputBox}>
            <div className="search-input-content">
              <i />
              <input
                value={search}
                placeholder={placeholder}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            </div>
          </div>
        )}
        <div className={s.pickerContent} style={{ height: `${height}px` }}>
          {filterList.length > 0 ? (
            filterList.map((item, i) => {
              return (
                <li // eslint-disable-line
                  key={item.value}
                  className={value === item.value ? 'picker-li-active' : ''}
                  onClick={() => onOk(item)}
                >
                  <span>{item.text}</span>
                  {value === item.value && <i />}
                </li>
              );
            })
          ) : (
            <Empty
              text={dataList.length === 0 ? '暂无数据' : '没有搜索到该银行'}
            />
          )}
        </div>
      </div>
    </DrawerModal>
  );
};

export default withStyles(styles)(PickerSelect);
