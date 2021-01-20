/**
 * compact: true
 */
import React, { useState } from 'react';
import { createUseStyles } from '@wonder-ui/styles';

import { Flex } from 'antd-mobile';
import { ImagePicker } from 'eco-mobile';

const iconIdCard = require('../../assets/images/icon-idcard.png');
const iconIdCardBack = require('../../assets/images/icon-idcard-back.png');
const iconPhoto = require('../../assets/images/icon-photo.png');

const styles = createUseStyles({
  root: {
    display: 'flex',
  },
  item: {
    flex: 1,
    '&:first-child': {
      marginRight: '10px',
    },
  },
  children: {
    background: '#e8f1fc',
    height: '90px',
    position: 'relative',
  },
  img: {
    width: '89px',
    height: '57px',
  },
  iconPhoto: {
    width: '32px',
    height: '28px',
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
  },
});

interface Files {
  url: string; // 图片url
  preview?: string; // 预览图
  loading?: boolean; // 图片是否加载中
  errorTip?: string; // 错误提示
  name?: string; // 图片名称
  [index: string]: any;
}

export default () => {
  const s = styles();

  const [idCard, setIdCard] = useState<Array<Files>>([
    {
      name: '人像',
      url: '',
    },
  ]);
  const [idCardBack, setIdCardBack] = useState<Array<Files>>([
    {
      name: '国徽',
      url: '',
    },
  ]);

  // 实时上传方法
  const onUpload = (item: any): Promise<object | undefined> => {
    console.log('onUpload', item);
    return new Promise((resolve, reject) => {
      const rate = Math.random();
      setTimeout(() => {
        if (rate > 0.3) {
          // 成功
          return resolve({ fssid: rate.toString().slice(-6) });
        }
        reject('上传失败');
      }, 3000);
    });
  };

  // 人像面改变
  const onChangeIdCard = (arr: Array<Files>) => {
    console.log('onChangeIdCard', arr);
    setIdCard(arr);
  };

  // 国徽面改变
  const onChangeIdCardBack = (arr: Array<Files>) => {
    setIdCardBack(arr);
  };

  return (
    <div className={s.root}>
      <div className={s.item}>
        <ImagePicker
          filesList={idCard}
          onChange={onChangeIdCard}
          mode="cover"
          width="100%"
          height="90px"
          onUpload={onUpload}
        >
          <Flex className={s.children} justify="center">
            <img className={s.img} alt="" src={iconIdCard} />
            <img alt="" className={s.iconPhoto} src={iconPhoto} />
          </Flex>
        </ImagePicker>
      </div>
      <div className={s.item}>
        <ImagePicker
          filesList={idCardBack}
          onChange={onChangeIdCardBack}
          mode="cover"
          width="100%"
          height="90px"
          onUpload={onUpload}
        >
          <Flex className={s.children} justify="center">
            <img className={s.img} alt="" src={iconIdCardBack} />
            <img alt="" className={s.iconPhoto} src={iconPhoto} />
          </Flex>
        </ImagePicker>
      </div>
    </div>
  );
};
