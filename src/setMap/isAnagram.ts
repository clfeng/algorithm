function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
      return false;
    }

    const map: Record<string, number> = {};
    for (const item of s) {
      if (map.hasOwnProperty(item)) {
        map[item]++;
      } else {
        map[item] = 1;
      }
    }

    for (const item of t) {
      if (map.hasOwnProperty(item) && map[item] > 0) {
        map[item]--;
      } else {
        return false;
      }
    }

    return true;
};