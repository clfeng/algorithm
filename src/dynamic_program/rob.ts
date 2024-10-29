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
  // f(i): 偷取前i间房子的最高金额
  // 状态转移方程：f(i) = Math.max(nums[i] + f(i - 2), f(i - 1))
  if (nums.length <= 1) {
    return nums[0];
  }

  const len = nums.length;
  const memo = new Array(len).fill(0);
  memo[0] = nums[0];
  memo[1] = Math.max(nums[0], nums[1]);

  for(let i = 2; i < len; i++) {
    memo[i] = Math.max(nums[i] + memo[i - 2], memo[i - 1]);
  }

  return memo[len - 1];
}
