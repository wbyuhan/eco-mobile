---
group:
  title: DateRange 日期范围
---

# DateRange 日期范围

## 基本用法

<code src="./demo/base" />

## API

### DateRange

| 属性         | 说明                     | 类型                    | 默认值                                 |
| ------------ | ------------------------ | ----------------------- | -------------------------------------- |
| value        | 开始结束日期             | `Array`                 | `[]`                                   |
| onChange     | 日期改变回调             | `(value, type) => void` | -                                      |
| label        | 左侧标题                 | `string`                | `自定义日期`                           |
| tip          | 右侧文案                 | `string`                | `时间范围最长30天`                     |
| splitText    | 中间分隔文案             | `string`                | `至`                                   |
| titles       | 开始结束日期弹窗标题     | `Array`                 | `['起始日期', '终止日期']`             |
| placeholders | 开始结束日期 placeholder | `Array`                 | `['请选择起始日期', '请选择终止日期']` |
| minDate      | 最小可选日期             | `Date`                  | `new Date(1980, 0, 1, 23, 59, 59)`     |
| maxDate      | 最大可选日期             | `Date`                  | `new Date(2060, 11, 30, 23, 59, 59)`   |
