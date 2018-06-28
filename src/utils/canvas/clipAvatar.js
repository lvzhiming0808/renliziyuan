const defaultParams = {
  // canvasContext
  ctx: null,
  // 图片路径
  img: null,
  // 圆的x坐标
  x: 0,
  // 圆的y坐标
  y: 0,
  // 圆的大小
  r: 100
};

export function clipAvatar(params = defaultParams) {
  const {ctx, img, x, y, r} = params;

  if (!ctx || !img) {
    console.error('未传入canvasContext或者图片路径');
    return;
  }

  // 保存当前绘制上下文
  ctx.save();

  // 开启新的绘制上下文
  ctx.beginPath();

  // 绘制圆形绘制区域
  ctx.arc(x, y, r, 0, 2 * Math.PI);

  // 选定绘制的圆形区域
  ctx.clip();

  // 绘制头像
  ctx.drawImage(img, x - r, y - r, 2 * r, 2 * r);

  // 恢复保存的绘制上下文
  ctx.restore();
};
