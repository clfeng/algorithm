function findAnagrams(s: string, p: string): number[] {
  if (s.length < p.length) {
    return [];
  }
  const len = p.length;
  const pMap = createMap(p, 0, len - 1);
  const sMap = createMap(s, 0, len - 1);
  const result = [];
  // [i, j] 为当前考察的子串
  let i = 0, j = len - 1;
  while(j < s.length) {
    if (isAnagram(pMap, sMap)) {
      result.push(i);
    }
    
    decreaseMap(sMap, s[i]);
    increaseMap(sMap, s[j + 1]);
    i++;
    j++;
  }
  return result;
  
  function decreaseMap (map: Map<string, number>, item: string) {
    if (map.has(item)) {
      const count = map.get(item)!;
      map.set(item, count - 1);
    } else {
      throw new Error(`sMap hasn't ${item}`);
    }
  }

  function increaseMap (map: Map<string, number>,item: string) {
    if (map.has(item)) {
      const count = map.get(item)!;
      map.set(item, count + 1);
    } else {
      map.set(item, 1);
    }
  }

  function createMap (s: string, l: number, r: number){
    const map: Map<string, number> = new Map();
    for(let i = l; i <= r; i++) {
      if (map.has(s[i])) {
        const count = map.get(s[i])!;
        map.set(s[i], count + 1);
      } else {
        map.set(s[i], 1);
      }
    }
    return map;
  }

  function isAnagram(pMap: Map<string, number>, sMap: Map<string, number>): boolean {
      for (const [key, count] of pMap.entries()) {
        if (!sMap.has(key)) {
          return false;
        } else {
          if (count !== sMap.get(key)) {
            return false
          }
        }
      }

      return true
  }
};


const map = new Map();
map.set('a', 1);
map.set('b', 2);
const copyMap = structuredClone(map);
console.log(copyMap)
