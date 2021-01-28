import 'antd-mobile/lib/toast/style/css';
import _Toast from 'antd-mobile/lib/toast';
import React, {
  forwardRef,
  useRef,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from 'react';
import {
  createStyles,
  withStyles,
  DatePicker,
  ActivityIndicator,
  Drawer,
  Flex,
} from '@wonder-ui/core';
import classnames from 'classnames';
import Compressor from 'compressorjs';
import WxImageViewer from 'react-wx-images-viewer';
import 'antd-mobile/lib/flex/style/css';
import _Flex from 'antd-mobile/lib/flex';
import 'antd-mobile/lib/list/style/css';
import _List from 'antd-mobile/lib/list';
import moment from 'moment';
import 'antd-mobile/lib/modal/style/css';
import _Modal from 'antd-mobile/lib/modal';
import 'antd-mobile/lib/input-item/style/css';
import _InputItem from 'antd-mobile/lib/input-item';

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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
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
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAulBMVEUAAADc3d3b29vb29vb29vb29uzxOXb29vb29vV19zb29vb29vb29vb29tFhPbb29va2trb29va2tvb29vb29vb29va2trb29va2trb29vb29vb29vb29vb29vU1tpaj/NckfJOifRynu5omPBekfOFqut8o+xakPKNrehfk/Fgk/Ftm+94ou2gueVRi/OEqOtfkvGctuZome9Zj/F3oe1ajvKxwuKnvON+peuWs+d2oO3a2to7ffeLq+jyis27AAAAO3RSTlMAF0wj6McJZ3008prdRP67K6o61oV0XrLQo5OMVm4Q1/33wd0rZ+Lvt55H7Jlz5M22lljKhHZhUKeH0zMzuJQAAAdJSURBVHja7NqHcqJQFAbgnyKKBbG7iYmKoim6ybquKdd9/9fayRjuBU2kSDns8L3BP3CaiEKhUCgUCoVCLt3OH2x7u3q1rOeR3DalW+TN3F5Zs6Wx5/6yg3rz6kZWkAfS9l0k8AYR6q0y6TSabS33nDfIiXqtTzOM/jqb7rlzQYTSdQO0zFcz/j4FCSJ0CGXhKUIFEYbdNgiweYrQQYRSGRmzZ2cDGIYxnS6Xy0WnrqpVulG+jzFdWquNhiOK3KuVVHJR1l/HMGarB5wjNSpNQlH09/AhBK3RbX4VRUbaXienr5NlIwypP2AnriSkyX48eRbjLcIzK8OTiV9GaiTruOMu7+eISK6pzKulIx1vx2/V2MYlpEqHeVWQhjvjKMYGl9LKJeYxUJA0/ag6ZhvEot/0VsoIxxJ9rcYPiI3sfSpdJEizvP12i1hVqsylaUJI9LWyNMRMbzEXtY9k7CaejrtBAvqeBtZDEn55DsB7JEOqeeY84nfnjvFzg8SUq0wYJJvD0pCgdokJQ8TraS8YWyRLqzFBTSzHeI7ElZlLnHXuzoE0yFXGdRCXdeo5vEmaOc4BKGrcXfjFNQd/I0V1xl3jcrorxzNSNYxzhZQe3dM8ZaUYt5WnDHIIHcY1Ymu890ifJupkKMVU6M9Inbd31RDd7aOrX2WjLebJTRwFMkZWZMa1EdGbwffEOTLTZY6ShkhMUSB/kKHmpdPkKdNCF3RRJjoiWBv8HtSQKbHUty7rWA/ImDi0RpfctvfImjSMXu8vk+w7rzCK/vv2gs6L9eGHE6RqIpQ3Ih3LYap8U4n4QKYaSOgxh4kQ1jRGoVsz0t27oFTpBw1eJUqUWTgHGbUIB/xCLO90mOEfyc4g1Xod13x3zPUDARRneVQlBNKeknwgrkfSQyB39FrW0QFfQiB87d2AmG6oo/eFnyGgRgnVgS066/uJATuoa/A3ITgMHeUQB5ZNtdQ/SNXgN69Fbl10a7FPCvw4Q8Qgsr979Z0gZfh4oXVQfftu1eDjlehUd7SCfiGdkX6zgF7QIpkQ7lkfdCdIH2ftCE/DAzVYkdwRnoahimThlAio4sNdwhnahORJ9eXiKOMM06A81g/qQa6rHfkSEUXyI9DXaNDlXFfDIE1rCrpGQf7HtSA+Dj+YQWb7I/VxCEAL0La0Cf2mJdpW5Vz3pd+0gIH/lSjvPxFdfQ+u/X/d2uWg+wI9/21rTX7Tcm9b6pl5mIsgziCp5j0I/3aV78HuOhJvcx5E8b9Insj+fO0m+X+oXuQiCN9R2v9/kH/t3VlyozAQANBmEasoGTBgNn/MMaZr7n+t+ZhCIhMnlgChThXvAoncNFqQ1L///PMLKNN4tHK5uYAyjWQf5ZoRZdXSkAi+ksjpMGUaHeIsB8iUaQxRWnlojrJl0Mjf73oWQFnzfhmlkCN9yob3E6tAphFlQuPdujSE5oVR/31YaDQWKHyg66lzxkfIlRa6Kp3vCsMP6BFb1Y287xEZ0DXq/I++bC1dnc6AMFAjZLIyrb0P6mAWVanewURBfrQ163XaDfkkWVKEaQaOxEV9r2Sam39D4l1igZqDj554kiSyX9ectWQekCRkiuh+anR+BeRLgf4pkpr0LLGRu5y051+YAkFCf8ZUqMMN9NxMjojWhCfuickJ0RHpThOZyZbyAskunKZmx6weZMfyudkA6q7aTYsMCDOc3YfEVoVy09teOiQ5cpQBCT3Tiy84qSICufnv21Gc8RoHZB2SB9DxMSA/N0uKdUDMQ5KR6UvEtt+2Q2KLp806IFtCgi1QcAtlQLamVk3iFdzL108EZgJOaV4y7XhAYly4r6vhPfZc0trJaDpfUOl3XbFVIZU3V4OLcecNXQ24VOCCe7BF9CCRJipBMN78U1BIk/6AR7xBdL7NJsFF7cFmpfOEn1HyYTuvRrdrKtNRlSN8lAY4X4BSuf8RdThdzHDBgwNOyzlbeuRH/u0nQ1fdCUMphv2C0E1MnvzoEjEVKjGcJbVQYsE3qW9i4W+WcOC+zpP7k9lSoYgEFZGCbVGOigDp4JhkthOlYojWxkY+ruQeWBRnVnOywJXaB1uiHC2/JasMV5IIrCiYrXYoKbde8c8bca0FO24M1/IADtZyXAknsCUacC2cj414iacU5FJvFEX4cBQvQemMIUQq8IOyOKgZ4UlF65QRP+qrI5pxehlBVcZMydODmnH2d7LnHf8j5gC2iabeSalN9YLRaot5wVCsWzjVxPAT0aSgz5sGjp/cn3C2JsTPeK9VCz/yR4YvdBU44CUcX6mHNv3md71NCcOXSh8ceTY1fiEUQ1zcAtWgyLtV7b3j+JW+AIei+YHfy3jNHjzEN3L3e9hjgXuFA40trem9xh3KltDFOH6f4SYsIba7Dby4DI1bMbr/9P1SOms3JhN33/ln728F7cDetObRNzSS+z2vaHL2Imt4d5/IbJzSF3lBWvjtnDRx61e3gMT2nMvlcrlcLpeLub9LLr7xNXfDXwAAAABJRU5ErkJggg==';
var iconRemove =
  'data:image/png;base64,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';
var empty =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABcCAMAAAC8wqBSAAAAjVBMVEUAAADm5ubm5ubl5eXl5eXd3d3m5ubm5ubm5ubm5ua1tbXl5eXl5eXl5eXm5ubm5ubm5ubl5eXl5eXk5OTm5ubk5OTi4uLl5eXl5eXj4+Pc3Nzl5eXl5eXl5eXl5eXY2Njl5eXm5ubl5eXm5ubm5ubk5OTm5ubm5ubm5ubm5ubm5ubm5ubl5eXk5OTm5uZ+RDafAAAALnRSTlMAZhR72g/zmvvMAzmIcPHpRfnvVaxKIk9bKgrEdWs+BuTeoJWLMY/X0r63gmEbAQb9LQAAAo1JREFUaN7tmdmaojAQRgsRzMQGFVeURVxbu633f7wB0vPFLYZI0XPDuZQPj5XUTwHCO8x6Od/wO/Qx5wOe0sr+myxN+NuyZWIos337XRn/8GMTFY8Ysvg9GbcZuia58DCHeWYy6UJkVnXZwpc2Q1npwsEcqjOWNjNZJFxDAAKbRmZLlwnzAHNGnpFM1LWWLsPaYgOZJ+syZSFqiyvLvJHOpV9JSyeTLrmG5owDsZIcbkkw53CXL6tOXbK29QVucaY5Idyw92vUJbskGEMFeDwSddWyuTqX7MXSVcu2gKp4U2hpaakA7xCS6ubKsUtGZr92OZ9IyGCmuYcjZfvKdcmQlGAPanaYww42Abtylk7ULjEATxwo2GAOUw4CPpHH6xOWU361VBweisopCpN7onjEWK4wx+0DEbM15hw7z/OMYkvJ+MKCSJ1nN6STXTJlsm0Ud4OEeKpkh2v5M6hwupjjPyZ7iwU7IMV63gZ7VxZGR6fsg9HwWZ7xi9IkO/zkwDVThjlZh1qWrkqb9Zhn9ICceVlF97oKq/zo6NDL0tP9/ly6WPANDTAUj77h3XXljwMNkJ6xYMNBMBtgwQIaISlniZtcjzlccaBHfv1ZDLa+TzEzdfOfza/yfE6hKXqyJUQS2BAaI/T/pdhZobwZaIhDqchmEGGBO3c0vFhl7mgIA9H+PwvKfFdD9OrdjObcgIldK2VV6NW6ZzeUTTRbQio7KsfP8kQuY4lKNvPJZbhVbxm9LOgrCsuIZfJS+sgWyWXK990xa0bGxk8CPcJmZMgi/vhfCLVMMrkJQFie3JgM3c2085Pl/m6ARDI1n72dbX9sVwyRTKanlbWyVtbKUEUra2WtrJXpZHPr11j8BVuY017FDvZgAAAAAElFTkSuQmCC';
var close =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAeFBMVEUAAACzs7O2tra0tLSzs7Ozs7O0tLSzs7O0tLSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tLSzs7Ozs7Ozs7Ozs7Ozs7O0tLSysrKzs7Ozs7Ozs7Ozs7OysrKzs7O3t7ezs7O3t7e0tLSzs7Ozs7Ozs7O2trazs7NngKFQAAAAJ3RSTlMA1SpVd3FOU0VR4GQw62xoXFnlPvnw23t/9WBKOTW2CZYnns3Fih5wrUqhAAADQElEQVR42u3di1IaQRCF4YMKKBhuJrpeUbzM+79hxkrUqjgnLGkzzOnq/wWorwqWZYBuRFEURVEURVEURVEURVEURZFy69Pl8PgF++ph1I0eAHvdKr12v8Y+OrhLrz0uYW2Vfnd3gPqdTN4fHra69N6gvuQwfXQMS2cpVZVwRxqsYeg+VZVwR24BQ0+psoQ70jMMXaaKEu6wv9zPU2UJd6QNDN2lyhLuSEPj1dcusTvs19/1Y2UJd2xgapmqSrjj2wNsdTUl3JHGgJqEOdQk1GHvwiaxO75nh5qk6DgB1CTMoSZhDjVJBQdwZJBYHCNATcIcapIxd0hJSo7LN4eQpOi4xlsykq0OEUkPh4RkDw5gSCRf7Pjx2dG8pLejcUnRcYxSTUt2cjQs2dHRrGRnR6OSvTuAWVGi5/gSyUnpHG6roz1JIw4m0XMwicVxhl61JGnKAcyLEj0Hk+g5mETPwSQ7O1Y7O/YvadTBJHoOYLqLZFRy3KCNyhI9B5PoOZhEz8EkPRyTthxMoucArrgE3HGL9ipL9BxMoudgEj0HsChK9BxMUnSct+wgkqLjFG1Xkig6ssSJA1g6cWSJE0eWOHFskQx0HFnixAEcUscBtDp04sgSJw43EC9PLS8vdi+XXy9viF5uUbzcNHq5jffywcrLR92SY9DpSchxUKd2HEQcQKd1QMePTHGhJGEONQlzqEmYQ00ypY4PicJXbz0cwFH7kl6OLGn962nmUJMwh5qEOdQkc+JgklZ/5sQcahLmUJNwB3jD9n6cyRxqEuZQk8yIQ03CHGoSkyNLWvnbBXOoSZhDTWJ35Gb7/7PYkDjUJMyhJmEONQlzqEkMjlLzvpLGHVniZMDAv0paHF4xdzKEI0ucjEXJEieDaoDp3yRCDiIRHOaUJU7Ga2WJk4FnfSQqw/SmToYCAldOxjRmiZPBmUyi5yCSMaA3JnfhZNxvljgZwPyfJFcVHVxiH+79Mqns4JINLD1Xd3DJteRKguVnyDMMTao7uORRdG3HJ8ml6iKVPyVPXlbb3MPQTTvLhtItLE2bWf+0gK2Nk4VcwGzSwIq01RF+pb20bny6RhRFURRFURRFURRFURRFURSp9hM0qA6a0LfgwQAAAABJRU5ErkJggg==';
var check =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAmVBMVEUAAAD2TU/2TU71T1D2TE/1TU/1TU/1TU/2TU/2TU/1TU71TU/1TE31TU/1TU/1Tk71S1D1TU/1TU72Tk/1Tk71TU/1TU/2TU/1TE/2TU/2TU72Tk71TU/2TU/1TU/2Tk7/UlL2TU/2TU72TU/1TU/1TU/1TU/1TE/2TU/2TU/1TU/2TU72Tk/2TU71TE/2TVD1TU71TE/1TU/SqSvQAAAAMnRSTlMAzBcOI9S1sYjhZ3AKnVAuE+2pGwXnuqySfFsfwGBEKQHaxZeMgXY4+veiO/JWNMFJQJUauC0AAAN6SURBVHja7dyJUuJQEIXhJgESFGQJqyCL4rDo6Njv/3BTOpZC3dYbIcn0SfX3AFNzLLcf0pIxxhhjjDHGGGOMMcYYY4wxxhiToZt9jSutGwLXueN/ogdCVq3xhw3hCir8qdIhVOGMD60JVL/OR4YEqsfHBoSpxeUYMmbmMnxqxfwK/4t9wo7ugvBcsusX4blg14jwXLNr2CQ4V+y6DQjOfMeOypTgPHTZsQL8htVusKPxRHCqNXZ0XwhOUGHH9g/BCWfs+k1wlnV2Ib7s0GPXBeFpleQXrDG77glPzOUokAm77giPFCB7wlPmAKmXJECeAV8gFQMkITgbIUBqFiBF8gcI4Js6UoDsyhIgVwRnGbHrmvCUOUAuCY8UIBPCIwVITHikABkTHilAWoRHCpAe4REDpE9wpACZhQSn1AFSJThigLQJjhQggywCJLy6nCdUEDlAHud0tkW0fftRFNA3AALknt/ViqmZZT2fAInTvjGkPEDaaT8w2gMk5lRL9AdIlObtOoQAGbB/CUSADNi/BCJAIu+3EJAAibmgJXKAREvKSNgoZokcIMMMA6TNxbyyNN/l/SjZy3dLoALkIfclcoCsMg+QDef84IQcIBvK3JO8RH2AuNriEu0BknrJJOsAKaIYFvkt6RX6KJm85F5xgHypms+Ssf+rD2JJnObfLGRJnHmArMmhfsllgY+S+ZesMw2QPRViKi7JMkBIVsyScXYB0qQv6F0y354QILkvuTshQP77LUsmS9oNBbcsibjk/AB5ooLJS1rnBsgLFS/ZnrWk+azmliXZsWuvMkA8kkdpicoA8QikJb1UAaLsUbKkKy1ZagwQj2DArlFfY4CctkRjgHgEDXZFTY0BctoSjQHi0Vmxqx6S7FrxLcsXSzQGiEenJv33OmkDRNEtS9olm672R8k6FXbNAo0BksGS6grhlkVccpscBQjGLUt4Ky2ZagwQj/D52yV1nFsW8V2nSlVjgHiEQ3GJxgA5aclCY4B4hHV21RYaA8SjKS5BvGWRligNkB8vURsgP1yiOEA8mhEfQL5lOVyCfcvS/1yiPUDSLoG/ZXlfUoJblrclGAHi0R+xazcnPP0RTIB4l5ThmP7VcgQTIN4l6Mf0H0t62Mf0B24a/GYF+Ff7jk3Xw8EgigH/yqgxxhhjjDHGGGOMMcYYY4wxxpi8/QWRh63BM0QGYAAAAABJRU5ErkJggg==';
var search =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAe1BMVEUAAACOm6iXn66Tlq2PmaOYoK+XoK6YoK6Xn6+XoK+Xnq6Xnq6Unq2UnKqVmq2XoK+YoK+Xn6+Gk6CAgICXoK6YoK+YoK6XoK6Yn66Xn66Wn6yVnaxjY52Xn6+YoK+XoK6Xn66Wnq6YoK+YoK+YoK6WoK+Yn6+Xn66YoK+AkoC7AAAAKHRSTlMAFMASDvN1x+PeTUIyHxe7sqEIAunTw7aXfjksA/n2pIZi682QaFiYwZKGTwAAAPxJREFUKM+FkOlywyAMhCEGA7aD7/vO1X3/J+xkTF1D68n+WuaThFbkV+yqM/KvoqUqJq6SVf9B1xSAvJc3oPCd9lBB+REjgxc2E2ptsQkL2+cLCHqYKfE87pVgzvfXjIf1iVci2OeMihFLAcRg7AKf2MoFOuMq9G6y9qeeFZK5MEBqdh3vuQsj1JvRvBxc2CHZTKZungtfaIyrEbrwC6txTzQO8yS/GqsL3rtJ0t37EFaYkB+qsxgJPTBpnUwLlIHJQ9sRiOmB0hkQbRB1r0aC+zEu1DpYhU087Yl3QWXRvPPTOnms7wxvuvc6MtQ7pfQTjdk5jRUlp8oo+QYdghKfAmWkRAAAAABJRU5ErkJggg==';

var styles = createStyles({
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
    margin: 0,
  },
  marginBottom: {
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

var ImagePicker = /*#__PURE__*/ forwardRef(function(props, ref) {
  var _classnames;

  var _props$classes = props.classes,
    s = _props$classes === void 0 ? {} : _props$classes,
    _props$value = props.value,
    value = _props$value === void 0 ? [] : _props$value,
    _props$max = props.max,
    max = _props$max === void 0 ? 1 : _props$max,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? noon : _props$onChange,
    _props$accept = props.accept,
    accept = _props$accept === void 0 ? 'image/*' : _props$accept,
    multiple = props.multiple,
    capture = props.capture,
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
    disabledSelect = props.disabledSelect,
    onUpload = props.onUpload,
    onInit = props.onInit,
    _props$onFail = props.onFail,
    onFail = _props$onFail === void 0 ? noon : _props$onFail,
    onGetPreviewUrl = props.onGetPreviewUrl,
    resize = props.resize,
    _props$showRemove = props.showRemove,
    showRemove = _props$showRemove === void 0 ? true : _props$showRemove,
    replace = props.replace,
    quality = props.quality;
  var refInput = ref || useRef(null);
  var refSelectDom = useRef(null);
  var refFilesList = useRef(value);
  var urlList = [];
  refFilesList.current.forEach(function(item) {
    if (item.preview) {
      urlList.push(item.preview);
    } else if (item.url) {
      urlList.push(item.url);
    }
  }); // 有效个数

  var validLength = useMemo(
    function() {
      var num = 0;

      for (var i = 0; i < value.length; i++) {
        var _value$i = value[i],
          url = _value$i.url,
          errorTip = _value$i.errorTip;

        if (url || errorTip) {
          num++;
        }
      }

      return num;
    },
    [value],
  );

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setOpen = _useState2[1];

  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    index = _useState4[0],
    setIndex = _useState4[1];

  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    realHeight = _useState6[0],
    setRealHeight = _useState6[1]; // 初始化

  var init = function init(index) {
    if (onInit) {
      onInit(index)
        .then(function(res) {
          refFilesList.current[index] = Object.assign(
            {},
            refFilesList.current[index],
            res,
            {
              loading: false,
            },
          );
          refFilesList.current = _toConsumableArray(refFilesList.current);
          setTimeout(function() {
            return onChange(refFilesList.current);
          }, 10);
        })
        .catch(function(err) {
          refFilesList.current[index] = Object.assign(
            {},
            refFilesList.current[index],
            {
              url: '',
              loading: false,
              errorTip: err || '加载失败',
            },
          );
          refFilesList.current = _toConsumableArray(refFilesList.current);
          setTimeout(function() {
            return onChange(refFilesList.current);
          }, 10);
        });
    }
  }; // 处理初始化加载

  useEffect(function() {
    // 处理初始化加载
    if (typeof onInit === 'function') {
      for (var i = 0; i < refFilesList.current.length; i++) {
        refFilesList.current.forEach(function(item) {
          item.loading = true;
          item.isInit = true;
        });
        refFilesList.current = _toConsumableArray(refFilesList.current);
        onChange(refFilesList.current);
        init(i);
      }
    }
  }, []); // init

  useEffect(
    function() {
      if (resize) {
        var calcWidth = getComputedStyle(refSelectDom.current).width;
        setRealHeight(calcWidth);
      }
    },
    [resize],
  ); // 图片压缩

  var compress = function compress(file) {
    return new Promise(function(resolve) {
      new Compressor(file, {
        quality: quality,
        success: function success(result) {
          resolve(result);
        },
        error: function error(err) {
          console.log('图片压缩失败,将返回原文件：', err.message);
          resolve(file);
        },
      });
    });
  }; // 图片处理

  var parseFile = /*#__PURE__*/ (function() {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee(
        file,
        index,
        validLength,
      ) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                data = file;

                if (!quality) {
                  _context.next = 7;
                  break;
                }

                console.log('压缩前', file);
                _context.next = 5;
                return compress(file);

              case 5:
                data = _context.sent;
                console.log('compress data', data);

              case 7:
                return _context.abrupt(
                  'return',
                  new Promise(function(resolve, reject) {
                    var reader = new FileReader();

                    reader.onload = function(e) {
                      var dataURL = e.target.result;

                      if (!dataURL) {
                        reject('Fail to get the '.concat(index, ' image'));
                        return;
                      }

                      console.log(
                        'validLength + index',
                        validLength + index,
                        value,
                      );
                      resolve(
                        Object.assign({}, value[validLength + index], {
                          file: data,
                          url: dataURL,
                        }),
                      );
                    };

                    reader.readAsDataURL(data);
                  }),
                );

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      }),
    );

    return function parseFile(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  })(); // 图片改变

  var onChangeHandle = function onChangeHandle(e) {
    var fileSelectorEl = e.target;
    var files = fileSelectorEl.files;

    if (!files || !files.length) {
      return (fileSelectorEl.value = '');
    }

    console.log('files', files);
    var restNum = max - (replace ? 0 : validLength);

    if (files.length > (replace ? max : restNum)) {
      _Toast.info(
        '\u56FE\u7247\u6700\u591A\u4E0D\u8D85\u8FC7'.concat(max, '\u5F20'),
      );
    }

    var restFileList = Array.from(files).slice(0, restNum);
    console.log('restFileList**', restFileList, restNum);
    var imageParsePromiseList = [];

    for (var i = 0; i < restFileList.length; i++) {
      imageParsePromiseList.push(parseFile(restFileList[i], i, validLength));
    }

    refFilesList.current = refFilesList.current.filter(function(item) {
      return item.url || item.errorTip;
    }); // 过滤有效值

    var index = replace ? 0 : refFilesList.current.length;
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
            return _Toast.info(
              '\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7'.concat(
                size,
                'M',
              ),
            );
          }

          return item;
        });

        if (replace) {
          refFilesList.current = _toConsumableArray(filterList);
        } else {
          refFilesList.current = refFilesList.current.concat(filterList);
        }

        onChange(refFilesList.current);

        if (typeof onUpload === 'function') {
          var _loop = function _loop(_i) {
            var item = refFilesList.current[_i];

            if (_i >= index) {
              onUpload(item)
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
                    return onChange(refFilesList.current);
                  }, 10);
                })
                .catch(function(err) {
                  refFilesList.current[_i] = Object.assign(
                    {},
                    refFilesList.current[_i],
                    {
                      url: '',
                      loading: false,
                      errorTip: err || '上传失败',
                    },
                  );
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
    if (disabledSelect) return;
    refInput && refInput.current && refInput.current.click();
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
      return _Toast.info('图片上传中，请稍后操作');
    }

    refFilesList.current.splice(index, 1);
    refFilesList.current = _toConsumableArray(refFilesList.current);
    onChange(refFilesList.current);
  }; // 预览图片

  var onPreview = /*#__PURE__*/ (function() {
    var _ref2 = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(
        currentIndex,
        index,
      ) {
        var preview;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                if (!disabledPreview) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return');

              case 2:
                if (
                  !(
                    !refFilesList.current[index].preview &&
                    typeof onGetPreviewUrl === 'function'
                  )
                ) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 5;
                return onGetPreviewUrl(index);

              case 5:
                preview = _context2.sent;
                refFilesList.current[index].preview = preview;
                refFilesList.current = _toConsumableArray(refFilesList.current);
                onChange(refFilesList.current);

              case 9:
                console.log('currentIndex', currentIndex);
                setIndex(currentIndex);
                onClose();

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2);
      }),
    );

    return function onPreview(_x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  })(); // 关闭图片预览

  var onClose = function onClose() {
    return setOpen(function(val) {
      return !val;
    });
  }; // 计算高度

  var calcHeight = resize ? realHeight : height; // 定义占位元素个数

  var spaceNum = 0;

  if (resize) {
    var rowNum = Math.floor(100 / parseFloat(width));

    if (value && value.length > 0 && rowNum > 1) {
      var restNum = value.length % rowNum;

      if (restNum >= 0 && restNum <= rowNum - 1) {
        spaceNum = rowNum - restNum - 1;

        if (value.length === max) {
          spaceNum += 1;
        }
      }
    }
  }

  console.log('spaceNum', spaceNum); // parent样式

  var classParent = classnames(
    s.parent,
    ((_classnames = {}),
    _defineProperty(_classnames, s.noMargin, max === 1 || value.length < 1),
    _defineProperty(_classnames, s.marginBottom, resize),
    _classnames),
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classnames(
        s.root,
        _defineProperty({}, s.justifyContent, resize),
      ),
    },
    /*#__PURE__*/ React.createElement('input', {
      className: s.hidden,
      ref: refInput,
      type: 'file',
      accept: accept,
      multiple: multiple,
      capture: capture,
      onChange: onChangeHandle,
    }),
    value &&
      value.length > 0 &&
      value.map(function(item, index) {
        var url = item.url,
          loading = item.loading,
          name = item.name,
          errorTip = item.errorTip,
          isInit = item.isInit;

        if (url || errorTip || isInit) {
          var currentArr = value.slice(0, index + 1);
          var errorNum = 0;

          for (var i = 0; i < currentArr.length; i++) {
            var _errorTip = currentArr[i].errorTip;

            if (_errorTip) {
              errorNum++;
            }
          }

          var currentIndex = index - errorNum;
          return /*#__PURE__*/ React.createElement(
            'div',
            {
              key: index,
              className: classParent,
              style: {
                width: width,
              },
            },
            /*#__PURE__*/ React.createElement(
              'div',
              {
                className: classnames.apply(
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
                /*#__PURE__*/ React.createElement('img', {
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
                /*#__PURE__*/ React.createElement(
                  'div',
                  {
                    className: s.errorTip,
                  },
                  errorTip,
                ),
              showRemove &&
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
                },
                name,
              ),
          );
        }
      }),
    validLength < max &&
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: classParent,
          style: {
            width: width,
          },
          ref: refSelectDom,
          onClick: inputClick,
        },
        children
          ? children
          : /*#__PURE__*/ React.createElement('div', {
              style: {
                height: calcHeight,
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
        max === 1 &&
          value[0] &&
          value[0].name &&
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: s.name,
              style: {
                width: width,
              },
            },
            value[0].name,
          ),
      ),
    spaceNum > 0 &&
      new Array(spaceNum).fill(spaceNum).map(function(item, index) {
        return /*#__PURE__*/ React.createElement('div', {
          key: index,
          className: classParent,
          style: {
            width: width,
          },
        });
      }),
    isOpen &&
      /*#__PURE__*/ React.createElement(WxImageViewer, {
        onClose: onClose,
        index: index,
        urls: urlList,
      }),
  );
});
var index = withStyles(styles)(ImagePicker);

/**
 * 格式化日期
 */

function formatDate(val) {
  var format =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : 'YYYY-MM-DD';
  return moment(val).format(format);
} // 转换日期

var judeDate = function judeDate(val) {
  if (!val) return;
  return new Date(val);
};

var styles$1 = createStyles({
  root: {
    '& .am-list': {
      '& .am-list-body': {
        '&:before, &:after': {
          display: 'none',
        },
        '& .am-list-item': {
          paddingLeft: 0,
          minHeight: '50px',
          '& .am-list-line': {
            paddingRight: 0,
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
      color: '#333333 !important',
    },
  },
  forerverBox: {
    whiteSpace: 'nowrap',
    margin: '0 2px 0 13px',
    position: 'relative',
    paddingLeft: '12px',
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
    marginRight: '4px',
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

var Item = _List.Item;

var noon$1 = function noon() {};

var ValidRange = function ValidRange(props) {
  var _props$classes = props.classes,
    s = _props$classes === void 0 ? {} : _props$classes,
    _props$value = props.value,
    value = _props$value === void 0 ? [] : _props$value,
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
    _props$forerverText = props.forerverText,
    forerverText =
      _props$forerverText === void 0 ? '长期' : _props$forerverText,
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
        ? new Date(2060, 11, 30, 23, 59, 59)
        : _props$maxDate,
    _props$cache = props.cache,
    cache = _props$cache === void 0 ? true : _props$cache;

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    check = _useState2[0],
    setCheck = _useState2[1];

  var _useState3 = useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    cacheVal = _useState4[0],
    setcacheVal = _useState4[1]; // 监听日期

  useEffect(
    function() {
      setCheck(value[1] === foreverDate);

      if (cache && value[1] && value[1] !== foreverDate) {
        setcacheVal(value[1]);
      }
    },
    [value[1], foreverDate],
  ); // 切换

  var onCheckHandle = function onCheckHandle() {
    var arr = [value[0], check ? (cacheVal ? cacheVal : '') : foreverDate];
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
      if (val > value[1]) {
        return _Toast.info(
          ''.concat(titles[0], '\u4E0D\u80FD\u5927\u4E8E').concat(titles[1]),
        );
      }

      arr = [val, value[1]];
    } else {
      if (val < value[0]) {
        return _Toast.info(
          ''.concat(titles[1], '\u4E0D\u80FD\u5C0F\u4E8E').concat(titles[0]),
        );
      }

      arr = [value[0], val];
    }

    onChange(arr, type);
  };

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: s.root,
    },
    /*#__PURE__*/ React.createElement(
      _List,
      null,
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: classnames(_defineProperty({}, s.dateValue, value[0])),
        },
        /*#__PURE__*/ React.createElement(
          DatePicker,
          {
            mode: 'date',
            title: titles[0],
            extra: placeholders[0],
            value: judeDate(value[0]),
            onChange: function onChange(date) {
              return onChangeHandle(date, 'start');
            },
            minDate: minDate,
            maxDate: maxDate,
          },
          /*#__PURE__*/ React.createElement(
            Item,
            {
              arrow: 'horizontal',
            },
            labels[0],
          ),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        _Flex,
        null,
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: classnames(
              s.datePicker,
              _defineProperty(
                {},
                s.dateValue,
                value[1] && value[1] !== foreverDate,
              ),
            ),
          },
          /*#__PURE__*/ React.createElement(
            DatePicker,
            {
              mode: 'date',
              title: titles[1],
              extra: placeholders[1],
              value: value[1] === foreverDate ? undefined : judeDate(value[1]),
              onChange: function onChange(date) {
                return onChangeHandle(date, 'end');
              },
              minDate: minDate,
              maxDate: maxDate,
            },
            /*#__PURE__*/ React.createElement(
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
        /*#__PURE__*/ React.createElement(
          _Flex,
          {
            className: s.forerverBox,
            onClick: onCheckHandle,
          },
          /*#__PURE__*/ React.createElement('i', {
            className: classnames(
              s.iconCheck,
              _defineProperty({}, s.iconChecked, check),
            ),
          }),
          /*#__PURE__*/ React.createElement('span', null, forerverText),
        ),
      ),
    ),
  );
};

var index$1 = withStyles(styles$1)(ValidRange);

var styles$2 = createStyles({
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
  splitText: {
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

var Item$1 = _List.Item;

var noon$2 = function noon() {};

var DateRange = function DateRange(props) {
  var _props$classes = props.classes,
    s = _props$classes === void 0 ? {} : _props$classes,
    _props$label = props.label,
    label = _props$label === void 0 ? '自定义日期' : _props$label,
    _props$tip = props.tip,
    tip = _props$tip === void 0 ? '时间范围最长30天' : _props$tip,
    _props$value = props.value,
    value = _props$value === void 0 ? [] : _props$value,
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
        ? new Date(2060, 11, 30, 23, 59, 59)
        : _props$maxDate,
    _props$splitText = props.splitText,
    splitText = _props$splitText === void 0 ? '至' : _props$splitText; // 日期改变

  var onChangeHandle = function onChangeHandle(date, type) {
    var val = formatDate(date);
    var arr = [];

    if (type === 'start') {
      if (val > value[1]) {
        return _Toast.info(
          ''.concat(titles[0], '\u4E0D\u80FD\u5927\u4E8E').concat(titles[1]),
        );
      }

      arr = [val, value[1]];
    } else {
      if (val < value[0]) {
        return _Toast.info(
          ''.concat(titles[1], '\u4E0D\u80FD\u5C0F\u4E8E').concat(titles[0]),
        );
      }

      arr = [value[0], val];
    }

    onChange(arr, type);
  };

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: s.root,
    },
    /*#__PURE__*/ React.createElement(
      _Flex,
      {
        justify: 'between',
      },
      /*#__PURE__*/ React.createElement(
        'span',
        {
          className: s.label,
        },
        label,
      ),
      /*#__PURE__*/ React.createElement(
        'span',
        {
          className: s.tip,
        },
        tip,
      ),
    ),
    /*#__PURE__*/ React.createElement(
      _Flex,
      {
        className: s.dateBox,
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: classnames(
            s.datePicker,
            _defineProperty({}, s.dateValue, value[0]),
          ),
        },
        /*#__PURE__*/ React.createElement(
          DatePicker,
          {
            mode: 'date',
            title: titles[0],
            extra: placeholders[0],
            value: judeDate(value[0]),
            onChange: function onChange(date) {
              return onChangeHandle(date, 'start');
            },
            minDate: minDate,
            maxDate: maxDate,
          },
          /*#__PURE__*/ React.createElement(Item$1, {
            arrow: 'down',
          }),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        'span',
        {
          className: s.splitText,
        },
        splitText,
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: classnames(
            s.datePicker,
            _defineProperty({}, s.dateValue, value[1]),
          ),
        },
        /*#__PURE__*/ React.createElement(
          DatePicker,
          {
            mode: 'date',
            title: titles[1],
            extra: placeholders[1],
            value: judeDate(value[1]),
            onChange: function onChange(date) {
              return onChangeHandle(date, 'end');
            },
            minDate: minDate,
            maxDate: maxDate,
          },
          /*#__PURE__*/ React.createElement(Item$1, {
            arrow: 'down',
          }),
        ),
      ),
    ),
  );
};

var index$2 = withStyles(styles$2)(DateRange);

var styles$3 = createStyles({
  root: {
    color: '#757575',
  },
  steps: {
    display: 'flex',
  },
  step: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepsIcon: {
    marginBottom: '7px',
  },
  icon: {
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    position: 'relative',
    zIndex: 3,
    '&:after': {
      content: '""',
      display: 'block',
      width: '7px',
      height: '7px',
      background: '#9B9B9B',
      borderRadius: '50%',
      zIndex: 9,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
  iconActive: {
    '&:after': {
      background: 'linear-gradient(142deg, #FC7457 0%, #F63E31 100%)',
    },
  },
  iconActiveOut: {
    background: '#d2493d',
  },
  stepLine: {
    position: 'relative',
    '&:after': {
      content: '""',
      display: 'block',
      height: '2px',
      background: '#AFAFAF',
      opacity: 0.39,
      width: '100%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      zIndex: 2,
      transform: 'translateY(-50%)',
    },
  },
  stepActiveLine: {
    '&:after': {
      background: '#F74737',
      opacity: 1,
    },
  },
  stepActive: {
    color: '#F74838',
  },
  bold: {
    fontWeight: 'bold',
  },
});

var Steps = function Steps(props) {
  var _props$classes = props.classes,
    s = _props$classes === void 0 ? {} : _props$classes,
    _props$current = props.current,
    current = _props$current === void 0 ? 0 : _props$current,
    _props$dataList = props.dataList,
    dataList = _props$dataList === void 0 ? [] : _props$dataList;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: s.root,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: classnames(s.steps, s.stepsIcon),
      },
      dataList.map(function(item, index) {
        return /*#__PURE__*/ React.createElement(
          'div',
          {
            className: classnames(
              s.step,
              _defineProperty({}, s.stepLine, index < dataList.length - 1),
              _defineProperty({}, s.stepActiveLine, index < current),
            ),
            key: index,
          },
          /*#__PURE__*/ React.createElement('div', {
            className: classnames(
              s.icon,
              _defineProperty({}, s.iconActive, index <= current),
              _defineProperty({}, s.iconActiveOut, index === current),
            ),
          }),
        );
      }),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: s.steps,
      },
      dataList.map(function(item, index) {
        return /*#__PURE__*/ React.createElement(
          'div',
          {
            className: classnames(
              s.step,
              _defineProperty({}, s.stepActive, index <= current),
              _defineProperty({}, s.bold, index === current),
            ),
            key: index,
          },
          item,
        );
      }),
    ),
  );
};

var index$3 = withStyles(styles$3)(Steps);

/**
 * styles
 */
var styles$4 = createStyles({
  root: {
    fontSize: '13px',
    color: '#7d7d80',
    background: '#fff',
    textAlign: 'center',
    padding: '30px 0',
  },
  img: {
    display: 'block',
    width: '50px',
    height: '42px',
    margin: '0 auto 20px',
    backgroundImage: 'url('.concat(empty, ')'),
    backgroundSize: '100% 100%',
  },
});

var Empty = function Empty(props) {
  var _props$classes = props.classes,
    s = _props$classes === void 0 ? {} : _props$classes,
    _props$text = props.text,
    text = _props$text === void 0 ? '暂无数据' : _props$text,
    loading = props.loading;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: s.root,
    },
    loading
      ? /*#__PURE__*/ React.createElement(ActivityIndicator, {
          text: 'loading...',
        })
      : /*#__PURE__*/ React.createElement(
          React.Fragment,
          null,
          /*#__PURE__*/ React.createElement('div', {
            className: s.img,
          }),
          /*#__PURE__*/ React.createElement('p', null, text),
        ),
  );
};

var Empty$1 = withStyles(styles$4)(Empty);

/**
 * styles
 */
var styles$5 = createStyles({
  root: {
    width: '88%',
  },
  title: {
    fontSize: '17px',
    fontWeight: 'bold',
    color: '#323232',
    marginTop: '8px',
  },
  red: {
    color: '#F54D4F',
    fontSize: '17px',
  },
});

var noon$3 = function noon() {};

var ModalWrap = function ModalWrap(props) {
  var _props$classes = props.classes,
    s = _props$classes === void 0 ? {} : _props$classes,
    visible = props.visible,
    title = props.title,
    _props$className = props.className,
    className = _props$className === void 0 ? s.root : _props$className,
    _props$onClose = props.onClose,
    onClose = _props$onClose === void 0 ? noon$3 : _props$onClose,
    _props$footer = props.footer,
    footer =
      _props$footer === void 0
        ? [
            {
              text: /*#__PURE__*/ React.createElement(
                'div',
                {
                  className: s.red,
                },
                '\u77E5\u9053\u4E86',
              ),
              onPress: onClose,
            },
          ]
        : _props$footer,
    _props$transparent = props.transparent,
    transparent = _props$transparent === void 0 ? true : _props$transparent,
    resProps = _objectWithoutProperties(props, [
      'classes',
      'visible',
      'title',
      'className',
      'onClose',
      'footer',
      'transparent',
    ]);

  return /*#__PURE__*/ React.createElement(
    _Modal,
    Object.assign(
      {
        className: className,
        transparent: transparent,
        visible: visible,
        title: /*#__PURE__*/ React.createElement(
          'div',
          {
            className: s.title,
          },
          title,
        ),
        footer: footer,
        onClose: onClose,
      },
      resProps,
    ),
  );
};

var index$4 = withStyles(styles$5)(ModalWrap);

/**
 * styles
 */
var styles$6 = createStyles({
  root: {},
  title: {
    height: '50px',
    justifyContent: 'center',
    position: 'relative',
    fontWeight: 'bold',
    '& i': {
      width: '16px',
      height: '16px',
      backgroundImage: 'url('.concat(close, ')'),
      backgroundSize: '100% 100%',
      position: 'absolute',
      right: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '1px',
      background: '#ccc',
      transform: 'scaleY(0.5)',
    },
  },
});

var DrawerWrap = withStyles(function() {
  return {
    root: {
      backgroundColor: '#fff',
    },
  };
})(Drawer);

var noon$4 = function noon() {};

var DrawerModal = function DrawerModal(props) {
  var _props$classes = props.classes,
    s = _props$classes === void 0 ? {} : _props$classes,
    title = props.title,
    children = props.children,
    _props$anchor = props.anchor,
    anchor = _props$anchor === void 0 ? 'bottom' : _props$anchor,
    _props$onCancel = props.onCancel,
    onCancel = _props$onCancel === void 0 ? noon$4 : _props$onCancel,
    resProps = _objectWithoutProperties(props, [
      'classes',
      'title',
      'children',
      'anchor',
      'onCancel',
    ]);

  return /*#__PURE__*/ React.createElement(
    DrawerWrap,
    Object.assign(
      {
        onCancel: onCancel,
        anchor: anchor,
      },
      resProps,
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: s.root,
      },
      /*#__PURE__*/ React.createElement(
        Flex,
        {
          className: s.title,
        },
        title,
        /*#__PURE__*/ React.createElement('i', {
          onClick: onCancel,
        }),
      ),
      children,
    ),
  );
};

var DrawerModal$1 = withStyles(styles$6)(DrawerModal);

var styles$7 = createStyles({
  root: {
    background: '#fff',
  },
  pickerTitle: {
    fontSize: '15px',
    fontWeight: 'bold',
    height: '44px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    color: '#323233',
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '1px',
      background: '#e8e8e8',
      transform: 'scaleY(0.5)',
    },
    '& i': {
      position: 'absolute',
      right: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '22px',
      height: '22px',
      background: 'url('.concat(close, ')'),
      backgroundSe: '100% 100%',
    },
  },
  searhInputBox: {
    padding: ' 7px 15px',
    '& .search-input-content': {
      background: '#f0f1f3',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '7px',
      paddingRight: '10px',
      borderRadius: '4px',
      '& i': {
        width: '15px',
        height: '15px',
        backgroundImage: 'url('.concat(search, ')'),
        backgroundSize: '100% 100%',
      },
      '& input': {
        height: '30px',
        flex: 1,
        marginLeft: '10px',
        border: 0,
        outline: 'none',
        background: 'transparent',
      },
    },
  },
  pickerContent: {
    padding: '0 0 20px 20px',
    minHeight: '300px',
    overflow: 'auto',
    overflowScrolling: 'touch',
    '& li': {
      color: '#323233',
      height: '45px',
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: '22px',
      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '1px',
        background: '#e8e8e8',
        transform: 'scaleY(0.5)',
      },
      '&.picker-li-active': {
        color: '#f54d4f',
      },
      '& i': {
        width: '22px',
        height: '22px',
        background: 'url('.concat(check, ')'),
        backgroundSize: '100% 100%',
      },
    },
  },
});

var noon$5 = function noon() {};

var PickerSelect = function PickerSelect(props) {
  var _props$classes = props.classes,
    s = _props$classes === void 0 ? {} : _props$classes,
    visible = props.visible,
    _props$dataList = props.dataList,
    dataList = _props$dataList === void 0 ? [] : _props$dataList,
    _props$onOk = props.onOk,
    onOk = _props$onOk === void 0 ? noon$5 : _props$onOk,
    _props$onCancel = props.onCancel,
    onCancel = _props$onCancel === void 0 ? noon$5 : _props$onCancel,
    title = props.title,
    value = props.value,
    showSearchBox = props.showSearchBox,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? '请输入' : _props$placeholder,
    _props$height = props.height,
    height = _props$height === void 0 ? 300 : _props$height;
  var timeeInput = useRef(null);

  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    search = _useState2[0],
    setSearch = _useState2[1];

  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    filterList = _useState4[0],
    setFilterList = _useState4[1]; // 搜索框改变

  var onChange = useCallback(
    function(e) {
      console.log('onChange', e.target.value);
      var val = e.target.value.trim();
      setSearch(val);
      var newList = dataList.filter(function(item) {
        return item.text.indexOf(val) > -1;
      });
      setFilterList(newList);
    },
    [dataList],
  );
  useEffect(
    function() {
      setFilterList(dataList);
    },
    [dataList],
  ); // 聚焦

  var onFocus = useCallback(function() {
    if (timeeInput.current) {
      clearTimeout(timeeInput.current);
      timeeInput.current = null;
    }
  }, []); // input失去焦点

  var onBlur = useCallback(function() {
    timeeInput.current = setTimeout(function() {
      window.scroll(0, 0);
    }, 200);
  }, []);
  return /*#__PURE__*/ React.createElement(
    DrawerModal$1,
    {
      title: /*#__PURE__*/ React.createElement(
        'p',
        {
          style: {
            fontSize: '15px',
          },
        },
        title,
      ),
      visible: visible,
      anchor: 'bottom',
      onCancel: onCancel,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: s.root,
      },
      showSearchBox &&
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: s.searhInputBox,
          },
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'search-input-content',
            },
            /*#__PURE__*/ React.createElement('i', null),
            /*#__PURE__*/ React.createElement('input', {
              value: search,
              placeholder: placeholder,
              onChange: onChange,
              onFocus: onFocus,
              onBlur: onBlur,
            }),
          ),
        ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: s.pickerContent,
          style: {
            height: ''.concat(height, 'px'),
          },
        },
        filterList.length > 0
          ? filterList.map(function(item, i) {
              return /*#__PURE__*/ React.createElement(
                'li',
                {
                  key: item.value,
                  className: value === item.value ? 'picker-li-active' : '',
                  onClick: function onClick() {
                    return onOk(item);
                  },
                },
                /*#__PURE__*/ React.createElement('span', null, item.text),
                value === item.value &&
                  /*#__PURE__*/ React.createElement('i', null),
              );
            })
          : /*#__PURE__*/ React.createElement(Empty$1, {
              text: dataList.length === 0 ? '暂无数据' : '没有搜索到该银行',
            }),
      ),
    ),
  );
};

var index$5 = withStyles(styles$7)(PickerSelect);

var styles$8 = createStyles({
  root: {
    '& .am-list-item': {
      paddingLeft: 0,
      minHeight: '50px',
      '& .am-input-label': {
        color: '#333333',
        fontSize: '15px',
        marginRight: 0,
      },
      '& .am-input-control': {
        '& input': {
          fontSize: '15px',
        },
      },
    },
  },
});

var noon$6 = function noon() {};

var InputWrap = function InputWrap(props) {
  var _props$classes = props.classes,
    s = _props$classes === void 0 ? {} : _props$classes,
    _props$onExtraClick = props.onExtraClick,
    onExtraClick =
      _props$onExtraClick === void 0 ? noon$6 : _props$onExtraClick,
    resProps = _objectWithoutProperties(props, ['classes', 'onExtraClick']);

  var ref = useRef(null); // 点击extra

  var onExtraClickHandle = function onExtraClickHandle() {
    ref.current.focus();
    onExtraClick();
  };

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: s.root,
    },
    /*#__PURE__*/ React.createElement(
      _InputItem,
      Object.assign(
        {
          ref: ref,
          onExtraClick: onExtraClickHandle,
        },
        resProps,
      ),
    ),
  );
};

var index$6 = withStyles(styles$8)(InputWrap);

var styles$9 = createStyles({
  root: {
    '& .am-list-body::before': {
      display: 'none !important',
    },
  },
});

var ListWrap = function ListWrap(props) {
  var _props$classes = props.classes,
    s = _props$classes === void 0 ? {} : _props$classes,
    resProps = _objectWithoutProperties(props, ['classes']);

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: s.root,
    },
    /*#__PURE__*/ React.createElement(_List, Object.assign({}, resProps)),
  );
};

var index$7 = withStyles(styles$9)(ListWrap);

var styles$a = createStyles({
  root: {
    '& .am-list-item': {
      paddingLeft: 0,
      '& .am-list-line': {
        paddingRight: 0,
        '& .am-list-content, & .am-list-extra': {
          fontSize: '15px',
        },
        '& .am-list-content': {
          color: '#333333',
          width: '102px',
          flex: 'initial',
        },
        '& .am-list-extra': {
          color: 'rgba(51,51,51,0.40)',
          flex: 1,
          textAlign: 'left',
          whiteSpace: 'normal',
        },
      },
    },
    dateValue: {
      '& .am-list-extra': {
        color: '#333333 !important',
      },
    },
  },
});

var Item$2 = _List.Item;

var ItemWrap = function ItemWrap(props) {
  var _props$classes = props.classes,
    s = _props$classes === void 0 ? {} : _props$classes,
    resProps = _objectWithoutProperties(props, ['classes']);

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: s.root,
    },
    /*#__PURE__*/ React.createElement(Item$2, Object.assign({}, resProps)),
  );
};

var index$8 = withStyles(styles$a)(ItemWrap);

export {
  index$2 as DateRange,
  DrawerModal$1 as DrawerModal,
  Empty$1 as Empty,
  index as ImagePicker,
  index$6 as InputWrap,
  index$8 as ItemWrap,
  index$7 as ListWrap,
  index$4 as ModalWrap,
  index$5 as PickerSelect,
  index$3 as Steps,
  index$1 as ValidRange,
};
