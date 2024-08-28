function intersection(nums1: number[], nums2: number[]): number[] {
    const resSet = new Set<number>();
    const set = new Set(nums1);
    for (const item of nums2) {
      if(set.has(item)) {
        resSet.add(item)
      }
    }

    return [...resSet];
};