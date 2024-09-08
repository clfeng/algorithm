function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {
  wordList = [...new Set(wordList)];
  const result: string[][] = [];
  const queue: [string, string[]][] = [[beginWord,[beginWord]]];
  let minPathLen = Infinity;
  while (queue.length) {
    const [word, paths] = queue.shift()!;

    for (let i = wordList.length - 1; i >= 0; i--) {
      const item = wordList[i];

      // 只相差一个字母
      if (isOneWordDiff(item, word)) {
        if (item === endWord) {
          const fullPaths = [...paths, item];
          minPathLen = Math.min(fullPaths.length, minPathLen);
          if (fullPaths.length <= minPathLen) {
            result.push(fullPaths);
          }
        } else {
          queue.push([item, [...paths, item]]);
          wordList.splice(i, 1);
        }
      }
    }
  }
  return result.filter(paths => paths.length <= minPathLen);
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

console.log(findLadders("red", "tax", ["ted","tex","red","tax","tad","den","rex","pee"]))