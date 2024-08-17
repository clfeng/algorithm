function intersect(nums1: number[], nums2: number[]): number[] {
    let map: Record<string, number> = {};
    for (const num of nums1) {
      if (map.hasOwnProperty(num)) {
        map[num]++;
      } else {
        map[num] = 1;
      }
    }

    let result = [];
    for (const num of nums2) {
      if (map.hasOwnProperty(num) && map[num] > 0) {
        result.push(num);
        map[num]--;
      }
    }
    return result;
};