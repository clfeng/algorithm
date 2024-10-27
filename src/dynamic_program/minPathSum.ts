function minPathSum(grid: number[][]): number {
  if (!grid.length) {
    throw new Error('invalid input');
  }

  const m = grid.length;
  const n = grid[0].length;
  const memo = new Array(n).fill(0);

  memo[n - 1] = grid[m - 1][n - 1];
  // 初始状态：求最后一行
  for(let j = n - 2; j >= 0; j--) {
    memo[j] = memo[j + 1] + grid[m - 1][j];
  }

  for(let i = m - 2; i >= 0; i--) {
    for(let j = n - 1; j >= 0; j--) {
      if (j + 1 < n) {
        memo[j] = grid[i][j] + Math.min(memo[j + 1], memo[j]);
      } else {
        memo[j] = grid[i][j] + memo[j];
      }
    }
  }

  return memo[0]
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));