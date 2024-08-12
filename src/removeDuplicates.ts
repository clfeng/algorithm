import { swap } from "./utils";

function removeDuplicates(nums: number[]): number {
    // [0, k) 为非重复元素
    let k = 1;
    for(let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[k - 1]) {
        if (i !== k) {
          swap(nums, i, k)
        }
        k++;
      }
    }

    return k;
};