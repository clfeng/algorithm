
function minSubArrayLen(target: number, nums: number[]): number {
    // [i, j] 为当前考察数组
    let i = 0, j = 0;
    let sum = nums[i];
    let result = nums.length + 1;
    while (j < nums.length) {
      if (sum < target) {
        j++;
        sum += nums[j];
      } else {
        result = Math.min(j - i + 1, result);
        sum -= nums[i];
        i++;
      }
    }

    return result > nums.length ? 0 : result;
};
let result = minSubArrayLen(6, [10,2,3])
console.log(result);