// function longestCommonSubsequence(text1: string, text2: string): number {
//   let m = text1.length;
//   let n = text2.length;
//   let memo = Array.from({length: m}, () => new Array(n).fill(-1))
//   return dfs(m - 1, n - 1)
//   function dfs(i: number, j: number): number {
//     if (i < 0 || j < 0) {
//       return 0;
//     }
//     if (memo[i][j] !== -1) {
//       return memo[i][j]
//     }
//     if (text1[i] === text2[j]) {
//       memo[i][j] = dfs(i - 1, j - 1) + 1;
//     } else {
//       memo[i][j] = Math.max(dfs(i - 1, j), dfs(i, j - 1))
//     }

//     return memo[i][j]
//   }
// };

function longestCommonSubsequence(text1: string, text2: string): number {
  let m = text1.length;
  let n = text2.length;
  let dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(0))
  
  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
};