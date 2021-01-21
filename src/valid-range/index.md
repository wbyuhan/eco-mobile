---
group:
  title: ValidRange 证件有效期
---

# ValidRange 证件有效期

## 基本用法

<code src="./demo/base" />

## 结合 form 使用

<code src="./demo/form" />

## 更改默认项

<code src="./demo/extend" />

## 外部处理日期 toast 提示

<code src="./demo/out" />

## API

### ValidRange

| 属性         | 说明                     | 类型                    | 默认值                                 |
| ------------ | ------------------------ | ----------------------- | -------------------------------------- |
| value        | 开始结束日期             | `Array`                 | `[]`                                   |
| onChange     | 日期改变回调             | `(value, type) => void` | -                                      |
| labels       | 开始结束标签名           | `Array`                 | `['证件起始日期:', '证件终止日期:']`   |
| titles       | 开始结束日期弹窗标题     | `Array`                 | `['起始日期', '终止日期']`             |
| placeholders | 开始结束日期 placeholder | `Array`                 | `['请选择起始日期', '请选择终止日期']` |
| forerverText | checked 的文本显示       | `string`                | `长期`                                 |
| foreverDate  | checked 的日期显示       | `Array`                 | `9999-12-31`                           |
| minDate      | 最小可选日期             | `Date`                  | `new Date(1980, 0, 1, 23, 59, 59)`     |
| maxDate      | 最大可选日期             | `Date`                  | `new Date(2060, 11, 30, 23, 59, 59)`   |
| cache        | 切换长期按钮是否恢复原值 | `boolean`               | `true`                                 |
