// function minWindow(s: string, t: string): string {
//     if (s.length < t.length) {
//       return '';
//     }

//     // [i, j] 为当前考察的子串
//     let i = 0, j = t.length - 1;
//     let min = Infinity, minIndex = -1;
//     let sMap = createMap(s, i, j);
//     let tMap = createMap(t, i, j);

//     while (j < s.length) {
//       if (isContain(sMap, tMap)) {
//         if (j - i + 1 < min) {
//           min = j - i + 1;
//           minIndex = i;
//         }
//         descrease(sMap, s[i]);
//         i++;
//       } else {
//         inscrease(sMap, s[j + 1]);
//         j++;
//       }
//     }

//     if (minIndex === -1) {
//       return '';
//     } else {
//       return s.slice(minIndex, minIndex + min);
//     }

//     function inscrease (map: Map<string,number>, char: string) {
//       if (map.has(char)) {
//         map.set(char, map.get(char)! + 1);
//       } else {
//         map.set(char, 1);
//       }
//     }

//     function descrease (map: Map<string,number>, char: string) {
//       if (map.has(char)) {
//         map.set(char, map.get(char)! - 1);
//       } else {
//         throw new Error(`map without ${char}`);
//       }
//     }

//     function createMap(str: string, left: number, right: number): Map<string, number> {
//       const map = new Map<string, number>()
//       for(let i = left; i <= right; i++) {
//         if (map.has(str[i])) {
//           map.set(str[i], map.get(str[i])! + 1);
//         } else {
//           map.set(str[i], 1);
//         }
//       }
//       return map;
//     }

//     function isContain (aMap: Map<string, number>, bMap: Map<string, number>): boolean {
//       for (const [key, count] of bMap.entries()) {
//         if (!aMap.has(key)) {
//           return false;
//         } else {
//           if (aMap.get(key)! < count) {
//             return false;
//           }
//         }
//       }
//       return true;
//     }
// };


function minWindow(s: string, t: string): string {
  if (s.length < t.length) {
    return '';
  }

  let min = Infinity, minIndex = -1;
  // map 需要的字符的数量，needKinds 记录需要的字符的种类
  // 每次需要的数量降低为0时，kinds减少，从零变非零时kinds增加

  const needCharMap: Record<string, number> = {};
  let needKinds = 0;
  for(let i = 0; i < t.length; i++) {
    if (needCharMap.hasOwnProperty(t[i])) {
      needCharMap[t[i]]++;
    } else {
      needCharMap[t[i]] = 1;
      needKinds++;
    }
  }

  // [i, j] 为当前考察的子串
  let i = 0, j = -1;
  while(j < s.length) {
    if (needKinds === 0) {
      if (j - i + 1 < min) {
        min = j - i + 1;
        minIndex = i;
      }

      if (needCharMap.hasOwnProperty(s[i])) {
        if (needCharMap[s[i]] === 0) {
          needKinds++;
        }
        needCharMap[s[i]]++;
      }

      i++;
    } else {
      j++;
      if (needCharMap.hasOwnProperty(s[j])) {
        needCharMap[s[j]]--;

        if (needCharMap[s[j]] === 0) {
          needKinds--;
        }
      }
    }
  }

  return minIndex === -1 ? "" : s.slice(minIndex, minIndex + min);
  
};

console.log(minWindow("ADOBECODEBANC", "ABC"));