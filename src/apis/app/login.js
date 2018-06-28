import fetch from '../fetchApi';

// 登录接口
export default (data) => {
  const url = '/user/login';

  return fetch({ url, method: 'POST', data });
}
