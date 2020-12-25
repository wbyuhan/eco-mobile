import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import WxImageViewer from 'react-wx-images-viewer';
import { Toast } from 'antd-mobile';

import useStyles from './styles';

const noon = () => {};

interface Files {
  url: string; // 图片url
  loading?: boolean; // 图片是否加载中
  errorTip?: string; // 错误提示
  name?: string; // 图片名称
  [index: string]: any;
}

interface ImagePickerProps {
  filesList: Array<Files>; // 图片列表
  max?: number; // 图片最大个数
  onChange?: (arr: Array<Files>) => any; // 图片列表改变
  onUpload?: (file: any) => Promise<object | undefined>; // 图片上传方法
  accept?: string; // 选择的图片类型
  multiple?: boolean; // 是否多选
  width?: string; // 图片宽度，默认80px
  height?: string; // 图片高度，默认80px
  config?: string[]; // 图片的额外扩展项,defaultBackGround: 显示默认背景色, defaultDashed: 显示虚线边框, defaultBorder: 显示实线边框
  children?: React.ReactNode; // 选择图片元素，默认为+
  mode?: string; // 图片裁切类型, fill, cover, contain, scale-down
  size?: number; // 图片大小限制，单位: M
  onFail?: (e: any) => any;
}

const ImagePicker = (props: ImagePickerProps) => {
  const {
    filesList = [],
    max = 1,
    onChange = noon,
    accept = 'image/*',
    multiple,
    width = '80px',
    height = '80px',
    config = ['defaultBorder'],
    children,
    mode = 'fill',
    size,
    onUpload = null,
    onFail = noon,
  } = props;

  const ref = useRef(null);
  const refFilesList = useRef(filesList);

  const urlList: string[] = [];
  refFilesList.current.forEach(item => {
    if (item.url) {
      urlList.push(item.url);
    }
  });
  console.log('init refFilesList.current', refFilesList.current);

  const s = useStyles();

  const [isOpen, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  // 图片处理
  const parseFile = (file: any, index: number) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = e => {
        const dataURL = (e.target as any).result;
        if (!dataURL) {
          reject(`Fail to get the ${index} image`);
          return;
        }
        resolve({ url: dataURL, file });
      };
      reader.readAsDataURL(file);
    });
  };

  // 图片改变
  const onChangeHandle = (e: any) => {
    const fileSelectorEl = e.target;
    const { files } = fileSelectorEl;
    if (!files || !files.length) {
      return (fileSelectorEl.value = '');
    }
    console.log('files', files);
    const index = refFilesList.current.length;
    const restNum = max - refFilesList.current.length;
    const restFileList = Array.from(files).slice(0, restNum);
    const imageParsePromiseList = [];
    for (let i = 0; i < restFileList.length; i++) {
      imageParsePromiseList.push(parseFile(restFileList[i], i));
    }
    Promise.all(imageParsePromiseList)
      .then((imageItems: any[]) => {
        if (onUpload) {
          imageItems.forEach((item: Files) => (item.loading = true));
        }
        const filterList = imageItems.filter((item: Files) => {
          console.log('item.size', item.file.size);
          if (size && item.file.size > size * 1024 * 1024) {
            return Toast.info(`图片大小不能超过${size}M`);
          }
          return item;
        });
        refFilesList.current = refFilesList.current.concat(filterList);
        onChange(refFilesList.current);
        if (onUpload) {
          for (let i = 0; i < refFilesList.current.length; i++) {
            const item = refFilesList.current[i];
            if (i >= index) {
              onUpload(item.file)
                .then((res: any) => {
                  refFilesList.current[i] = Object.assign(
                    {},
                    refFilesList.current[i],
                    res,
                    { loading: false },
                  );
                  refFilesList.current = [...refFilesList.current];
                  setTimeout(() => {
                    onChange(refFilesList.current);
                  }, 10);
                })
                .catch(err => {
                  refFilesList.current[i] = {
                    url: '',
                    loading: false,
                    errorTip: err || '上传失败，请重试',
                  };
                  refFilesList.current = [...refFilesList.current];
                  setTimeout(() => {
                    onChange(refFilesList.current);
                  }, 10);
                });
            }
          }
        }
        fileSelectorEl.value = '';
      })
      .catch(error => {
        onFail(error);
        fileSelectorEl.value = '';
      });
  };

  // 选择图片
  const inputClick = () => {
    ref && ref.current && ref.current.click();
  };

  // 删除图片
  const onRemove = (index: number) => {
    refFilesList.current.splice(index, 1);
    refFilesList.current = [...refFilesList.current];
    onChange(refFilesList.current);
  };

  // 预览图片
  const preview = (index: number) => {
    console.log('index', index);
    setIndex(index);
    onClose();
  };

  // 关闭图片预览
  const onClose = () => setOpen(val => !val);

  return (
    <div className={s.root}>
      <input
        className={s.input}
        ref={ref}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={onChangeHandle}
      />
      {filesList &&
        filesList.length > 0 &&
        filesList.map((item: Files, index: number) => {
          const { url, loading, name, errorTip } = item;
          return (
            <div key={index} className={s.parent}>
              <div className={s.imgBox}>
                {url && (
                  <img
                    alt=""
                    className={classnames(s.img, [
                      ...config.map((todo: string) => {
                        return s[todo];
                      }),
                    ])}
                    src={url}
                    style={{ objectFit: mode, width, height }}
                    onClick={() => preview(index)}
                  />
                )}
                {errorTip && (
                  <div className={s.errorTip} style={{ width, height }}>
                    {errorTip}
                  </div>
                )}
                <i className={s.iconRemove} onClick={() => onRemove(index)} />
                {loading && (
                  <div className={s.loadingBox}>
                    <i className={s.loading} />
                  </div>
                )}
              </div>
              {name && (
                <div className={s.name} style={{ width }}>
                  {name}
                </div>
              )}
            </div>
          );
        })}
      {filesList.length >= max ? null : (
        <div className={s.parent} onClick={inputClick}>
          {children ? (
            children
          ) : (
            <div
              style={{ width, height }}
              className={classnames(s.childrenEle, [
                ...config.map((todo: string) => {
                  return s[todo];
                }),
              ])}
            />
          )}
        </div>
      )}
      {isOpen && (
        <WxImageViewer onClose={onClose} index={index} urls={urlList} />
      )}
    </div>
  );
};

export default ImagePicker;
