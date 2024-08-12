import { genTestArr, swap, validateSort } from "../../utils";

function partition (nums: number[], left: number, right: number): number {
  swap(nums, left, left + Math.floor(Math.random() * (right - left + 1)));
  const base = nums[left]

  // [left + 1,...,j]为小于base的，[j+1, i) 为大于等于base的
  let i = left + 1;
  let j = left;
  while(i <= right) {
    if (nums[i] < base) {
      swap(nums, ++j, i++);
    } else {
      i++;
    }
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

validateSort(genTestArr(10, 1, 100), quickSort);