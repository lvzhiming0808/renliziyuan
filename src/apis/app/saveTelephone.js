import fetch from '../fetchApi';

//保存用户手机号接口
export default (data)=>{
  const url = '/api/common/telephone';
  return fetch({url, method:'POST', data});
}
