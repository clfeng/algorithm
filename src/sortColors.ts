import { swap } from "./utils";

/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  // [0, m] 为红色， [n, len - 1] 为蓝色
  const red = 0, blue = 2, len = nums.length;
  let m = -1, n = len, i =0;
  while(i < n) {
    if (nums[i] === red) {
      swap(nums, i++, ++m)
    } else if(nums[i] === blue) {
      swap(nums, i, --n)
    } else {
      i++
    }
  }
};