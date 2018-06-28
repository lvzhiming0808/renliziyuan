import wepy from 'wepy';

// 获取上一次选择的省份名称
export default async () => {
  try {
    const storedProvince = await wepy.getStorageSync('province');

    return storedProvince.key;
  }
  catch (e) {
    return '';
  }
};
