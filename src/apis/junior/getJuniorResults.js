import fetch from '../fetchApi';

// 获取初级查询结果
export async function getJuniorResults(data) {
  const url = '/api/junior/results';

  return fetch({ url, data });
}
