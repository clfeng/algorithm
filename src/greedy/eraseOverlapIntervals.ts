// function eraseOverlapIntervals(intervals: number[][]): number {
//     if (!intervals.length) {
//       return 0;
//     }
//     intervals.sort((prev, next) => {
//       if (prev[0] === next[0]) {
//         return prev[1] - next[1];
//       }  
//       return prev[0] - next[0];
//     });

//     // 动态规划实现，类似最长上升子序列
//     const memo = new Array(intervals.length).fill(1);

//     for(let i = 1; i < intervals.length; i++) {
//       for(let j = 0; j < i; j++) {
//         if (intervals[j][1] <= intervals[i][0]) {
//           memo[i] = Math.max(memo[i], memo[j] + 1);
//         }
//       }
//     }

//     let res = 1;
//     for (const count of memo) {
//       res = Math.max(res, count);
//     }

//     return intervals.length - res;
// };


function eraseOverlapIntervals(intervals: number[][]): number {
    if (!intervals.length) {
      return 0;
    }

    // 贪心算法基本思路：选择的区间的结尾越小，留给后面区间的空间就越大
    intervals.sort((prev, next) => {
      if (prev[1] !== next[1]) {
        return prev[1] - next[1];
      }

      return prev[0] - next[0];
    });

    let res = 1, prev = 0;
    for(let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] >= intervals[prev][1]) {
        res++;
        prev = i;
      }
    }
  
    return intervals.length - res;
};


