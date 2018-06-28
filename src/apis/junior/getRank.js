// 获取排名
import fetch from '../fetchApi';

/**
 * @desc 获取排名👌
 * @param admission 准考证号
 * @returns {Promise<undefined|null|*>}
 */
export async function getRank(admission) {
  const url = '/api/common/rank';

  return fetch({ url, data: { admission }, silence: true });
}
