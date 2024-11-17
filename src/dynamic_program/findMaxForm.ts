
function count(str: string) {
  let zeroCnt = 0;
  let oneCnt = 0;
  for (const element of str) {
    if (element === '0') {
      zeroCnt++;
    } else {
      oneCnt++;
    }
  }
  return {
    zero: zeroCnt,
    one: oneCnt,
  }
}
// function findMaxForm(strs: string[], m: number, n: number): number {
//   /*
//     每个字符串都可以选或者不选，选的话会导致 m 和 n 减少
//     dp[i][k][p]: 从 str[0, ...i] 中选择的最大（子串的数量）的子串集合，并且子串的0个数不超过k，1不超过n
//     dp[i][k][p] = Math.max(dp[i - 1][k][p], 1 + dp[i - 1][k - x])[k - y];
//   */

//   if (!strs.length) {
//     return 0;
//   }
//   let len = strs.length;
//   let dp = Array.from({ length: 2 }, () => {
//     return Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
//   });
//   let firstStrCnt = count(strs[0]);

//   for (let k = firstStrCnt.zero; k <= m; k++) {
//     for (let p = firstStrCnt.one; p <= n; p++) {
//       dp[0][k][p] = 1;
//     }
//   }

//   for(let i = 1; i < len; i++) {
//     let strCnt = count(strs[i]);
//     for(let k = 0; k <= m; k++) {
//       for(let p = 0; p <= n; p++) {
//         if (k - strCnt.zero < 0 || p - strCnt.one < 0) {
//           dp[i % 2][k][p] = dp[(i - 1) % 2][k][p]
//         } else {
//           dp[i % 2][k][p] = Math.max(dp[(i - 1) % 2][k][p], 1 + dp[(i - 1) % 2][k - strCnt.zero][p - strCnt.one])
//         }
//       }
//     }
//   }

//   return dp[(len - 1) % 2][m][n];
  
// };


function findMaxForm(strs: string[], m: number, n: number): number {
  /*
    每个字符串都可以选或者不选，选的话会导致 m 和 n 减少
    dp[i][k][p]: 从 str[0, ...i] 中选择的最大（子串的数量）的子串集合，并且子串的0个数不超过k，1不超过n
    dp[i][k][p] = Math.max(dp[i - 1][k][p], 1 + dp[i - 1][k - x])[k - y];
  */

  if (!strs.length) {
    return 0;
  }
  let len = strs.length;
  let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  let firstStrCnt = count(strs[0]);

  for (let k = firstStrCnt.zero; k <= m; k++) {
    for (let p = firstStrCnt.one; p <= n; p++) {
      dp[k][p] = 1;
    }
  }

  for(let i = 1; i < len; i++) {
    let strCnt = count(strs[i]);
    for(let k = m; k >= 0; k--) {
      for(let p = n; p >= 0; p--) {
        if (k - strCnt.zero >= 0 && p - strCnt.one >= 0) {
          dp[k][p] = Math.max(dp[k][p], 1 + dp[k - strCnt.zero][p - strCnt.one])
        }
      }
    }
  }

  return dp[m][n];
};