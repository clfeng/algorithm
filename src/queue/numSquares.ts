function numSquares(n: number): number {

  // [num, step]：意思为n走多少步可以到达数字num
  const queue: [number, number][] = [[n, 0]];
  const visited: boolean[] = new Array(n + 1).fill(false);

  while (queue.length) {
    const [num, step] = queue.shift()!;
    for(let i = 1; ; i++) {
      const nextNum = num - i * i;
      if (nextNum < 0) {
        break;
      }
      if (nextNum === 0) {
        return step + 1;
      }
      if (!visited[nextNum]) {
        queue.push([nextNum, step + 1]);
        visited[nextNum] = true;
      }
    }
  }

  throw new Error('program error');

};