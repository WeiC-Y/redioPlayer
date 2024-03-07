/*
 * @Author: wei.chenyu
 * @Date: 2024-03-04 10:02:09
 * @LastEditors: wei.chenyu
 * @LastEditTime: 2024-03-05 16:04:00
 * @Descripttion: 
 */
// 转化数字为可展示的数字格式
export const formatNum = num => {
  const str = `${parseInt(num, 10)}`;
  if (str.length === 1) {
      return `0${str}`
  }
  return str
}

// 将秒数转化为正确的时间格式，比如 10 转为 00:10
export const formatSeconds = num => {
  const min = parseInt(num / 60, 10);
  const sec = num % 60;

  return `${formatNum(min)}:${formatNum(sec)}`
}
