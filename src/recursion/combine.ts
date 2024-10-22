// function combine(n: number, k: number): number[][] {
//   const res: number[][] = [];
//   backtrace([]);
//   return res;

//   function backtrace(arr: number[]) {
//     if (arr.length === k) {
//       res.push([...arr]);
//       return;
//     }

//     for (let i = 1; i <= n; i++) {
//       if (arr[arr.length - 1] >= i) {
//         continue;
//       }
//       arr.push(i);
//       console.log('before backtrace', arr);
//       backtrace(arr);
//       arr.pop();
//       console.log('after backtrace', arr);
//     }
//   }
// };

function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  backtrace(1, []);
  return res;

  function backtrace(start: number, arr: number[]) {
    if (arr.length === k) {
      res.push([...arr]);
      return;
    }

    for (let i = start; i <= n; i++) {
      if (n - i + 1 < k - arr.length) {
        continue;
      }
      arr.push(i);
      backtrace(i + 1, arr);
      arr.pop();
    }
  }
};

combine(4, 2)