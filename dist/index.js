'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('antd-mobile/lib/toast/style/css');
var _Toast = require('antd-mobile/lib/toast');
var React = require('react');
var styles$3 = require('@wonder-ui/styles');
var classnames = require('classnames');
var WxImageViewer = require('react-wx-images-viewer');
require('antd-mobile/lib/flex/style/css');
var _Flex = require('antd-mobile/lib/flex');
require('antd-mobile/lib/date-picker/style/css');
var _DatePicker = require('antd-mobile/lib/date-picker');
require('antd-mobile/lib/list/style/css');
var _List = require('antd-mobile/lib/list');
var moment = require('moment');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e };
}

var _Toast__default = /*#__PURE__*/ _interopDefaultLegacy(_Toast);
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
var classnames__default = /*#__PURE__*/ _interopDefaultLegacy(classnames);
var WxImageViewer__default = /*#__PURE__*/ _interopDefaultLegacy(WxImageViewer);
var _Flex__default = /*#__PURE__*/ _interopDefaultLegacy(_Flex);
var _DatePicker__default = /*#__PURE__*/ _interopDefaultLegacy(_DatePicker);
var _List__default = /*#__PURE__*/ _interopDefaultLegacy(_List);
var moment__default = /*#__PURE__*/ _interopDefaultLegacy(moment);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function() {
    var self = this,
      args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAA1VBMVEUAAAAAAAAAAAAAAADR0dEAAAAfHx8LCwsAAAAAAAAAAAAAAAAAAAAAAAAAAADf3997e3szMzPMzMy1tbVISEgAAADo6OiYmJjHx8e7u7tra2tVVVUAAAAAAADz8/Ovr6+np6eMjIz5+fnj4+OSkpJEREQAAAAAAADs7OzBwcGioqJnZ2daWlqFhYUAAAAAAAAAAAAAAAAAAAD29vbV1dV2dnbZ2dmcnJwAAAAAAAAAAAAAAAAAAAD8/PxycnI5OTmrq6uJiYleXl4sLCwaGhoAAAD///+V/CgOAAAARnRSTlOnpgAI6TavqoqgkkJyXz7wybTo3rki9NPl4MS9hG3529nO/fLRuC0U9uLWwr7MfGhQKA/668ft1Jp4Wkob/sW12s3Asq1V68RYCwAABsBJREFUeNrt3WtX2kAQxvHJhGAIBNGCV7BqBbwVAVvvtrW2+f4fqWovZgy42ezOcTOnz+nb9viD5G/IiRU8IfsPcW3/Ia4NLjwZg8iTMTmQ0JMx6HoyBpeejEHDkzE48WQMYk/GYOzJGNQ9GYPAkzGY6P8VF5b9qm6kQHwpEKxJgURSICMpkBMpkJ9SIHUpkIEUyFAKBGtSIKEUSEMK5EoKpCkF0pEC8aVAMJICaUiBjKVABlIgQykQjKRAGnYg58nzKqtQbF8Pk+e904SM7UCOk/RahRwLZ0lq55qQgR0I7BDJZhHIQULeEE2IbwkC20lqK/faDPoPLC/oQrBrCUJf0Ioug76lH5ZAGxLbglTP6KGht40ktd1j0IcEtiDQ3k9S00tX+5TGogBkag0CR0l6nzUc1Q/0NSgCwdAaBO6S1G410rVMj8pikLggRJ2ual7HOxqsgpDAIoSmazmnYzUTrEIQ3yak+kk/XS0SrE0oCsGRRQj0tdO1mUlEUcjYAKJK1xdQ7X6Fyg0gHasQ+EiOlDYoRo7F92ACwcgqBA7JufsDXt06DZYZJDaAqL+4/OjFJTCDBJYhVXq45D0MTzfBEII1A4g6XXswb98zwTKENEwg6nRtzPtou0W95pCmEUSdrj7M2sIiPQItQHwziDpdM2u0lqS2tmADgg1tiHm63meDZQ5p2odUK0lq3+Dl9pLUtjbBDsS3D4E+ufbYAbovmWBZgWDPEKJO1xH9aHtLg2UNEphC1N/uvqaPuxUaLHsQvDCFqC9AUl2q0GDZhMQcEJquNfLRlgTLImTCAqHp2iYfbUmw7EEwNIao0/WRfLQlwbIHuWaBwBHJ0/fMR9s9sA2ZMkCy6VqC+y0aLOsQ7DFAsumCMxosBsiACULTdaAKljkEQyYITRcNFgvkmgdC00WDxQPxa0wQONqd5dgDJgjGDBCaLhosNsgNA4SkiwaLD4I9BghJFwkWI2TCB6lWMsFihOCIDQJ7BLIOvJCADfI5oTvkhWCXCXK8lbzYR15IkweytJi83O4RKwRDDsjCWpLdSp8VUueAvE9mrVLlhGBoH7KazN46K6RuHdJK5u2QCaJ+S8yDdU4kdzwQdbiMg7VObwXdbjBCsGsTsrD88jGuCklXmxESWITQYO1XM7dLP1X5IHhpD0KD9fvl79N0MUIm1iCtmY9BbCTpbfNB8MQShAZrdc4jqXd8kKENCA0WfVToG5FssEHwpxqiH6z01mi62CAYWYC8o4/TUeQiTRcbpKmG6Adr/sMCB+YQvQQXD5bi8Y1tNkjHEHJ8Su7FKaU7XBC8MoIsfVDfizun6TKDaJ7vxYK1nOde136bCxKoIfrBovtE08UEwV5RCA3W7fyX+n6fpIsLMqwVhLRyH/ybNF1MEKzrQ2iw1Dn6QtPFBMk+/aQfrG9ad1I3eCDZg0s7WGuan7zaPBCs60PeaTz1m71+PKtyQLLl0gzWbhvUqy6SdDFBphdZiHmw6Pq7JF08EAy0IMe7Ra6fjmi6eCAYU4ilYNHd0feRBUJvc9kLFt02TRcPpJMbQp8n+wEaO6DpYoFgPQtRX5af9g1+4PiAAULvDtkMFt3XfZIuBgg5TewFS/HRd4cH0qkRiCJYilfU4B01gdCbKraCpT7HttosELxSQFqawVJXb50Hgo3XIZuV5+1VoeBalee1mCB+6Ln9v3BonPBCIBhIgeC1FAjGUiDYAxdmAYIjcGA2INMQ3n42IHgTwZvPCgQ7NdCcoxAcgObchPiIAejNTQji20tsQPynP03QmZOQP6uDxhyF+Ii+nsRRiAPviZ1qOXCezIOUrl32quVrfT9xEkI2qEGeOQpJvyedCHLMUQjZTQjquQnx6Z/pCJRzE5JZz3v7AdqYA7+eDNDKrj3NuQrBoOZpzVkIdkJPZ+5C0G94GnMYovfbJpyGYDP/ieI2BDtdL+cch2Du34rlPCTvb5NyH5Lz8CoBJN8FSykgGFx4qpUDglPl9XBJIIh1xbeU0kBw+PoVS3kgijelTBAcvnKmlAqCGETenJUMMv+KuHQQ7Fx6s1Y+CGJz1vFVRsjMnzEtJwSHmav7kkIQJy9OldJCEANyeV9iCGIzdceo1BDE+j9KySHPlNJDEJtP54oACGIw8jwREMRJTwgE8SauyYAg+tehDMjDBj0hEMTpdSgD8rBJfCED8rCgJwSC6DcbMiC/LTURkMcFcSQD8rDOeCQD8jA/iEMRkMdNg7grAvI4fzBuRBIgTxs+aiRAnuZ3mleNsFZ+yL93p/7zZBTVSg/5O/9mEtTH8UnjshtG0e9LtV/ecN8DtBa8vQAAAABJRU5ErkJggg==';

var styles = styles$3.createStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  justifyContent: {
    justifyContent: 'space-between',
  },
  hidden: {
    display: 'none',
  },
  imgBox: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '5px',
    boxSizing: 'border-box',
  },
  img: {
    display: 'block',
    boxSizing: 'border-box',
    borderRadius: '5px',
    width: '100%',
    height: '100%',
  },
  errorTip: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#d56161',
    fontSize: '12px',
    border: '1px solid #d56161',
    boxSizing: 'border-box',
    borderRadius: '5px',
    padding: '0 3px',
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
    margin: '0 8px 8px 0',
  },
  noMargin: {
    margin: '0 0 8px 0',
  },
  name: {
    textAlign: 'center',
    wordBreak: 'break-all',
    marginBottom: '10px',
    color: '#999',
    fontSize: '12px',
    lineHeight: 1.4,
    marginTop: '8px',
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
  var _props$classes = props.classes,
    s = _props$classes === void 0 ? {} : _props$classes,
    _props$filesList = props.filesList,
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
    disabledPreview = props.disabledPreview,
    onUpload = props.onUpload,
    _props$onFail = props.onFail,
    onFail = _props$onFail === void 0 ? noon : _props$onFail,
    onGetPreviewUrl = props.onGetPreviewUrl,
    resize = props.resize;
  var ref = React.useRef(null);
  var refDom = React.useRef(null);
  var refFilesList = React.useRef(filesList);
  var urlList = [];
  refFilesList.current.forEach(function(item) {
    if (item.preview) {
      urlList.push(item.preview);
    } else if (item.url) {
      urlList.push(item.url);
    }
  }); // 有效个数

  var validLength = React.useMemo(
    function() {
      var num = 0;

      for (var i = 0; i < filesList.length; i++) {
        var _filesList$i = filesList[i],
          url = _filesList$i.url,
          errorTip = _filesList$i.errorTip;

        if (url || errorTip) {
          num++;
        }
      }

      return num;
    },
    [filesList],
  );

  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setOpen = _useState2[1];

  var _useState3 = React.useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    index = _useState4[0],
    setIndex = _useState4[1];

  var _useState5 = React.useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    realHeight = _useState6[0],
    setRealHeight = _useState6[1]; // init

  React.useEffect(function() {
    var calcWidth = getComputedStyle(refDom.current).width;
    setRealHeight(calcWidth);
  }, []); // 图片处理

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
          file: file,
          url: dataURL,
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
    var restNum = max - validLength;

    if (files.length > restNum) {
      _Toast__default['default'].info(
        '\u56FE\u7247\u6700\u591A\u4E0D\u8D85\u8FC7'.concat(max, '\u5F20'),
      );
    }

    var restFileList = Array.from(files).slice(0, restNum);
    var imageParsePromiseList = [];

    for (var i = 0; i < restFileList.length; i++) {
      imageParsePromiseList.push(parseFile(restFileList[i], i));
    }

    refFilesList.current = refFilesList.current.filter(function(item) {
      return item.url || item.errorTip;
    }); // 过滤有效值

    var index = refFilesList.current.length;
    Promise.all(imageParsePromiseList)
      .then(function(imageItems) {
        if (typeof onUpload === 'function') {
          imageItems.forEach(function(item) {
            return (item.loading = true);
          });
        }

        var filterList = imageItems.filter(function(item) {
          console.log('item.size', item.file.size);

          if (size && item.file.size > size * 1024 * 1024) {
            return _Toast__default['default'].info(
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

        if (typeof onUpload === 'function') {
          var _loop = function _loop(_i) {
            var item = refFilesList.current[_i];

            if (_i >= index) {
              onUpload(item)
                .then(function(res) {
                  Object.assign(item, res, {
                    loading: false,
                  });
                  refFilesList.current = _toConsumableArray(
                    refFilesList.current,
                  );
                  setTimeout(function() {
                    return onChange(refFilesList.current);
                  }, 10);
                })
                .catch(function(err) {
                  Object.assign(item, {
                    url: '',
                    loading: false,
                    errorTip: err || '上传失败',
                  });
                  refFilesList.current = _toConsumableArray(
                    refFilesList.current,
                  );
                  setTimeout(function() {
                    return onChange(refFilesList.current);
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
    var ableDelete = true;

    for (var i = 0; i < refFilesList.current.length; i++) {
      var loading = refFilesList.current[i].loading;

      if (loading) {
        ableDelete = false;
        break;
      }
    }

    if (!ableDelete) {
      return _Toast__default['default'].info('图片上传中，请稍后操作');
    }

    refFilesList.current.splice(index, 1);
    refFilesList.current = _toConsumableArray(refFilesList.current);
    onChange(refFilesList.current);
  }; // 预览图片

  var onPreview = /*#__PURE__*/ (function() {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee(
        currentIndex,
        index,
      ) {
        var preview;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                if (!disabledPreview) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                if (
                  !(
                    !refFilesList.current[index].preview &&
                    typeof onGetPreviewUrl === 'function'
                  )
                ) {
                  _context.next = 9;
                  break;
                }

                _context.next = 5;
                return onGetPreviewUrl(index);

              case 5:
                preview = _context.sent;
                refFilesList.current[index].preview = preview;
                refFilesList.current = _toConsumableArray(refFilesList.current);
                onChange(refFilesList.current);

              case 9:
                console.log('currentIndex', currentIndex);
                setIndex(currentIndex);
                onClose();

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      }),
    );

    return function onPreview(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })(); // 关闭图片预览

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
  })(objectFitProp || (objectFitProp = {})); // 计算高度

  var calcHeight = resize ? realHeight : height; // 定义占位元素个数

  var spaceNum = 0;

  if (resize) {
    var rowNum = Math.floor(100 / parseFloat(width));

    if (filesList && filesList.length > 0 && rowNum > 1) {
      var restNum = filesList.length % rowNum;

      if (restNum >= 0 && restNum <= rowNum - 1) {
        spaceNum = rowNum - restNum - 1;

        if (filesList.length === max) {
          spaceNum += 1;
        }
      }
    }
  }

  console.log('spaceNum', spaceNum); // parent样式

  var classParent = classnames__default['default'](
    s.parent,
    _defineProperty(
      {},
      s.noMargin,
      max === 1 || filesList.length < 1 || resize,
    ),
  );
  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      className: classnames__default['default'](
        s.root,
        _defineProperty({}, s.justifyContent, resize),
      ),
    },
    /*#__PURE__*/ React__default['default'].createElement('input', {
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

        if (url || errorTip) {
          var currentArr = filesList.slice(0, index + 1);
          var errorNum = 0;

          for (var i = 0; i < currentArr.length; i++) {
            var _errorTip = currentArr[i].errorTip;

            if (_errorTip) {
              errorNum++;
            }
          }

          var currentIndex = index - errorNum;
          return /*#__PURE__*/ React__default['default'].createElement(
            'div',
            {
              key: index,
              className: classParent,
              style: {
                width: width,
              },
            },
            /*#__PURE__*/ React__default['default'].createElement(
              'div',
              {
                className: classnames__default['default'].apply(
                  void 0,
                  [s.imgBox].concat(
                    _toConsumableArray(
                      config.map(function(todo) {
                        return s[todo];
                      }),
                    ),
                  ),
                ),
                style: {
                  height: calcHeight,
                },
              },
              url &&
                /*#__PURE__*/ React__default['default'].createElement('img', {
                  alt: '',
                  className: s.img,
                  src: url,
                  style: {
                    objectFit: mode,
                  },
                  onClick: function onClick() {
                    return onPreview(currentIndex, index);
                  },
                }),
              errorTip &&
                /*#__PURE__*/ React__default['default'].createElement(
                  'div',
                  {
                    className: s.errorTip,
                  },
                  errorTip,
                ),
              /*#__PURE__*/ React__default['default'].createElement('i', {
                className: s.iconRemove,
                onClick: function onClick() {
                  return onRemove(index);
                },
              }),
              loading &&
                /*#__PURE__*/ React__default['default'].createElement(
                  'div',
                  {
                    className: s.loadingBox,
                  },
                  /*#__PURE__*/ React__default['default'].createElement('i', {
                    className: s.loading,
                  }),
                ),
            ),
            name &&
              /*#__PURE__*/ React__default['default'].createElement(
                'div',
                {
                  className: s.name,
                },
                name,
              ),
          );
        }
      }),
    validLength < max &&
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: classParent,
          style: {
            width: width,
          },
          ref: refDom,
          onClick: inputClick,
        },
        children
          ? children
          : /*#__PURE__*/ React__default['default'].createElement('div', {
              style: {
                height: calcHeight,
              },
              className: classnames__default['default'](
                s.childrenEle,
                _toConsumableArray(
                  config.map(function(todo) {
                    return s[todo];
                  }),
                ),
              ),
            }),
        max === 1 &&
          filesList[0] &&
          filesList[0].name &&
          /*#__PURE__*/ React__default['default'].createElement(
            'div',
            {
              className: s.name,
              style: {
                width: width,
              },
            },
            filesList[0].name,
          ),
      ),
    spaceNum > 0 &&
      new Array(spaceNum).fill(spaceNum).map(function(item, index) {
        return /*#__PURE__*/ React__default['default'].createElement('div', {
          key: index,
          className: classParent,
          style: {
            width: width,
          },
        });
      }),
    isOpen &&
      /*#__PURE__*/ React__default['default'].createElement(
        WxImageViewer__default['default'],
        {
          onClose: onClose,
          index: index,
          urls: urlList,
        },
      ),
  );
};

var index = styles$3.withStyles(styles)(ImagePicker);

/**
 * 格式化日期
 */

function formatDate(val) {
  var format =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : 'YYYY-MM-DD';
  return moment__default['default'](val).format(format);
} // 转换日期

var judeDate = function judeDate(val) {
  if (!val) return;
  return new Date(val);
};

var styles$1 = styles$3.createStyles({
  root: {
    '& .am-list': {
      '& .am-list-body': {
        '&:before': {
          display: 'none',
        },
        '& .am-list-item': {
          '& .am-list-line': {
            paddingRight: '8px',
            '& .am-list-content, & .am-list-extra': {
              fontSize: '15px !important',
            },
            '& .am-list-content': {
              color: '#333333',
              width: '102px',
              marginRight: '0px',
              flex: 'initial',
            },
            '& .am-list-extra': {
              color: 'rgba(51,51,51,0.40)',
              flex: 1,
              whiteSpace: 'normal',
              textAlign: 'left !important',
            },
          },
        },
      },
    },
  },
  itemEnd: {
    '& .am-list-line': {
      '&:after': {
        display: 'none !important',
      },
    },
  },
  datePicker: {
    flex: 1,
  },
  dateValue: {
    '& .am-list-extra': {
      color: '#757575 !important',
    },
  },
  forerverBox: {
    whiteSpace: 'nowrap',
    marginRight: '5px',
    position: 'relative',
    paddingLeft: '8px',
    fontSize: '15px',
    color: '#757570',
    overflow: 'initial',
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      height: '30px',
      width: '1px',
      background: '#F6F6F6',
    },
  },
  iconCheck: {
    width: '14px',
    height: '14px',
    border: '1px solid #538DED',
    borderRadius: '50%',
    marginRight: '5px',
    boxSizing: 'border-box',
    position: 'relative',
  },
  iconChecked: {
    '&:after': {
      content: '""',
      display: 'block',
      width: '7px',
      height: '7px',
      background: '#538DED',
      borderRadius: '50%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
    },
  },
});

var Item = _List__default['default'].Item;

var noon$1 = function noon() {};

var ValidRange = function ValidRange(props) {
  var _props$classes = props.classes,
    s = _props$classes === void 0 ? {} : _props$classes,
    _props$values = props.values,
    values = _props$values === void 0 ? [] : _props$values,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? noon$1 : _props$onChange,
    _props$labels = props.labels,
    labels =
      _props$labels === void 0
        ? ['证件起始日期', '证件终止日期']
        : _props$labels,
    _props$titles = props.titles,
    titles =
      _props$titles === void 0 ? ['起始日期', '终止日期'] : _props$titles,
    _props$placeholders = props.placeholders,
    placeholders =
      _props$placeholders === void 0
        ? ['请选择起始日期', '请选择终止日期']
        : _props$placeholders,
    _props$forerverTxt = props.forerverTxt,
    forerverTxt = _props$forerverTxt === void 0 ? '长期' : _props$forerverTxt,
    _props$foreverDate = props.foreverDate,
    foreverDate =
      _props$foreverDate === void 0 ? '9999-12-31' : _props$foreverDate,
    _props$minDate = props.minDate,
    minDate =
      _props$minDate === void 0
        ? new Date(1980, 0, 1, 23, 59, 59)
        : _props$minDate,
    _props$maxDate = props.maxDate,
    maxDate =
      _props$maxDate === void 0
        ? new Date(2100, 11, 30, 23, 59, 59)
        : _props$maxDate;

  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    check = _useState2[0],
    setCheck = _useState2[1]; // 监听日期

  React.useEffect(
    function() {
      setCheck(values[1] === foreverDate);
    },
    [values[1], foreverDate],
  ); // 切换

  var onCheckHandle = function onCheckHandle() {
    var arr = [values[0], check ? '' : foreverDate];
    var type = check ? 'unCheck' : 'check';
    onChange(arr, type);
    setCheck(function(val) {
      return !val;
    });
  }; // 日期改变

  var onChangeHandle = function onChangeHandle(date, type) {
    var val = formatDate(date);
    var arr = [];

    if (type === 'start') {
      if (val > values[1]) {
        return _Toast__default['default'].info(
          ''.concat(titles[0], '\u4E0D\u80FD\u5927\u4E8E').concat(titles[1]),
        );
      }

      arr = [val, values[1]];
    } else {
      if (val < values[0]) {
        return _Toast__default['default'].info(
          ''.concat(titles[1], '\u4E0D\u80FD\u5C0F\u4E8E').concat(titles[0]),
        );
      }

      arr = [values[0], val];
    }

    onChange(arr, type);
  };

  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      className: s.root,
    },
    /*#__PURE__*/ React__default['default'].createElement(
      _List__default['default'],
      null,
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: classnames__default['default'](
            _defineProperty({}, s.dateValue, values[0]),
          ),
        },
        /*#__PURE__*/ React__default['default'].createElement(
          _DatePicker__default['default'],
          {
            mode: 'date',
            title: titles[0],
            extra: placeholders[0],
            value: judeDate(values[0]),
            onChange: function onChange(date) {
              return onChangeHandle(date, 'start');
            },
            minDate: minDate,
            maxDate: maxDate,
          },
          /*#__PURE__*/ React__default['default'].createElement(
            Item,
            {
              arrow: 'horizontal',
            },
            labels[0],
          ),
        ),
      ),
      /*#__PURE__*/ React__default['default'].createElement(
        _Flex__default['default'],
        null,
        /*#__PURE__*/ React__default['default'].createElement(
          'div',
          {
            className: classnames__default['default'](
              s.datePicker,
              _defineProperty(
                {},
                s.dateValue,
                values[1] && values[1] !== foreverDate,
              ),
            ),
          },
          /*#__PURE__*/ React__default['default'].createElement(
            _DatePicker__default['default'],
            {
              mode: 'date',
              title: titles[1],
              extra: placeholders[1],
              value:
                values[1] === foreverDate ? undefined : judeDate(values[1]),
              onChange: function onChange(date) {
                return onChangeHandle(date, 'end');
              },
              minDate: minDate,
              maxDate: maxDate,
            },
            /*#__PURE__*/ React__default['default'].createElement(
              Item,
              {
                className: s.itemEnd,
                arrow: 'horizontal',
              },
              labels[1],
              ' ',
            ),
          ),
        ),
        /*#__PURE__*/ React__default['default'].createElement(
          _Flex__default['default'],
          {
            className: s.forerverBox,
            onClick: onCheckHandle,
          },
          /*#__PURE__*/ React__default['default'].createElement('i', {
            className: classnames__default['default'](
              s.iconCheck,
              _defineProperty({}, s.iconChecked, check),
            ),
          }),
          /*#__PURE__*/ React__default['default'].createElement(
            'span',
            null,
            forerverTxt,
          ),
        ),
      ),
    ),
  );
};

var index$1 = styles$3.withStyles(styles$1)(ValidRange);

var styles$2 = styles$3.createStyles({
  root: {
    '& .am-list-item': {
      border: '1px solid #F0F0F0',
      minHeight: '36px',
      paddingLeft: '10px',
      '& .am-list-line': {
        '& .am-list-extra': {
          flex: 1,
          fontSize: '14px !important',
          whiteSpace: 'normal',
          textAlign: 'left !important',
        },
      },
    },
  },
  label: {
    color: '#666',
    fontSize: '14px',
  },
  tip: {
    color: '#999',
    fontSize: '12px',
  },
  dateBox: {
    marginTop: '10px',
  },
  splitTxt: {
    margin: '0 10px',
    color: '#666',
  },
  datePicker: {
    flex: 1,
  },
  dateValue: {
    '& .am-list-extra': {
      color: '#323232 !important',
    },
  },
});

var Item$1 = _List__default['default'].Item;

var noon$2 = function noon() {};

var DateRange = function DateRange(props) {
  var _props$classes = props.classes,
    s = _props$classes === void 0 ? {} : _props$classes,
    _props$label = props.label,
    label = _props$label === void 0 ? '自定义日期' : _props$label,
    _props$tip = props.tip,
    tip = _props$tip === void 0 ? '时间范围最长30天' : _props$tip,
    _props$values = props.values,
    values = _props$values === void 0 ? [] : _props$values,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? noon$2 : _props$onChange,
    _props$titles = props.titles,
    titles =
      _props$titles === void 0 ? ['起始日期', '终止日期'] : _props$titles,
    _props$placeholders = props.placeholders,
    placeholders =
      _props$placeholders === void 0
        ? ['请选择起始日期', '请选择终止日期']
        : _props$placeholders,
    _props$minDate = props.minDate,
    minDate =
      _props$minDate === void 0
        ? new Date(1980, 0, 1, 23, 59, 59)
        : _props$minDate,
    _props$maxDate = props.maxDate,
    maxDate =
      _props$maxDate === void 0
        ? new Date(2100, 11, 30, 23, 59, 59)
        : _props$maxDate,
    _props$splitTxt = props.splitTxt,
    splitTxt = _props$splitTxt === void 0 ? '至' : _props$splitTxt; // 日期改变

  var onChangeHandle = function onChangeHandle(date, type) {
    var val = formatDate(date);
    var arr = [];

    if (type === 'start') {
      if (val > values[1]) {
        return _Toast__default['default'].info(
          ''.concat(titles[0], '\u4E0D\u80FD\u5927\u4E8E').concat(titles[1]),
        );
      }

      arr = [val, values[1]];
    } else {
      if (val < values[0]) {
        return _Toast__default['default'].info(
          ''.concat(titles[1], '\u4E0D\u80FD\u5C0F\u4E8E').concat(titles[0]),
        );
      }

      arr = [values[0], val];
    }

    onChange(arr, type);
  };

  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      className: s.root,
    },
    /*#__PURE__*/ React__default['default'].createElement(
      _Flex__default['default'],
      {
        justify: 'between',
      },
      /*#__PURE__*/ React__default['default'].createElement(
        'span',
        {
          className: s.label,
        },
        label,
      ),
      /*#__PURE__*/ React__default['default'].createElement(
        'span',
        {
          className: s.tip,
        },
        tip,
      ),
    ),
    /*#__PURE__*/ React__default['default'].createElement(
      _Flex__default['default'],
      {
        className: s.dateBox,
      },
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: classnames__default['default'](
            s.datePicker,
            _defineProperty({}, s.dateValue, values[0]),
          ),
        },
        /*#__PURE__*/ React__default['default'].createElement(
          _DatePicker__default['default'],
          {
            mode: 'date',
            title: titles[0],
            extra: placeholders[0],
            value: judeDate(values[0]),
            onChange: function onChange(date) {
              return onChangeHandle(date, 'start');
            },
            minDate: minDate,
            maxDate: maxDate,
          },
          /*#__PURE__*/ React__default['default'].createElement(Item$1, {
            arrow: 'down',
          }),
        ),
      ),
      /*#__PURE__*/ React__default['default'].createElement(
        'span',
        {
          className: s.splitTxt,
        },
        splitTxt,
      ),
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: classnames__default['default'](
            s.datePicker,
            _defineProperty({}, s.dateValue, values[1]),
          ),
        },
        /*#__PURE__*/ React__default['default'].createElement(
          _DatePicker__default['default'],
          {
            mode: 'date',
            title: titles[1],
            extra: placeholders[1],
            value: judeDate(values[1]),
            onChange: function onChange(date) {
              return onChangeHandle(date, 'end');
            },
            minDate: minDate,
            maxDate: maxDate,
          },
          /*#__PURE__*/ React__default['default'].createElement(Item$1, {
            arrow: 'down',
          }),
        ),
      ),
    ),
  );
};

var index$2 = styles$3.withStyles(styles$2)(DateRange);

exports.DateRange = index$2;
exports.ImagePicker = index;
exports.ValidRange = index$1;
