import React, { useRef, useState } from 'react';
import classnames from 'classnames';
import WxImageViewer from 'react-wx-images-viewer';
import { Toast } from 'antd-mobile';
import { createUseStyles } from '@wonder-ui/styles';

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter))
    return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

var iconRemove = require('../assets/icon-remove.png');

var iocnLoading = require('../assets/icon-loading.png');

var useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    display: 'none',
  },
  imgBox: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '5px',
    margin: '0 8px 8px 0',
  },
  img: {
    display: 'block',
    boxSizing: 'border-box',
  },
  errorTip: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#d56161',
    fontSize: '12px',
    border: '1px solid #d56161',
    boxSizing: 'border-box',
    borderRadius: '5px',
    padding: '0 8px',
    wordBreak: 'keep-all',
    textAlign: 'center',
  },
  iconRemove: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 99,
    backgroundImage: 'url('.concat(iconRemove, ')'),
    backgroundSize: '100% 100%',
  },
  parent: {
    overflow: 'hidden',
  },
  name: {
    textAlign: 'center',
    wordBreak: 'break-all',
    marginBottom: '10px',
    color: '#999',
    fontSize: '12px',
  },
  childrenEle: {
    position: 'relative',
    borderRadius: '5px',
    boxSizing: 'border-box',
    '&:before': {
      content: '""',
      width: '30px',
      height: '4px',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#ccc',
    },
    '&:after': {
      content: '""',
      width: '4px',
      height: '30px',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#ccc',
    },
  },
  defaultDashed: {
    border: '1px dashed #ccc',
  },
  defaultBackGround: {
    background: '#e8f1fc',
  },
  defaultBorder: {
    border: '1px solid #ddd',
  },
  loadingBox: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 100,
    background: 'rgba(0,0,0,.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    width: '35px',
    height: '35px',
    backgroundImage: 'url('.concat(iocnLoading, ')'),
    backgroundSize: '100% 100%',
    animation: '$myRound 1s linear infinite',
  },
  '@keyframes myRound': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
});

var noon = function noon() {};

var ImagePicker = function ImagePicker(props) {
  var _props$filesList = props.filesList,
    filesList = _props$filesList === void 0 ? [] : _props$filesList,
    _props$max = props.max,
    max = _props$max === void 0 ? 1 : _props$max,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? noon : _props$onChange,
    _props$accept = props.accept,
    accept = _props$accept === void 0 ? 'image/*' : _props$accept,
    multiple = props.multiple,
    _props$width = props.width,
    width = _props$width === void 0 ? '80px' : _props$width,
    _props$height = props.height,
    height = _props$height === void 0 ? '80px' : _props$height,
    _props$config = props.config,
    config = _props$config === void 0 ? ['defaultBorder'] : _props$config,
    children = props.children,
    _props$mode = props.mode,
    mode = _props$mode === void 0 ? 'fill' : _props$mode,
    size = props.size,
    _props$onUpload = props.onUpload,
    onUpload = _props$onUpload === void 0 ? null : _props$onUpload,
    _props$onFail = props.onFail,
    onFail = _props$onFail === void 0 ? noon : _props$onFail;
  var ref = useRef(null);
  var refFilesList = useRef(filesList);
  var urlList = [];
  refFilesList.current.forEach(function(item) {
    if (item.url) {
      urlList.push(item.url);
    }
  });
  var s = useStyles();

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setOpen = _useState2[1];

  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    index = _useState4[0],
    setIndex = _useState4[1]; // 图片处理

  var parseFile = function parseFile(file, index) {
    return new Promise(function(resolve, reject) {
      var reader = new FileReader();

      reader.onload = function(e) {
        var dataURL = e.target.result;

        if (!dataURL) {
          reject('Fail to get the '.concat(index, ' image'));
          return;
        }

        resolve({
          url: dataURL,
          file: file,
        });
      };

      reader.readAsDataURL(file);
    });
  }; // 图片改变

  var onChangeHandle = function onChangeHandle(e) {
    var fileSelectorEl = e.target;
    var files = fileSelectorEl.files;

    if (!files || !files.length) {
      return (fileSelectorEl.value = '');
    }

    console.log('files', files);
    var index = refFilesList.current.length;
    var restNum = max - refFilesList.current.length;

    if (files.length > restNum) {
      Toast.info(
        '\u56FE\u7247\u6700\u591A\u4E0D\u8D85\u8FC7'.concat(max, '\u5F20'),
      );
    }

    var restFileList = Array.from(files).slice(0, restNum);
    var imageParsePromiseList = [];

    for (var i = 0; i < restFileList.length; i++) {
      imageParsePromiseList.push(parseFile(restFileList[i], i));
    }

    Promise.all(imageParsePromiseList)
      .then(function(imageItems) {
        if (onUpload) {
          imageItems.forEach(function(item) {
            return (item.loading = true);
          });
        }

        var filterList = imageItems.filter(function(item) {
          console.log('item.size', item.file.size);

          if (size && item.file.size > size * 1024 * 1024) {
            return Toast.info(
              '\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7'.concat(
                size,
                'M',
              ),
            );
          }

          return item;
        });
        refFilesList.current = refFilesList.current.concat(filterList);
        onChange(refFilesList.current);

        if (onUpload) {
          var _loop = function _loop(_i) {
            var item = refFilesList.current[_i];

            if (_i >= index) {
              onUpload(item.file)
                .then(function(res) {
                  refFilesList.current[_i] = Object.assign(
                    {},
                    refFilesList.current[_i],
                    res,
                    {
                      loading: false,
                    },
                  );
                  refFilesList.current = _toConsumableArray(
                    refFilesList.current,
                  );
                  setTimeout(function() {
                    onChange(refFilesList.current);
                  }, 10);
                })
                .catch(function(err) {
                  refFilesList.current[_i] = {
                    url: '',
                    loading: false,
                    errorTip: err || '上传失败，请重试',
                  };
                  refFilesList.current = _toConsumableArray(
                    refFilesList.current,
                  );
                  setTimeout(function() {
                    onChange(refFilesList.current);
                  }, 10);
                });
            }
          };

          for (var _i = 0; _i < refFilesList.current.length; _i++) {
            _loop(_i);
          }
        }

        fileSelectorEl.value = '';
      })
      .catch(function(error) {
        onFail(error);
        fileSelectorEl.value = '';
      });
  }; // 选择图片

  var inputClick = function inputClick() {
    ref && ref.current && ref.current.click();
  }; // 删除图片

  var onRemove = function onRemove(index) {
    refFilesList.current.splice(index, 1);
    refFilesList.current = _toConsumableArray(refFilesList.current);
    onChange(refFilesList.current);
  }; // 预览图片

  var preview = function preview(index) {
    console.log('index', index);
    setIndex(index);
    onClose();
  }; // 关闭图片预览

  var onClose = function onClose() {
    return setOpen(function(val) {
      return !val;
    });
  };

  var configProp;

  (function(configProp) {
    configProp['defaultBorder'] = 'defaultBorder';
    configProp['defaultBackGround'] = 'defaultBackGround';
    configProp['defaultDashed'] = 'defaultDashed';
  })(configProp || (configProp = {}));

  var objectFitProp;

  (function(objectFitProp) {
    objectFitProp['fill'] = 'fill';
    objectFitProp['cover'] = 'cover';
    objectFitProp['contain'] = 'contain';
    objectFitProp['scale-down'] = 'scale-down';
  })(objectFitProp || (objectFitProp = {}));

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: s.root,
    },
    /*#__PURE__*/ React.createElement('input', {
      className: s.input,
      ref: ref,
      type: 'file',
      accept: accept,
      multiple: multiple,
      onChange: onChangeHandle,
    }),
    filesList &&
      filesList.length > 0 &&
      filesList.map(function(item, index) {
        var url = item.url,
          loading = item.loading,
          name = item.name,
          errorTip = item.errorTip;
        return /*#__PURE__*/ React.createElement(
          'div',
          {
            key: index,
            className: s.parent,
          },
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: s.imgBox,
            },
            url &&
              /*#__PURE__*/ React.createElement('img', {
                alt: '',
                className: classnames(
                  s.img,
                  _toConsumableArray(
                    config.map(function(todo) {
                      return s[todo];
                    }),
                  ),
                ),
                src: url,
                style: {
                  objectFit: mode,
                  width: width,
                  height: height,
                },
                onClick: function onClick() {
                  return preview(index);
                },
              }),
            errorTip &&
              /*#__PURE__*/ React.createElement(
                'div',
                {
                  className: s.errorTip,
                  style: {
                    width: width,
                    height: height,
                  },
                },
                errorTip,
              ),
            /*#__PURE__*/ React.createElement('i', {
              className: s.iconRemove,
              onClick: function onClick() {
                return onRemove(index);
              },
            }),
            loading &&
              /*#__PURE__*/ React.createElement(
                'div',
                {
                  className: s.loadingBox,
                },
                /*#__PURE__*/ React.createElement('i', {
                  className: s.loading,
                }),
              ),
          ),
          name &&
            /*#__PURE__*/ React.createElement(
              'div',
              {
                className: s.name,
                style: {
                  width: width,
                },
              },
              name,
            ),
        );
      }),
    filesList.length >= max
      ? null
      : /*#__PURE__*/ React.createElement(
          'div',
          {
            className: s.parent,
            onClick: inputClick,
          },
          children
            ? children
            : /*#__PURE__*/ React.createElement('div', {
                style: {
                  width: width,
                  height: height,
                },
                className: classnames(
                  s.childrenEle,
                  _toConsumableArray(
                    config.map(function(todo) {
                      return s[todo];
                    }),
                  ),
                ),
              }),
        ),
    isOpen &&
      /*#__PURE__*/ React.createElement(WxImageViewer, {
        onClose: onClose,
        index: index,
        urls: urlList,
      }),
  );
};

export { ImagePicker };
