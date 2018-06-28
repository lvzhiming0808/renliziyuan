import { getProvinceList } from '../../apis';

// 根据传入的省份名称，返回对应的编码code
export default async (provinceName = '北京') => {

  // 获取省份名称及映射编码的列表
  const provinceList = await getProvinceList();

  // 各个省份键值对对象组成的数组
  const provinces = [];

  // 遍历传入的由字母分类的省份列表数组，提取出省份键值对对象
  provinceList.forEach(indexedProvinces => {
    provinces.push(...indexedProvinces.items);
  });

  // 查找出匹配的省份对象
  const matchedProvince = provinces.find(item => {
    return provinceName.includes(item.key);
  });

  // 如果未能匹配到省份对象，则直接返回北京市的编码
  return matchedProvince ? matchedProvince.value : '11';
}
