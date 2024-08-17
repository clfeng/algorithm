function threeSum(nums: number[]): number[][] {
  nums.sort((prev, next) => prev - next);
  const res: number[][] = [];
  

  for(let i = 0; i < nums.length - 2; i++) {
    if(nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    twoSum(nums, i + 1, nums.length - 1, nums[i])
  }

  return res;

  function twoSum (nums: number[], start: number, end: number, value: number) {
    const target = -value;

    let i = start, j = end;
    while(i < j) {
      if (nums[i] + nums[j] < target) {
        i++;
      } else if (nums[i] + nums[j] > target) {
        j--;
      } else {
        res.push([value, nums[i], nums[j]]);
        
        while (i < j && nums[i] === nums[i + 1]) {
          i++;
        }
        
        while(i < j && nums[j] === nums[j - 1]) {
          j--;
        }

        i++;
        j--;
      }
    }
  }
};