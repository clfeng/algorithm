import { genRandomArr, swap, validateSort } from "../utils";

/* 
冒泡排序
时间复杂度： O(n^2)
空间复杂度：O(1)
稳定排序

冒泡的优化：可以打标识，如果某次冒泡没有交换处理，说明已经排序好了
*/

// function bubbleSort(nums: number[]): void {
//   // (i, len)为排好序的部分
//   const len = nums.length;
//   for(let i = len - 1; i > 0; i--) {
//     // 将[0, i] 中的最大项冒泡到 i的位置
//     for(let j = 0; j < i; j++) {
//       if (nums[j] > nums[j + 1]) {
//         swap(nums, j, j+ 1);
//       }
//     }
//   }
// }

// function bubbleSort(nums: number[]): void {
//   // [i, len - 1]为排好序的部分
//   const len = nums.length;
//   for(let i = len; i >= 1; i--) {
//     // 将[0, i - 1]中的最大项冒泡到 i - 1的位置
//     for(let j = 0; j <= i - 2; j++) {
//       if (nums[j] > nums[j + 1]) {
//         swap(nums, j, j + 1);
//       }
//     }

//     // => [i - 1, len - 1] // 有序
//   }
// }

function bubbleSort(nums: number[]): void {
  // [0, i] 为未排序部分
  const len = nums.length;
  for(let i = len - 1; i >= 0; i--) {
    // [0, i] 冒泡，将最大项挪到右侧 i 的位置
      for(let j = 0; j < i; j++) {
        if (nums[j] > nums[j + 1]) {
          swap(nums, j, j + 1)
        }
      }
  }

}
validateSort(genRandomArr(10, 1, 100), bubbleSort);
