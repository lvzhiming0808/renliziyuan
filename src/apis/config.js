// 接口host
let host;
// node环境
const nodeEnv = process.env.NODE_ENV;

switch (nodeEnv) {
  // 生产环境
  case 'production':
    host = 'https://query.mp.sunlands.site';
    break;
  // 开发、测试环境
  default:
    host = 'https://query.mp.zmgongzuoshi.top';
    break;
}

// 接口前缀
const prefix = '/v2';

// 是否调试模式
const debug = nodeEnv !== 'production';

// 接口host
const config = { host, prefix, debug };

export default config;
