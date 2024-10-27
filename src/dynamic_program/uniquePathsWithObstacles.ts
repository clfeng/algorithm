function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  if (!obstacleGrid.length) {
    throw new Error('invalid input');
  }
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const memo = new Array(n).fill(0);
  if (obstacleGrid[m - 1][n - 1]) {
    return 0;
  }

  for(let i = m - 1; i >= 0; i--) {
    for(let j = n - 1; j >= 0; j--) {
      if (i === m - 1 && j === n - 1) {
        // 最后一项, 作为初始状态
        memo[j] = 1;
        continue;
      }
      if (obstacleGrid[i][j] === 1) {
        memo[j] = 0;
      } else {
        if (j !== n - 1) {
          memo[j] = memo[j] + memo[j + 1];
        }
      }
    }
  }

  return memo[0];
};