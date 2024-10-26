function pacificAtlantic(heights: number[][]): number[][] {
  if (!heights.length) {
    return [];
  }

  const po = 'po'; // 太平洋
  const ao = 'ao'; // 大西洋
  const memMap = new Map<string, Set<string>>();
  function canFlow(flowSet: Set<string>) {
    return flowSet.has(po) && flowSet.has(ao);
  }

  const m = heights.length;
  const n = heights[0].length;
  const visited = Array.from({length: m}, () => new Array(n).fill(false));
  const d = [[0, -1], [1, 0], [0, 1], [-1, 0]];

  function canFlowPO (x: number, y: number){
    return x === 0 || y == 0
  }

  function canFlowAO (x: number, y: number) {
    return x === m - 1 || y === n - 1;
  }

  function inArea(x: number, y: number): boolean {
    return x >= 0 && x < m && y >= 0 && y < n;
  }

  const ret: number[][] = [];
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      const flowSet = new Set<string>();
      dfs(i, j, flowSet);
      if (canFlow(flowSet)) {
        ret.push([i, j]);
      }

      memMap.set(`${i}-${j}`, flowSet);
    }
  }

  return ret;

  function dfs(x: number, y: number, flowSet: Set<string>) {
    const memKey = `${x}-${y}`;
    if (memMap.has(memKey)) {
      const set = memMap.get(memKey)!;
      [...set].forEach(item => flowSet.add(item));
    }
    visited[x][y] = true;
    if (canFlowPO(x, y)) {
      flowSet.add(po);
    }

    if (canFlowAO(x, y)) {
      flowSet.add(ao)
    }

    if (canFlow(flowSet)) {
      visited[x][y] = false;
      return;
    }

    for(let i = 0; i < d.length; i++) {
      const newX = d[i][0] + x;
      const newY = d[i][1] + y;
      if (inArea(newX, newY) && !visited[newX][newY] && heights[x][y] >= heights[newX][newY]) {
        dfs(newX, newY, flowSet);
      }
    }
    visited[x][y] = false;
  }
};