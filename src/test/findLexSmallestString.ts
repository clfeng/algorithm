function findLexSmallestString(s: string, a: number, b: number): string {
  let set = new Set<string>();

  find(s);
  let min = '';
  [...set].forEach(item => {
    if (min) {
      min = compare(item, min);
    } else {
      min = item;
    }
  })

  return min;

  function compare (str1: string, str2: string) {
    return str1 > str2 ? str1 : str2; 
  }

  function find(str: string) {
    if (set.has(str)) {
      return;
    }

    let result1 = move(str);
    let result2 = add(str);
    set.add(result1);
    set.add(result2);
    find(result1);
    find(result2);
  }

  function move(str: string): string {
    return `${str.slice(-b)}${str.slice(0, b)}`;
  }

  function add(str: string): string {
    let arr = str.split('');
    for(let i = 1; i < arr.length; i + 2) {
      arr[i] = String((Number(arr[i]) + a) % 10);
    }

    return arr.join('');
  }
};