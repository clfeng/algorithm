import { swap } from "./utils";

function removeElement(nums: number[], val: number): number {
    // [0, k）为 为非val值的部分
    let k = 0;
    for(let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        if (i !== k) {
          swap(nums, i, k);
        }
        k++;
      }
    }

    return k;
};