function isPalindrome(s: string): boolean {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let i = 0, j = s.length - 1;
    while(i <= j) {
      if (s[i] === s[j]) {
        i++;
        j--;
      } else {
        return false;
      }
    }

    return true;
};