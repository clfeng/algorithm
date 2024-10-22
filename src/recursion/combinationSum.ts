function combinationSum(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);
    
    const res: number[][] = [];
    backtrace(target, []);
    return res;

    function backtrace(target: number, arr: number[]) {
      if (target === 0) {
        res.push([...arr]);
        return;
      }
      if (target < 0) {
        return;
      }

      for(let i = 0; i < candidates.length; i++) {
        const element = candidates[i];
        if (element < arr[arr.length - 1]) {
          continue;
        }

        arr.push(element);
        backtrace(target - element, arr);
        arr.pop();
      }
    }
};