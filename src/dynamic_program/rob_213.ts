function rob(nums: number[]): number {
  /*
  如果不偷最后一间房子则考虑的是：[0, n - 2]
  如果不偷第一间房子则考虑的是：[1, n - 1]
  */
  const n = nums.length;
  if (nums.length === 0) {
    return 0
  } else if (nums.length === 1) {
    return nums[0];
  }
  
  return Math.max(robRange(0, n - 2), robRange(1 , n - 1))

  function robRange(start:number, end: number): number {
    const memo = new Array(n).fill(0);
    memo[start] = nums[start];
    for(let i = start + 1; i <= end; i++) {
      if (i - 2 >= start) {
        memo[i] = Math.max(nums[i] + memo[i - 2], memo[i -  1]);
      } else {
        memo[i] = Math.max(nums[i], memo[i - 1])
      }
    }

    return memo[end];
  }
};


