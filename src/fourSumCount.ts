function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  let res = 0;
  let map = new Map<number, number>();
  for(let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const sum = nums1[i] + nums2[j];
      map.set(sum, (map.get(sum) || 0) + 1)
    }
  }
  for(let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      const sum = nums3[i] + nums4[j];
      if (map.has(-sum)) {
        res += map.get(-sum)!
      }
    }
  }

  return res;
};