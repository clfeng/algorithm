// function integerBreak(n: number): number {
//   let memo = new Array(n + 1).fill(-1)
//   function breakInteger(n: number): number {
//     if (n === 1) {
//       return 1;
//     }
//     if (memo[n] !== -1) {
//       return memo[n];
//     }

//     let res = -Infinity;
//     for(let i = 1; i <= n - 1; i++) {
//       res = Math.max(res, i * (n - i), i * breakInteger( n - i));
//     }

//     memo[n] = res;
//     return res;
//   }
  
//   return breakInteger(n);
// };

function integerBreak(n: number): number {
  let memo = new Array(n + 1).fill(-1)
  memo[1] = 1;
  memo[2] = 1;

  for(let i = 3; i <= n; i++) {
    for(let j = 1; j <= i - 1; j++) {
      memo[i] = Math.max(memo[i], j * (i - j), j * memo[i - j]);
    }
  }

  return memo[n];
};

console.log(integerBreak(10));