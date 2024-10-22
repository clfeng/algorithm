function exist(board: string[][], word: string): boolean {
  if (!board.length) {
   return false; 
  }
  const m = board.length;
  const n = board[0].length;
  const d = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  const visited = Array.from({length: m}, () => new Array(n).fill(false));

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if (searchWord(board, i, j, word, 0)) {
        return true;
      }
    }
  }

  return false;

  function inArea (x: number, y: number): boolean {
    return x >= 0 && x < m && y >= 0 && y < n;
  }

  // 从 board 面板的 startX 和 startY 位置开始查找 word.slice(wordIndex) 这个单词
  // 隐式条件：必须包含board[startX][startY]这个字母
  function searchWord(
    board: string[][], 
    startX: number, 
    startY: number,
    word: string, 
    wordIndex: number, 
  ): boolean {
    if (wordIndex === word.length - 1) {
      return board[startX][startY] === word[wordIndex];
    }

    if (board[startX][startY] !== word[wordIndex]) {
      return false;
    }

    visited[startX][startY] = true;
    for(let k = 0; k < d.length; k++) {
      const newX = startX + d[k][0];
      const newY = startY + d[k][1];

      if (inArea(newX, newY) && !visited[newX][newY]) {
        if (searchWord(board, newX, newY, word, wordIndex + 1)) {
          return true;
        }
      }
    }

    visited[startX][startY] = false;
    return false;
  }
}