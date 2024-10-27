// function rob(nums: number[]): number {
//   const memo = new Array(nums.length).fill(-1);
//   function _rob(startIndex: number): number {
//     if (startIndex >= nums.length) {
//       return 0;
//     }

//     if (memo[startIndex] !== -1) {
//       return memo[startIndex]
//     }

//     let ret = Math.max(nums[startIndex] + _rob(startIndex + 2), _rob(startIndex + 1));
//     memo[startIndex] = ret;
//     return ret;
//   }

//   return _rob(0);
// };
function rob(nums: number[]): number {
  // 状态：考虑抢劫当前房子所能偷取的最大价值
  // 状态转移方程：f(i) = Math.max(nums[i] + f(i + 2), f(i + 1))

  const len = nums.length;
  const memo = new Array(len).fill(0);
  memo[len - 1] = nums[len - 1];

  for(let i = len - 2; i >= 0; i--) {
    if (i + 2 < len) {
      memo[i] = Math.max(nums[i] + memo[i + 2], memo[i + 1]);
    } else {
      memo[i] = Math.max(nums[i], memo[i + 1]);
    }
  }

  return memo[0]
}