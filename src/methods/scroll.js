// https://hackmd.io/@JCtsai/H1IhyB0Ni
// 要滑到top為0的位置, 使用smooth的模式
export function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

export function scrolling() {
  // 捲軸距離視窗頂部的距離
  const scrolltoTop = window.pageYOffset;
  // 更新: 滾動前,捲軸距離視窗頂部的距離
  this.elTop = scrolltoTop;
}
