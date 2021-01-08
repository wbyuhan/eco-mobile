import React, { useState } from 'react';

import { ImagePicker } from 'eco-mobile';

interface Files {
  url: string | null; // 图片url
  preview?: string | null; // 预览图
  loading?: boolean | null; // 图片是否加载中
  errorTip?: string | null; // 错误提示
  name?: string | null; // 图片名称
  [index: string]: any;
}

export default () => {
  const [filesList, setFilesList] = useState<Array<Files>>([]);

  // 数组改变
  const onChange = (arr: Array<Files>) => {
    console.log('onChange', arr);
    arr.forEach((item, index) => (item.name = `示例图${index}`));
    setFilesList(arr);
  };

  // 实时上传方法
  const onUpload = (item: any): Promise<object | undefined> => {
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

  return (
    <ImagePicker
      filesList={filesList}
      onChange={onChange}
      multiple
      max={10}
      mode="cover"
      onUpload={onUpload}
    />
  );
};
