import fetch from '../fetchStatic';

// 获取省份名称及映射编码的列表
export function getProvinceList() {
  const url = '/frontres/provinces.json';

  return fetch({ url });
}
