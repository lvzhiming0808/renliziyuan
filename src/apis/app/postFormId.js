import fetch from '../fetchApi';

// 提交formid接口
export default (data) => {
  const url = '/user/form';

  return fetch({ url, method: 'POST', data, silence: true });
}
