import React, { useState } from 'react';

import { WhiteSpace, Flex, WingBlank } from 'antd-mobile';
import { ImagePicker } from 'eco-mobile';

interface Files {
  url: string; // 图片url
  preview?: string; // 预览图
  loading?: boolean; // 图片是否加载中
  errorTip?: string; // 错误提示
  name?: string; // 图片名称
  [index: string]: any;
}

export default () => {
  const [filesList, setFilesList] = useState<Array<Files>>([]);

  // 数组改变
  const onChange = (arr: Array<Files>) => {
    setFilesList(arr);
  };

  return (
    <Flex direction="row" wrap="wrap">
      <WingBlank>
        <ImagePicker filesList={filesList} onChange={onChange} />
        <WhiteSpace />
      </WingBlank>
      <WingBlank>
        <ImagePicker
          filesList={filesList}
          onChange={onChange}
          config={['defaultBackGround']}
        />
        <WhiteSpace />
      </WingBlank>
      <WingBlank>
        <ImagePicker
          showRemove={false}
          filesList={filesList}
          onChange={onChange}
          config={['defaultDashed']}
        />
        <WhiteSpace />
      </WingBlank>
      <WingBlank>
        <ImagePicker
          filesList={filesList}
          onChange={onChange}
          config={['defaultBorder', 'defaultBackGround']}
        />
        <WhiteSpace />
      </WingBlank>
      <WingBlank>
        <ImagePicker
          filesList={filesList}
          onChange={onChange}
          config={['defaultDashed', 'defaultBackGround']}
        />
        <WhiteSpace />
      </WingBlank>
    </Flex>
  );
};
