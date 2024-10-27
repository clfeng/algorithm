function numSquares(n: number): number {
  const memo = new Array(n + 1).fill(Infinity);
  memo[0] = 0;
  memo[1] = 1;

  for(let i = 2; i <= n; i++) {
    
    // 求解memo[i]
    for(let j = 1; j ** 2 <= i; j++) {
      memo[i] = Math.min(memo[i], 1 + memo[i - j**2])
    }
  }

  return memo[n];
}