function letterCombinations(digits: string): string[] {
  if (!digits) {
    return [];
  }
  const letterMap: Record<string, string[]> = {
    '2': 'abc'.split(''),
    '3': 'def'.split(''),
    '4': 'ghi'.split(''),
    '5': 'jkl'.split(''),
    '6': 'mno'.split(''),
    '7': 'pqrs'.split(''),
    '8': 'tuv'.split(''),
    '9': 'wxyz'.split(''),
  };

  const res: string[] = [];

  function findCombination (digits: string, index: number, s: string) {
    if (index === digits.length) {
      res.push(s);
      return;
    }

    const letter = digits[index];
    const letterWords = letterMap[letter];

    for (const w of letterWords) {
      findCombination(digits, index + 1, s + w);
    }
  }

  findCombination(digits, 0, '');
  return res;

};