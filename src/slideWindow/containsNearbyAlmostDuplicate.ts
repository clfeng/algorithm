function containsNearbyAlmostDuplicate(nums: number[], indexDiff: number, valueDiff: number): boolean {
  if (nums.length < indexDiff) {
    return false;
  }

  // 维护一个有序的数组 orderArr， 每次往内部提出 l 元素，添加 l + indexDiff 元素
  let l = 0, r = indexDiff;
  let orderArr = nums.slice(l, r + 1);
  orderArr.sort();
  for(let i = 1; i < orderArr.length; i++ ) {
    if (Math.abs(orderArr[i] - orderArr[i - 1]) <= valueDiff) {
      return true;
    }
  }

  while (r <= nums.length) {
    orderArr = orderArr.filter(item => nums[l] !== item);
    l++;
    r++;
    const pos = getInsertPos(orderArr, nums[r]);
    orderArr.splice(pos + 1, 0, nums[r]);
    if (Math.abs(orderArr[pos + 1] - orderArr[pos]) <= valueDiff) {
      return true;
    } else if (pos + 1 <= orderArr.length && Math.abs(orderArr[pos + 2] - orderArr[pos + 1]) <= valueDiff) {
      return true
    }
  }

  return false;
};

function getInsertPos (nums: number[], num: number) {
  let l = 0, r = nums.length - 1, pos = -1;
  while (l < r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (nums[mid] > num) {
      r = mid - 1;
    } else {
      l = mid + 1;
      pos = mid;
    }
  }

  return pos;

}


console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3))