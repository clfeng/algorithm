import { genTestArr, validateSort } from "../utils";


function merge(nums: number[], left: number, mid: number, right: number) {
  // 将[left, mid] 和 [mid + 1, right] 数组进行合并
  const temp = new Array(right - left + 1);
  let i = left, j = mid + 1, k = 0;
  while (i <= mid && j <= right) {
    if (nums[i] <= nums[j]) {
      temp[k++] = nums[i++];
    } else {
      temp[k++] = nums[j++];
    }
  }
  while (i <= mid) {
    temp[k++] = nums[i++];
  }
  while (j <= right) {
    temp[k++] = nums[j++];
  }

  for (let t = 0; t < temp.length; t++) {
    nums[left + t] = temp[t]
  }
}
// function _mergeSort (nums: number[], left: number, right: number) {
//   if (left >= right) {
//     return;
//   }

//   const mid = Math.floor(left + (right - left) / 2);
//   _mergeSort(nums, left, mid);
//   _mergeSort(nums, mid + 1, right);
//   merge(nums, left, mid, right);
// }

// function mergeSort (nums: number[]) {
//   return _mergeSort(nums, 0, nums.length - 1);
// }

//---------------不要拆分阶段，直接合并---------------------
function mergeSort (nums: number[]) {
  const len = nums.length;
  let subArrLen = 2;
  while (subArrLen <= len) {
    let left = 0, right = left + subArrLen - 1;
    while (left < len) {
      let mid = Math.floor(left + (right - left) / 2);
      merge(nums, left, mid, right);
      left = right + 1;
      right = left + subArrLen - 1;
      right = right >= len - 1 ? len - 1 : right; // 防止越界
    }
    subArrLen = subArrLen * 2;
  }

  merge(nums, 0, subArrLen / 2 - 1, len - 1)
}


validateSort(genTestArr(10, 1, 100), mergeSort)