function isValid(s: string): boolean {
    const map = new Map([
      ['(', ')'],
      ['{', '}'],
      ['[', ']'],
    ]);

    const arr = s.split('');
    const stack: string[] = [];

    while(arr.length) {
      const item = arr.pop()!;
      const topEle = stack[stack.length - 1];

      if (topEle && map.get(item) === topEle) {
        stack.pop();
      } else {
        stack.push(item);
      }
    }

    return !stack.length;
};
