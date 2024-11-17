// function combinationSum4(nums: number[], target: number): number {
//   const memo = new Array(target + 1).fill(-1);

//   function dfs(target: number): number {
//     if (target === 0) {
//       return 1;
//     }

//     if (memo[target] !== -1) {
//       return memo[target]
//     }

//     let res = 0;

//     for (const num of nums) {
//       if (num <= target) {
//         res += dfs(target - num);
//       }

//     }
//     memo[target] = res;
//     return res
//   }
//   let ret = dfs(target)
//   return ret
// };

function combinationSum4(nums: number[], target: number): number {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for(let i = 1; i <= target; i++) {
    for (const num of nums) {
      if (num <= i) {
        dp[i] += dp[i - num];
      }
    }
  }

  return dp[target];
}