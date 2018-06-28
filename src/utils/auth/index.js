import wepy from 'wepy';

/**
 * @desc has special auth
 * @param authName
 * @returns {Promise<*>}
 */
export default async (authName) => {
  if (!authName) {
    console.error('未传入权限名称');
    return;
  }

  // 是否拥有与传入名称对应的权限
  let hasAuth;

  try {
    // 用户已授权的权限列表
    const { authSetting } = await wepy.getSetting();

    hasAuth = authSetting[`scope.${authName}`];
  }
  catch (e) {
    hasAuth = false;
    console.log(e);
  }

  return hasAuth;

}
