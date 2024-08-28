function threeSumClosest(nums: number[], target: number): number {
    if (!nums || nums.length < 3) {
      return -1;
    }
    let res = Infinity;
    nums.sort((prev, next) => prev - next);

    for(let i = 0; i < nums.length; i++) {
      let start = i + 1, end = nums.length -1;
      while(start < end) {
        const sum = nums[i] + nums[start] + nums[end];

        if (sum === target) {
          return target;
        } else {
          if (Math.abs(res - target) > Math.abs(sum - target) ) {
            res = sum;
          }
          
          if (sum > target) {
            end--;
          } else {
            start++;
          }
        }
      }
    }
    return res;
};