function solve(board: string[][]): void {
  if (!board.length) {
    return;
  }

  const m = board.length;
  const n = board[0].length;
  const d = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  const visited = Array.from({length: m}, () => new Array(n).fill(false));


  for(let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const arr = dfs(i, j, []);
      if (isAroundX(arr)) {
        // 将对应的元素都反转
        for (const [x, y] of arr) {
          board[x][y] = 'X';
        }
      }
    }
  }

  function inArea(x: number, y: number): boolean {
    return x >= 0 && x < m && y >= 0 && y < n;
  }

  // (x, y) 为遍历的起始点
  // arr 为当前考虑反正成 X 的点，并将起最终返回
  // 返回后判断 arr 中的点是否都被X包围
  function dfs (x: number, y: number, arr: [number, number][]): [number, number][] {
    if (!inArea(x, y) || board[x][y] === 'X' || visited[x][y]) {
      return arr;
    }

    arr.push([x, y]);
    visited[x][y] = true;

    for(let i = 0; i <d.length; i++){
      const newX = x + d[i][0];
      const newY = y + d[i][1];
      dfs(newX, newY, arr);
    }

    return arr;
  }

  function isAroundX (arr: [number, number][]): boolean {
    if (!arr.length) {
      return false;
    }

    for (const [x, y] of arr) {
      for(let i = 0; i < d.length; i++){
        const newX = x + d[i][0];
        const newY = y + d[i][1];
        
        // 说明该点是靠近边界的
        if (!inArea(newX, newY)) {
          return false;
        }

        if (!(board[newX][newY] === 'X' || visited[newX][newY])) {
          return false;
        }
      }
    }
    return true;
  }
};