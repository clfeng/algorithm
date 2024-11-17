function wiggleMaxLength(nums: number[]): number {
    /*
      dp[i]: 在nums[0, ..., i]中选择子序列且必选nums[i]的最终摆动子序列；
      值为带符号的数字，-2 表示最长的自序列长度为2，前最后一项与倒数第二项的差值为负数

      if (dp[j] < 0) {
        if (nums[i] > nums[j] && Math.abs(dp[j]) + 1 > Math.abs(dp[i])) {
          dp[i] = Math.abs(dp[j]) + 1
        }
      } else if (dp[j] > 0) {
        if (dp[j] === 1) {
          if (dp[i])
        }
      }
    */

  const n = nums.length;
  const dp = new Array(n).fill(1);

  for(let i = 1; i < n; i++) {
    for(let j = 0; j < i; j++) {
      if (dp[j] < 0) {
        if (nums[i] > nums[j] && Math.abs(dp[j]) + 1 > Math.abs(dp[i])) {
          dp[i] = Math.abs(dp[j]) + 1;
        }
      } else { // 不会等于0
        if (dp[j] === 1) {
          if (dp[i] !== dp[j]) {
            
          }
        }
      }
    }


  }


};