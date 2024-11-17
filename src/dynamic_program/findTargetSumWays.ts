// function findTargetSumWays(nums: number[], target: number): number {
//   let count = 0;

//   dfs(0, 0);
//   function dfs (index: number, sum: number) {
//     if (index === nums.length) {
//       if (sum === target) {
//         count++;
//       } 
//       return;
//     }

//     const num = nums[index];
//     dfs(index + 1, sum + num);
//     dfs(index + 1, sum - num);
//   }

//   return count;
// };


function findTargetSumWays(nums: number[], target: number): number {
  const sum = nums.reduce((sum, cur) => sum + cur);
  if ((sum - target) % 2 !== 0 || sum - target < 0) {
    return 0;
  }
  const len = nums.length;
  const neg = (sum - target) / 2;
  const dp = Array.from({length: len + 1}, () => new Array(neg + 1).fill(0));

  dp[0][0] = 1;
  for(let i = 1; i <= len; i++) {
    const num = nums[i - 1];
    for(let j = 0; j <= neg; j++) {
      if (num > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - num];
      }
    }
  }

  return dp[len][neg];
}