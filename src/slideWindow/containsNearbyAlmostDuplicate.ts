function containsNearbyAlmostDuplicate(nums: number[], indexDiff: number, valueDiff: number): boolean {
  if (nums.length < indexDiff) {
    return false;
  }

  return false;
};


// 需要一个数据结构
// 给一个数组[]，在新增元素的时候可以保持有序性
// logn 的复杂度找到符合条件的元素，可以基于快排来，但是快排会改变数组的中元素的顺序