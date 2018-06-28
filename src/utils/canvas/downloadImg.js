import wepy from 'wepy';

/**
 * @desc download resource
 * @param url
 * @returns {Promise<string>}
 */
export async function downloadImg(url) {
  if (!url) {
    console.error('未传入资源文件的url');
    return '';
  }

  try {
    const { statusCode, tempFilePath } = await wepy.downloadFile({ url });

    return statusCode === 200 ? tempFilePath : '';
  }
  catch (e) {
    return '';
  }

}
