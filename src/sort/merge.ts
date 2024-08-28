/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // [k, len - 1]为有序部分
    let i = m - 1; // 遍历 nums1 数组的指针
    let j = n - 1; // 遍历 nums2 数组的指针
    let k = nums1.length;
    while(i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
        nums1[--k] = nums1[i--];
      } else {
        nums1[--k] = nums2[j--];
      }
    }
    while(i >= 0) {
      nums1[--k] = nums1[i--];
    }
    while(j >= 0) {
      nums1[--k] = nums2[j--];
    }
 };