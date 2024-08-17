function lengthOfLongestSubstring(s: string): number {
  if (!s.length) {
    return 0;
  }
  // [i, j] 为不重复子串
  let i = 0, j = 0, len = 1, set = new Set(), max = 1;
  set.add(s[0]);
  while (j < s.length - 1) {
    if (set.has(s[j + 1])) {
      set.delete(s[i]);
      i++;
    } else {
      set.add(s[j + 1]);
      j++;
      max = Math.max(max, j - i + 1);
    }
  }
  return max;
};