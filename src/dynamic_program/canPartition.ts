// function canPartition(nums: number[]): boolean {
//   /*
//   sum: 为 nums 所有元素的和
//   target: 取出的子集合的和
//   dp[i][j]: 考虑下标[0, i]这个区间李的所有整数，在它们当中是否能够选出一些数，使得这些数之和恰好为整数 j

//   不选择nums[i]: dp[i][j] = dp[i - 1][j]
//   选择nums[i]:
//     1. nums[i] == j, dp[i][j] = true
//     2. nums[i] < j, dp[i][j] = dp[i - 1][j - nums[i]]
//   */

//   let len = nums.length;
//   if (!len) {
//     return false;
//   }

//   const sum = nums.reduce((prev, cur) => {
//     return prev + cur;
//   }, 0);

//   const target = sum / 2;
//   if (Math.floor(target) !== Math.ceil(target)) {
//     return false;
//   }
//   if (nums[0] === target) {
//     return true;
//   }

//   const dp = new Array(target + 1).fill(false);
//   if (nums[0] <= target) {
//     dp[nums[0]] = true;
//   }

//   for(let i = 1; i < len; i++) {
//     for (let j = target; j >= 0; j--) {
//         if (nums[i] === j) {
//           dp[j] = true;
//           continue;
//         }

//         dp[j] = dp[j];
//         if (j - nums[i] >= 0) {
//           dp[j] = dp[j] || dp[j - nums[i]];
//         }

//     }
//     if (dp[target]) {
//       return true;
//     }
//   }

//   return dp[target];
// };




// 采用记忆化搜索的思路
// function canPartition(nums: number[]): boolean {
//   if (!nums.length) {
//     return false;
//   }

//   const sum = nums.reduce((prev, cur) => cur += prev);
//   if (sum % 2 !== 0) {
//     return false;
//   }
//   const len = nums.length;
//   const target = sum / 2;
//   const memo = Array.from({length: len}, () => new Array(target + 1).fill(-1))

//   return tryPartition(nums, len - 1, target);


//   // [0, ..., index] 中的数据是否能刚好填充容量为sum的背包
//   function tryPartition (nums: number[], index: number, sum: number): boolean {
//     if (sum === 0) {
//       return true;
//     }

//     if (index < 0 || sum < 0) {
//       return false;
//     }

//     if (memo[index][sum] !== -1) {
//       return !!memo[index][sum]
      
//     }

//     memo[index][sum] = (tryPartition(nums, index - 1, sum - nums[index]) || tryPartition(nums, index - 1, sum)) ? 1 : 0;
//     return memo[index][sum];
//   }
// }


// 采用动态规划的思路
function canPartition(nums: number[]): boolean {
  if (!nums.length) {
    return false;
  }

  const sum = nums.reduce((prev, cur) => cur += prev);
  if (sum % 2 !== 0) {
    return false;
  }
  const len = nums.length;
  const target = sum / 2;

  // dp[i][j]: 使用 nums[0, ...i]中的元素能否刚好填充容量为C的背包
  // dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]]
  const dp = new Array(target + 1).fill(false);
  
  // 初始化
  dp[nums[0]] = true;

  for(let i = 1; i < len; i++) {
    for(let j = target; j >= 0; j--) {
      if (j - nums[i] >= 0) {
        dp[j] = dp[j] || dp[j - nums[i]];
      } else {
        dp[j] = dp[j]
      }
    }
  }
  return dp[target];
}
