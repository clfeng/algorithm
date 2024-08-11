import { genTestArr, isOrder, swap, validateSort} from '../utils';

/*
时间复杂度：O(n^2)
空间复杂度：O(1)
非稳定排序
*/

// function selectionSort (nums: number[]) {
//   const len = nums.length;
//   // [0, i] 为已经排好序部分，需要将[0, len - 2]项排序好
//   for(let i = -1; i <= len - 2; i++) {
//     // [i + 1, len - 1] 中找到最小项，放到i + 1的位置
//     let min = i + 1;
//     for(let j = min + 1; j <= len - 1; j++) {
//       if (nums[j] < nums[min]) {
//         min  = j;
//       }
//     }

//     swap(nums, i + 1, min);
//   }
// }

// function selectionSort (nums: number[]) {
//   const len = nums.length;
//   // [0, i) 为已经排序好的部分，[0, len - 1) 排序好
//   for(let i = 0; i < len - 1; i++) {
//     // 在 [i, len - 1] 中找最小值
//     let min = i;
//     for(let j = i + 1; j <= len - 1; j++) {
//       if (nums[j] < nums[min]) {
//         min = j;
//       }
//     }
//     swap(nums, i, min);
//   }
// }


// function selectionSort (nums: number[]) {
//   // [i, len - 1] 部分为排好的部分，需要将[1, len - 1] 排好序
//   const len = nums.length;
//   for (let i = len; i >= 1; i--) {
//     // [0, i - 1] 找最大值
//     let max = 0;
//     for(let j = 1; j <= i - 1; j++) {
//       if (nums[j] > nums[max]) {
//         max = j;
//       }
//     }

//     swap(nums, i - 1, max);
//   }
// }

// function selectionSort (nums: number[]) {
//   // (i, len - 1] 部分为排好序的；需要将(0, len - 1]排好序
//   const len = nums.length;
//   for(let i = len - 1; i > 0; i--) {
//     // 在 [0, i]中找最大值
//     let max = 0;
//     for(let j = 1; j <= i; j++) {
//       if (nums[j] > nums[max]) {
//         max = j;
//       }
//     }
//     swap(nums, i, max);
//   }
// }

// function selectionSort (nums: number[]) {
//   // 未排序的区间[i, len - 1];
//   const len = nums.length;
//   for (let i = 0; i <= len - 2; i++) {
//     // 从未排序的区间中寻找在小值, 放到 i 的位子
//     let min = i;
//     for(let j = i + 1; j <= len - 1; j++) {
//       if (nums[j] < nums[min]) {
//         min = j;
//       }
//     }
//     swap(nums, min, i)
//   }
// }

function selectionSort (nums: number[]) {
  // [0, i] 为未排序区间
  const len = nums.length;
  for(let i = len - 1; i >= 1; i--) {
    // 在 [0, i] 找到最大值，放到 i 的位置
    let max = 0;
    for(let j = 1; j <= i; j++) {
      if (nums[j] > nums[max]) {
        max = j;
      }
    }
    swap(nums, max, i);
  }
}

// validateSort([16,26,20,5,47,98,62,31,9,35], selectionSort);
validateSort(genTestArr(10, 1, 100), selectionSort);
