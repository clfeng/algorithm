import { swap } from "../utils";

function removeDuplicates(nums: number[]): number {
    // [0, k) 为出现次数不超过两次的元素
    let k = 2;
    for(let i = k; i < nums.length; i++) {
      if (nums[i] !== nums[k -2]) {
        if (i !== k) {
          swap(nums, i, k)
        }
        k++;
      }
    }
    return k;
};