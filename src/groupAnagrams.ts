function groupAnagrams(strs: string[]): string[][] {
    let map = new Map<string, string[]>();
    for (const item of strs) {
      const key = Array.from(item).sort().join('-');
      if (map.has(key)) {
        const arr = map.get(key)!;
        arr.push(item);
      } else {
        map.set(key, [item]);
      }
    }

    return [...map.values()];
};