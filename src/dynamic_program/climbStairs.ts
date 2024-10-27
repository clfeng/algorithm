// // 递归 + 记忆化搜索
// function climbStairs(n: number): number {
//   const memo = new Array(n + 1).fill(-1);
//   memo[1] = 1;
//   memo[2] = 2;
//   return _climbStairs(n);
//   function _climbStairs(n: number): number {
//     if (memo[n] !== -1) {
//       return memo[n];
//     }
//     memo[n] = _climbStairs(n - 1) + _climbStairs(n - 2);
//     return memo[n]
//   }
// };

// 基于动态规划的思路
function climbStairs(n: number): number {
  if (n <= 2) {
    return n;
  }
  const memo = new Array(n + 1).fill(-1);
  memo[1] = 1;
  memo[2] = 2;

  for(let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
}

console.log(climbStairs(3));