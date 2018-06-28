import fetch from '../fetchStatic';

// 获取应用程序的相关配置项
export function getConfigList() {
  const url = '/frontres/captions.json';

  return fetch({ url });
}
