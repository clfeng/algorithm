// function numDecodings(s: string): number {
//   let memo = new Map<string, number>();
  
//   function _decode (s: string): number  {
//     if (s.startsWith('0')) {
//       return 0;
//     }
//     if (s.length === 0 || s.length === 1) {
//       return 1;
//     }

//     if (memo.has(s)) {
//       return memo.get(s)!;
//     }

//     let ret = 0;
//     // 取一位
//     ret += _decode(s.slice(1));

//     // 取两位
//     let twoChar = s.slice(0, 2);
//     if (Number(twoChar) <= 26) {
//       ret += _decode(s.slice(2));
//     }

//     memo.set(s, ret);
//     return ret;
//   }

//   return _decode(s);

// };

// console.log(numDecodings("12"));

function numDecodings(s: string): number {
  if (s.startsWith('0')) {
    return 0;
  }

  if (s.length === 1) {
    return 1;
  }

  let memo = new Array(s.length).fill(0);
  memo[0] = 1;

  for(let i = 1; i < s.length; i++) {
    let count = 0;
    if (s[i] !== '0') {
      count += memo[i - 1];
    }

    // 两个字符
    let num = s.slice(i - 1, i + 1);
    if (num.length === 2 && !num.startsWith('0') && Number(num) <= 26) {
      if (i - 2 >= 0) {
        count += memo[i - 2];
      } else {
        count += 1;
      }
    }

    memo[i] = count;
  }
  return memo[s.length - 1];
};

console.log(numDecodings("12"));