// function lengthOfLIS(nums: number[]): number {
//   if (!nums.length) {
//     return 0;
//   }  

//   const memo = new Array(nums.length).fill(1);

//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i]) {
//         memo[i] = Math.max(memo[i], memo[j] + 1)
//       }
//     }
//   }

//   let max = 0;
//   memo.forEach(item => {
//     max = Math.max(item, max);
//   })
//   return max;
// };


// 贪心算法 + 二分查找
// function lengthOfLIS(nums: number[]): number {
//   if (!nums.length) {
//     return 0;
//   }

//   let len = 1, n = nums.length;
//   // d[i]: 表示长度为 i 的最长上升子序列的末尾元素的最小值
//   const d: number[] = [];
//   d[len] = nums[0];
//   for (let i = 0; i < n; i++) {
//     if (nums[i] > d[len]) {
//       d[++len] = nums[i];
//     } else {
//       let l = 1, r = len, pos = 0;
//       while (l <= r) {
//         let mid = Math.floor(l + (r -l) / 2);

//         if (d[mid] < nums[i]) {
//           pos = mid;
//           l = mid + 1;
//         } else {
//           r = mid - 1;
//         }
//       }
//       d[pos + 1] = nums[i];
//     }
//   } 
//   console.log([...d])
//   return len;
// };






function lengthOfLIS(nums: number[]): number {
  if (!nums.length) {
    return 0;
  }

  let d: number[] = [nums[0]];

  for(let i = 1; i < nums.length; i++) {
    if (nums[i] > d[d.length - 1]) {
      d.push(nums[i]);
    } else {
      // 更新d，使得上升更慢 
      let l = 0, r = nums.length - 1, pos = -1;

      // 在d数组中找到比nums[i]小的最后元素进行替换
      while(l <= r) {
        let mid = Math.floor(l + (r - l) / 2);
        if (d[mid] < nums[i]) {
          // 找到比 nums[i] 小的元素，记录下位置，继续尝试找比nums[i] 小且角标更多的元素
          pos = mid;
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }

      d[pos + 1] = nums[i];
    }
  }
  return d.length;
}
lengthOfLIS([10,9,2,5,3,7,101,18])