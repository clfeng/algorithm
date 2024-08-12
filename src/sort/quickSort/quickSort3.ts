import { genTestArr, swap, validateSort } from "../../utils";

function _quickSort(nums: number[], left: number, right: number) {
  if (left >= right) {
    return;
  }
  // [left + 1, lt] 小于v，[lt + 1, i) 等于 v, [gt, right] 大于 v
  const index = left + Math.floor(Math.random() * (right - left + 1))
  swap(nums, left, index);
  const v = nums[left];
  let lt = left, gt = right + 1, i = left + 1;
  while(i < gt) {
    if (nums[i] < v) {
      swap(nums, lt + 1, i);
      lt++;
      i++;
    } else if (nums[i] > v) {
      swap(nums, gt - 1, i);
      gt--;
    } else {
      i++;
    }
  }

  swap(nums, left, lt);
  _quickSort(nums, left, lt - 1);
  _quickSort(nums, gt, right);  

}
function quickSort(nums: number[]) {
  return _quickSort(nums, 0, nums.length - 1)
}

validateSort(genTestArr(10, 1, 3), quickSort);