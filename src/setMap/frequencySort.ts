function frequencySort(s: string): string {
  const map = new Map<string, number>();
  for (const element of s) {
    if (map.has(element)) {
      map.set(element, map.get(element)! + 1);
    } else {
      map.set(element, 1);
    }
  }
  const arr = [...map.entries()];
  arr.sort((prev, next) => {
    return -(prev[1] - next[1])
  });
  return arr.reduce((ret, cur) => {
    ret += cur[0].repeat(cur[1]);
    return ret;
  }, "");
};