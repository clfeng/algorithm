import { genRandomArr, swap, validateSort } from "../../utils";

function partition(nums: number[], left: number, right: number): number {
  swap(nums, left, left + Math.floor(Math.random() * (right - left + 1)));
  const base = nums[left];
  // [left + 1, ..., i) 为小于等于 base 的
  // (j, ..., right] 为大于等于 base 的
  let i = left + 1, j = right;

  while(true) {
    while(i <= right && nums[i] <= base) {
      i++;
    }

    while(j >= left + 1 && nums[j] >= base) {
      j--;
    }

    if (i > j) {
      break;
    }
    swap(nums, i, j);
    i++;
    j--;
  }

  swap(nums, left, j);
  return j;
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

validateSort(genRandomArr(10, 1, 100), quickSort);