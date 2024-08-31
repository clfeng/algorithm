function evalRPN(tokens: string[]): number {
    const oprSet = new Set(['+', '-', '*', '/']);
    const nums: number[] = [];

    for (const item of tokens) {
      if (!oprSet.has(item)) {
        nums.push(Number(item));
        continue;
      }

      const num1 = nums.pop()!;
      const num2 = nums.pop()!;
      if (typeof num1 === 'undefined' || typeof num2 === 'undefined') {
        throw new Error('input is invalid');
      }
      let result: number;

      if (item === '+') {
        result = num2 + num1;
      } else if (item === '-') {
        result = num2 - num1;
      } else if (item === '*') {
        result = num2 * num1;
      } else {
        result = num2 / num1;
      }

      if (result < 0) {
        nums.push(Math.ceil(result))
      } else {
        nums.push(Math.floor(result))
      }

    }

    return nums.pop()!;
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))