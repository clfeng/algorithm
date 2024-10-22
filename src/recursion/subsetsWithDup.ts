function subsetsWithDup(nums: number[]): number[][] {
  const ret: number[][] = [];
  const vis = new Array(nums.length).fill(false);
  nums.sort((a, b) => a - b);
  backtrace(0, []);
  return ret;


  function backtrace(start: number, arr: number[]){
    ret.push([...arr]);

    for(let i = start; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1]) {
        continue;
      }
      arr.push(nums[i]);
      vis[i] = true;
      backtrace(i + 1, arr);
      vis[i] = false;
      arr.pop();
    }
  }
};