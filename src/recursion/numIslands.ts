function numIslands(grid: string[][]): number {
    if (!grid.length) {
      return 0;
    }

    const m = grid.length;
    const n = grid[0].length;
    const d = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    const visited = Array.from({length: m}, () => new Array(n).fill(false));
    let count = 0;

    for(let i = 0; i < m; i++) {
      for(let j = 0; j < n; j++) {
        if (grid[i][j] === '0' || visited[i][j]) {
          continue;
        }
        
        count++;
        floodFill(i, j);
      }
    }

    return count;

    function inArea(x: number, y: number): boolean {
      return x >= 0 && x < m && y >= 0 && y < n;
    }

    function floodFill(x: number, y: number) {
      visited[x][y] = true;

      for(let k = 0; k < d.length; k++) {
        const newX = x + d[k][0];
        const newY = y + d[k][1];
        if (inArea(newX, newY) && grid[newX][newY] === "1" && !visited[newX][newY]) {
          floodFill(newX, newY);
        }
      }
    }
};