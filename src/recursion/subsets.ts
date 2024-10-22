function subsets(nums: number[]): number[][] {
  const ret: number[][] = [];
  backtrace(0, []);
  return ret;
  function backtrace(start: number, arr: number[]) {
    ret.push([...arr]);

    for(let i = start; i < nums.length; i++) {
      arr.push(nums[i]);
      backtrace(i + 1, arr);
      arr.pop();
    }
  }
};