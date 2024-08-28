// 借助堆，构建大小为k的堆，来拿到结果
// 排序后，通过角标直接获取
// 通过部分快排的方式实现

import { MinHeap, swap } from "../utils";

// function findKthLargest(nums: number[], k: number): number {
//     const minHeap = new MinHeap(nums.slice(0, k));
//     for(let i = k; i < nums.length; i++) {
//       if (nums[i] > minHeap.peek()) {
//         minHeap.pop();
//         minHeap.push(nums[i]);
//       }
//     }
//     return minHeap.peek();
// };

// ----------

function partition(nums: number[], left: number, right: number): number {
  const index = left + Math.floor(Math.random() * (right - left))
  swap(nums, left, index);
  const base = nums[left];
  // [left, i] 为小于等于 base， [j, right] 为大于等于base
  let i = left, j = right;
  while(i < j) {
    while (i < j && nums[j] >= base) {
      j--;
    }

    while(i < j && nums[j] <= base) {
      i++;
    }
    swap(nums, i, j);
  }
  swap(nums, left, i);
  return i;
}
function findKthLargest(nums: number[], k: number): number {
  let left = 0;
  let right = nums.length - 1;
  while(true) {
    let pivot = partition(nums, left, right);
    if (nums.length - pivot === k) {
      return nums[pivot];
    } else if (nums.length - pivot > k) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }
};