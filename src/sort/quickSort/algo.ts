import { genTestArr, swap, validateSort } from "../../utils";


// hello-algo 的 partition 思路
function partition (nums: number[], left: number, right: number): number {
  const baseIndex = left + Math.floor((right - left + 1) * Math.random())
  swap(nums, baseIndex, left);
  const base = nums[left];
  let i = left, j = right;
  while(i < j) {
    while (i < j && nums[j] >= base) {
      j--;
    }

    while(i < j && nums[i] <= base) {
      i++;
    }
    swap(nums, i, j);
  }

  swap(nums, i, left)
  return i;
}


function _quickSort(nums: number[], left: number, right: number) {
  if (left >= right) {
    return;
  }
  const pivot = partition(nums, left, right);
  _quickSort(nums, left, pivot - 1);
  _quickSort(nums, pivot + 1, right)
}



function quickSort(nums: number[]) {
  return _quickSort(nums, 0, nums.length - 1)
}
validateSort(genTestArr(10, 1, 100), quickSort)