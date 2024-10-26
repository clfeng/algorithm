function solveNQueens(n: number): string[][] {

  const ret: string[][] = [];
  const rows: number[] = [];
  const cols = new Array(n).fill(false); // 标明哪列已经有放置了皇后了
  const dia1 = new Array(2*n - 1).fill(false); // 从右上到做下对角线：对角线上 x + y 等于固定值
  const dia2 = new Array(2*n + 1).fill(false); // 从左上到右下的对角线：对角线上 x - y 等于固定值，为了都大于0都 加上 n - 1


  putQueue(0, rows);

  return ret;


  // 往第index行放入皇后
  function putQueue(index: number, rows: number[]) {
    if (index === n) {
      ret.push(genQueueStr(rows));
      return;
    }

    for(let i = 0; i < n; i++) {
      if (cols[i] || dia1[index + i] || dia2[i - index + n - 1]) {
        continue;
      }
      rows.push(i);
      cols[i] = true;
      dia1[index + i] = true;
      dia2[i - index + n - 1] = true;
      putQueue(index + 1, rows);
      rows.pop();
      cols[i] = false;
      dia1[index + i] = false;
      dia2[i - index + n - 1] = false;
    }
  }

  function genQueueStr (rows: number[]): string[] {
    const res: string[] = [];
    for (const item of rows) {
      const strArr = new Array(n).fill('.')
      strArr[item] = 'Q';
      res.push(strArr.join(''));
    }
    return res;
  }
};