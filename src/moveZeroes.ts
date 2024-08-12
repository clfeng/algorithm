/**
 Do not return anything, modify nums in-place instead.
 */
// 采用冒泡排序的思路
// function moveZeroes(nums: number[]): void {
//   // [i, len -1]为有序部分
//   const len = nums.length;
//   for(let i = len; i > 0; i--){
//     let flag = false;
//     // 对 [0, i - 1] 部分进行冒泡处理
//     for(let j = 0; j < i - 1; j++) {
//       if (nums[j] === 0) {
//         swap(nums, j, j + 1);
//         flag = true;
//       }
//     }
//     if (!flag) {
//       break;
//     }
//   }
// };


function swap (nums: number[], i: number, j: number) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}


// 快慢指针的思路
function moveZeroes(nums: number[]): void {
  // [0, k] 为非0部分
  let k = -1;
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== k) {
        swap(nums, i, ++k)
      } else {
        k++;
      }
    }
  }
}
const nums = [0,1,0,3,12];
moveZeroes(nums);

console.log(nums);