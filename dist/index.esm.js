import 'antd-mobile/lib/toast/style/css';
import _Toast from 'antd-mobile/lib/toast';
import React, { useRef, useState } from 'react';
import classnames from 'classnames';
import WxImageViewer from 'react-wx-images-viewer';
import { createStyles, withStyles } from '@wonder-ui/styles';

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

var iconLoading =
  'data:image/png;base64,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';
var iconRemove =
  'data:image/png;base64,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';

// const iconLoading = require('../assets/icon-loading.png');
// const iconLoading2 = require('../assets/2.png');

var styles = createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  hidden: {
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
    backgroundImage: 'url('.concat(iconLoading, ')'),
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
    s = props.classes,
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
      _Toast.info(
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
            return _Toast.info(
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
      className: s.hidden,
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

var index = withStyles(styles)(ImagePicker);

// const iconLoading = require('../assets/icon-loading.png');
// const iconLoading2 = require('../assets/2.png');

var styles$1 = createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  hidden: {
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
    backgroundImage: 'url('.concat(iconLoading, ')'),
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

var noon$1 = function noon() {};

var ImagePicker$1 = function ImagePicker(props) {
  var _props$filesList = props.filesList,
    filesList = _props$filesList === void 0 ? [] : _props$filesList,
    s = props.classes,
    _props$max = props.max,
    max = _props$max === void 0 ? 1 : _props$max,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? noon$1 : _props$onChange,
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
    onFail = _props$onFail === void 0 ? noon$1 : _props$onFail;
  var ref = useRef(null);
  var refFilesList = useRef(filesList);
  var urlList = [];
  refFilesList.current.forEach(function(item) {
    if (item.url) {
      urlList.push(item.url);
    }
  });

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
      _Toast.info(
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
            return _Toast.info(
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
      className: s.hidden,
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

var index$1 = withStyles(styles$1)(ImagePicker$1);

export { index as ImagePicker, index$1 as ValidRange };
