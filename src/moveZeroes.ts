/**
 Do not return anything, modify nums in-place instead.
 */
// 采用冒泡排序的思路
// function moveZeroes(nums: number[]): void {
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < nums.length - i; j++) {
//        // j 和 j + 1 的对比
//        if (nums[j] === 0) {
//         swap(nums, j, j + 1);
//        }
//     }
//   }
// };


// 采用选择排序的思路
function moveZeroes(nums: number[]): void { 
  nums.sort((prev, next) => {
    if (prev === 0) {
      return 1;
    } else {
      return 0;
    }
  })
}


function swap (nums: number[], i: number, j: number) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
const nums = [0,1,0,3,12];
moveZeroes(nums);

console.log(nums);