// 百度地图sdk
import bmap from '../../libs/bmap-wx.min';

// 获取本次定位到的省份名称
export default async (ak = 'l3a5VG27YqolNQK2vj69XTBd6oShoFo8') => {
  const bMap = new bmap.BMapWX({ ak });

  try {
    const bMapData = await new Promise((resolve, reject) => {
      bMap.regeocoding({
        fail(e) {
          reject(e);
        },
        success(data) {
          resolve(data);
        }
      });

    });

    return bMapData.originalData.result.addressComponent.province;
  }
  catch (e) {
    return '';
  }
};
