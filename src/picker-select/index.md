---
group:
  title: PickerSelect 选择器
---

# PickerSelect 选择器

## 基本用法

<code src="./demo/base" />

## 带搜索框

<code src="./demo/extend" />

## API

### PickerSelect

| 属性     | 说明                                         | 类型                           | 默认值  |
| -------- | -------------------------------------------- | ------------------------------ | ------- |
| title    | 标题                                         | `string or React.ReactElement` | `-`     |
| anchor   | 出现的位置，One of: left, right, top, bottom | `enum`                         | `false` |
| visible  | 对话框是否可见                               | `boolean`                      | `false` |
| onCancel | 点击背景触发关闭事件                         | `() => void`                   | `-`     |
