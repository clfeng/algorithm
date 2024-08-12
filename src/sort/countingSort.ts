import { genTestArr, validateSort } from "../utils";

/* 计数排序 */
function countingSort(nums: number[]): void {
  let m = nums[0];
  for (const num of nums) {
    m = Math.max(m, num);
  }

  const counter = new Array(m + 1).fill(0);
  // 统计
  for (const num of nums) {
    counter[num]++;
  }

  // 计算前缀和
  for(let i = 1; i <= m; i++) {
    counter[i] += counter[i - 1]
  }

  const res: number[] = new Array(nums.length);
  for(let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    res[counter[num] - 1] = num;
    counter[num]--;
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = res[i];
  }
}

validateSort(genTestArr(20, 0, 6), countingSort);