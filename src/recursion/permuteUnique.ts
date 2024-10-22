function permuteUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const ans: number[][] = [];
  const vis = new Array(nums.length).fill(false);

  backtrack([]);
  return ans;

  function backtrack(perm: number[]) {
    if (perm.length === nums.length) {
      ans.push([...perm]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (vis[i]) {
        continue;
      }

      // 元素是重复元素，而其前面的元素没有被填入过
      if (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1]) {
        continue;
      }

      vis[i] = true;
      perm.push(nums[i]);
      backtrack(perm);
      perm.pop();
      vis[i] = false;
    }
  }
};


console.log(permuteUnique([1, 1, 2]));