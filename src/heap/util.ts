/* 获取左子节点的索引 */
export function left(i: number): number {
  return 2 * i + 1;
}

/* 获取右子节点的索引 */
export function right(i: number): number {
  return 2 * i + 2;
}

/* 获取父节点的索引 */
export function parent(i: number): number {
  return Math.floor((i - 1) / 2); // 向下整除
}