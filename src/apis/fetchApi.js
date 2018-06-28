import wepy from 'wepy';
import config from './config';

export default async (params = { url: '', method: 'GET', data: {}, silence: false }) => {
  // 开启loading
  !params.silence && wepy.showLoading({
    title: '加载中',
    icon: 'loading',
    mask: true
  });

  // 发送请求
  let response;

  try {
    response = await wepy.request({
      url: `${config.host}${config.prefix}${params.url}`,
      method: params.method,
      data: params.data,
      header: {
        'Authorization': wepy.getStorageSync('Authorization'),
        'Content-Type': 'application/json',
        'charset': 'utf-8',
        'appType':1
      }
    });

    // 隐藏loading
    !params.silence && wepy.hideLoading();

  }
  catch (e) {
    // 隐藏loading
    !params.silence && wepy.hideLoading();

    !params.silence && wepy.showToast({
      title: '网络异常，请重试~',
      icon: 'none',
      duration: 3000
    });

    return;
  }

  // http请求失败toast
  if (response.statusCode !== 200) {
    !params.silence && wepy.showToast({
      title: '失败，请重试~',
      icon: 'loading',
      duration: 3000
    });

    return null;
  }

  // http请求成功且errorCode为403，表示token失效
  if (response.data && +response.data.errorCode === 403) {
    !params.silence && wepy.showToast({
      title: '服务超时，请重新尝试~',
      icon: 'none',
      duration: 3000
    });

    // 删除storage中的token
    await wepy.removeStorageSync('Authorization');
    /*wepy.redirect({
      url:,
      params:
    })*/

    return null;
  }

  // 成功
  return response.data;

}
