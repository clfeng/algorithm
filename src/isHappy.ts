function isHappy(n: number): boolean {
  const set = new Set<number>();
  while (!set.has(n)) {
    if (n === 1) {
      return true;
    }
    set.add(n);
    n = n.toString().split("").reduce((result, cur) => {
      result += Math.pow(Number(cur), 2);
      return result;
    }, 0);
  }

  return false;
};