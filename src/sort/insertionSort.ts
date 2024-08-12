import { genRandomArr, swap, validateSort } from "../utils";

/* 
插入排序
时间复杂度： O(n^2)
空间复杂度： O(1)
稳定排序
*/

// function insertionSort(nums: number[]): void {
//   // [0, i] 为有序部分
//   const len = nums.length;
//   for(let i = 0; i < len - 1; i++) {
//     // 将 i + 1 项目，插入到 [0, i] 中
//     const base = nums[i + 1];
//     let j = i;
//     while(j >= 0 && nums[j] > base) {
//       nums[j+1] = nums[j];
//       j--;
//     }
//     nums[j + 1] = base;
//   }
// }

// function insertionSort(nums: number[]): void {
//   // (i, len) 为排序好的部分
//   const len = nums.length;
//   for(let i = len - 1; i > -1; i--) {
//     // 将 i 项，插入到 (i, len)中
//     const base = nums[i];
//     let j = i + 1;
//     while(j < len && nums[j] < base) {
//       nums[j - 1] = nums[j];
//       j++;
//     }

//     nums[j - 1] = base;
//   }
// }
function insertionSort(nums: number[]): void {
  // [0, i] 为未排序部分
  const len = nums.length;
  for(let i = len - 2; i >= 0; i--) {
    // 在 [i + 1, len - 1] 中找到适合放入 i 的位置
    const base = nums[i];
    let j = i + 1;
    while (j <= len - 1 && nums[j] < base) {
      nums[j - 1] = nums[j];
      j++;
    }
    nums[j - 1] = base;
  }
}
// validateSort(genRandomArr(10, 1, 100), insertionSort);
validateSort([6,93,46,53,57,44,91,0,6,66], insertionSort);