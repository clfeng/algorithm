// function minimumTotal(triangle: number[][]): number {
//   const m = triangle.length;
//   const n = triangle[m - 1].length
//   const memo = Array.from({ length: m }, () => new Array(n).fill(Infinity));

//   for (let i = 0; i < triangle[m - 1].length; i++) {
//     memo[m - 1][i] = triangle[m - 1][i];
//   }

//   return _minimumTotal(0, 0);

//   function _minimumTotal(row: number, col: number) {
//     if (Math) {
      
//     }
//     if (memo[row][col] !== Infinity) {
//       return memo[row][col]
//     }
//     memo[row][col] = Math.min(_minimumTotal(row + 1, col), _minimumTotal(row + 1, col + 1)) + triangle[row][col];

//     return memo[row][col]
//   }
// };


// function minimumTotal(triangle: number[][]): number {
//   if (triangle.length < 1) {
//     throw new Error('input invalid');
    
//   }
//   if (triangle.length === 1) {
//     return triangle[0][0];
//   }
//   const m = triangle.length;
//   const n = triangle[m - 1].length
//   const memo = Array.from({ length: m }, () => new Array(n).fill(Infinity));

//   // 初始状态
//   for (let i = 0; i < triangle[m - 1].length; i++) {
//     memo[m - 1][i] = triangle[m - 1][i];
//   }

//   for(let i = m - 2; i >= 0; i--) {
//     for(let j = 0; j < triangle[i].length; j++) {
//       memo[i][j] = Math.min(memo[i + 1][j], memo[i + 1][j + 1]) + triangle[i][j];
//     }
//   }

//   return memo[0][0];
// }

// 优化空间
function minimumTotal(triangle: number[][]): number {
  if (triangle.length < 1) {
    throw new Error('input invalid');
    
  }
  if (triangle.length === 1) {
    return triangle[0][0];
  }
  const m = triangle.length;
  const memo = [];

  // 初始状态
  for (let i = 0; i < triangle[m - 1].length; i++) {
    memo[i] = triangle[m - 1][i];
  }

  for(let i = m - 2; i >= 0; i--) {
    for(let j = 0; j < triangle[i].length; j++) {
      memo[j] = Math.min(memo[j], memo[j + 1]) + triangle[i][j];
    }
  }

  return memo[0];
}


console.log(minimumTotal([[-1],[2,3],[1,-1,-3]]));