function combinationSum3(k: number, n: number): number[][] {
  const ret: number[][] = [];

  backtrace(1, []);
  return ret;

  function backtrace (start: number, arr: number[]) {
    if (arr.length === k) {
      const sum = arr.reduce((total, cur) => {
        total += cur;
        return total;
      }, 0);
      if (sum === n) {
        ret.push([...arr]);
      }
      return;
    }

    for(let i = start; i <= 9; i++) {
      arr.push(i);
      backtrace(i + 1, arr);
      arr.pop();
    }
  }
};