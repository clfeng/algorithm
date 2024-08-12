import { genTestArr, swap, validateSort } from "../utils";

function shiftDown(nums:number[], size: number, i: number) {
  while (true) {
    let l = i * 2 + 1, r = i * 2 + 2, max = i;
    if (l < size && nums[l] > nums[max]) {
      max = l;
    }
    if (r < size && nums[r] > nums[max]) {
      max = r;
    }

    if (max === i) {
      break;
    }

    swap(nums, max, i);
    i = max;
  }
}
function heapSort(nums: number[]) {
  const len = nums.length;
  // 1. 进行堆化操作
  for(let i = Math.floor(len / 2) + 1; i >= 0; i--) {
    shiftDown(nums, len, i);
  }

  for(let size = len; size > 1; size--) {
    swap(nums, 0, size - 1);
    shiftDown(nums, size - 1, 0);
  }


}
validateSort(genTestArr(10, 1, 100), heapSort);