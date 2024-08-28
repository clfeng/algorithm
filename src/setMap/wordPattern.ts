function wordPattern(pattern: string, s: string): boolean {
  const sArr = s.split(' ');
  if (sArr.length !== pattern.length) {
    return false;
  }

  const pMap = new Map<string, string>();
  const pValueMap = new Map<string, string>(); 
  
  for (let i = 0; i < sArr.length; i++) {
    if (pMap.has(pattern[i])) {
      if (sArr[i] !== pMap.get(pattern[i])) {
        return false;
      }
    } else {
      if (!pValueMap.has(sArr[i])) {
        pMap.set(pattern[i], sArr[i])
        pValueMap.set(sArr[i], pattern[i])
      } else {
        return false
      }
    }
  }

  return true;
};

const pattern = "abba";
const s = "dog dog dog dog";

console.log(wordPattern(pattern, s));