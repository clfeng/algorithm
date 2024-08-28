function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    
    for(let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        return [map.get(nums[i])!, i];
      } else {
        map.set(target - nums[i], i);
      }
    }

    // 按照题意，这里应该走不到
    return []
};