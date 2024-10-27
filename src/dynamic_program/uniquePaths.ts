function uniquePaths(m: number, n: number): number {
  const memo = new Array(n).fill(1);

  for(let i = m - 2; i >= 0; i--) {
    for(let j = n - 1; j >= 0; j--) {
      if (j === n - 1) {
        memo[j] = memo[j];
      } else {
        memo[j] = memo[j] + memo[j + 1];
      }
    }
  }

  return memo[0];

};