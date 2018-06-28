import getLastProvince from './getLastProvince';
import getLocatedProvince from './getLocatedProvince';

// 获取省份名称
export default async () => {
  // 获取上一次选择的省份名称
  let provinceName = await getLastProvince();

  if (!provinceName) {
    provinceName = await getLocatedProvince();
  }

  // 如果未能匹配到定位省份名称，则直接返回北京
  return provinceName || '北京';
}
