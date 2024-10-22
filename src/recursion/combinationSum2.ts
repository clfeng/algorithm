function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const vis = new Array(candidates.length).fill(false);

  const ret: number[][] = [];
  backtrace(target, []);
  return ret;

  function backtrace(target: number, arr: number[]) {
    if (target === 0) {
      ret.push([...arr]);
      return;
    }
    if (target < 0) {
      return;
    }
    for (let i = 0; i < candidates.length; i++) {
      const ele = candidates[i];

      if (vis[i] || ele < arr[arr.length - 1]) {
        continue;
      }

      if (i > 0 && candidates[i] === candidates[i - 1] && !vis[i - 1]) {
        continue;
      }

      arr.push(ele);
      vis[i] = true;
      backtrace(target - ele, arr);
      arr.pop();
      vis[i] = false;
    }
  }
};
