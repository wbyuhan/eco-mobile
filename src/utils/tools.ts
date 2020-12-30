import moment from 'moment';

/**
 * 格式化日期
 */
export function formatDate(val: Date | string, format: string = 'YYYY-MM-DD') {
  return moment(val).format(format);
}

// 转换日期
export const judeDate = (val: string | undefined) => {
  if (!val) return;
  return new Date(val);
};
