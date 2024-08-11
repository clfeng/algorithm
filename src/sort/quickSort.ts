import { genTestArr, swap, validateSort } from "../utils";

/* 选取三个候选元素的中位数 */
function medianThree(
  nums: number[],
  left: number,
  mid: number,
  right: number
): number {
  let l = nums[left],
      m = nums[mid],
      r = nums[right];
  // m 在 l 和 r 之间
  if ((l <= m && m <= r) || (r <= m && m <= l)) return mid;
  // l 在 m 和 r 之间
  if ((m <= l && l <= r) || (r <= l && l <= m)) return left;
  return right;
}
/* 哨兵划分 */
function partition(nums: number[], left: number, right: number): number {
  // nums[left] 作为基准
  const med = medianThree(
    nums,
    left,
    Math.floor(left + (right - left) / 2),
    right,
  )
  swap(nums, left, med);
  let i = left;
  let j = right;
  while(i < j) {
    while(i < j && nums[j] >= nums[left]) {
      j--;
    }

    while (i < j && nums[i] <= nums[left]) {
      i++;
    }

    swap(nums, i, j);
  }
  swap(nums, i, left);
  return i;
}


function _quickSort(nums: number[], left: number, right: number): void {
  // if (left >= right) {
  //   return;
  // }
  // const pivot = partition(nums, left, right);
  // _quickSort(nums, left, pivot - 1);
  // _quickSort(nums, pivot + 1, right);

  // 尾递归优化
  while(left < right) {
    const pivot = partition(nums, left, right);
    if (pivot - left < right - pivot) {
      _quickSort(nums, left, pivot - 1);
      left = pivot + 1;
    } else {
      _quickSort(nums, pivot + 1, right);
      right = pivot - 1;
    }
  }
  
}


function quickSort(nums: number[]) {
  return _quickSort(nums, 0, nums.length - 1)
}

validateSort(genTestArr(10, 1, 100), quickSort)