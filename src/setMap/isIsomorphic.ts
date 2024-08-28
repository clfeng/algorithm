function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) {
      return false;
    }

    const sMap = new Map<string, string>();
    const sValueSet = new Set<string>();
    for(let i = 0; i < s.length; i++){
      if (sMap.has(s[i])) {
        if (sMap.get(s[i]) !== t[i]) {
          return false;
        }
      } else {
        if (sValueSet.has(t[i])) {
          return false;
        }

        sMap.set(s[i], t[i]);
        sValueSet.add(t[i]);
      }
    }
    return true;
};