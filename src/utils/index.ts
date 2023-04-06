export function numFormat(num?: number | string) {
  if (num) {
    const res = num.toString().replace(/\d+/, function (n) {
      // 先提取整数部分
      return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
        return $1 + ",";
      });
    });
    return res;
  }
  return num;
}
