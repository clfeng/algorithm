function reverseVowels(s: string): string {
  const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const sArr = Array.from(s);
  let i = 0,j = sArr.length - 1;
  while (true) {
    while(i < sArr.length && !vowelSet.has(sArr[i])) {
      i++;
    }

    while (j >= 0 && !vowelSet.has(sArr[j])) {
      j--;
    }

    if (i < j) {
      [sArr[i], sArr[j]] = [sArr[j], sArr[i]];
      i++;
      j--
    } else {
      break;
    }
    
  }
  return sArr.join('');
};