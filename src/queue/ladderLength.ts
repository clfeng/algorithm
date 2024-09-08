function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  // 做一下去重
  wordList = [...new Set(wordList)];
  const queue: [string, number][] = [[beginWord, 1]];
  while (queue.length) {
    const [word, step] = queue.shift()!;

    for (let i = wordList.length - 1; i >= 0; i--) {
      const item = wordList[i];

      // 只相差一个字母
      if (isOneWordDiff(item, word)) {
        if (item === endWord) {
          return step + 1;
        }
        queue.push([item, step + 1]);
        wordList.splice(i, 1);
      }
    }
  }
  return 0;
};

function isOneWordDiff(wordA: string, wordB: string): boolean {
  let diffCount = 0;
  for (let i = 0; i < wordA.length; i++) {
    if (wordA[i] !== wordB[i]) {
      diffCount++;
      if (diffCount > 1) {
        return false;
      }
    }
  }

  return diffCount <= 1;
}
