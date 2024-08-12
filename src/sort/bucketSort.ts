import { genFloatArr, validateSort } from "../utils";

// 考虑一个长度为 n 的数组，其元素是范围 [0, 1) 内的浮点数，进行桶排序
function bucketSort(nums: number[]): void {
  const k = Math.floor(nums.length / 2);
  const buckets: number[][] = Array.from({length: k}, () => []);
  for (const num of nums) {
    const i = Math.floor(num * k); // 转化后 i 的取值范围为 [0, k -1]
    buckets[i].push(num);
  }

  for (const bucket of buckets) {
    bucket.sort((prev, next) => prev - next);
  }

  let i = 0;
  for (const bucket of buckets) {
    bucket.forEach(item => {
      nums[i++] = item;
    });
  }
}

validateSort(genFloatArr(10, 0, 1), bucketSort)
// validateSort([56,82,52,79,40,5,82,9,11,61], bucketSort)