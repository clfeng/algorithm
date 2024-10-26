function partition(s: string): string[][] {
  const ret: string[][] = [];
  _partition(s, []);
  return ret;


  // str 为准备分割的字符串
  // arr 为已经分割好的回文串
  function _partition (str: string, arr: string[]) {
    if (!str) {
      ret.push([...arr]);
      return;
    }

    // i 表示的是选定的切割点
    for(let i = 0; i < str.length; i++) {
      const subStr = str.slice(0, i + 1);
      if (!isValid(subStr)) {
        continue;
      }

      arr.push(subStr);
      _partition(str.slice(i + 1), arr);
      arr.pop();
    }
  }

  // 需要判断字符串是否是回文串
  function isValid(str: string): boolean {
    if (str.length === 1) {
      return true;
    }
    let start = 0;
    let end = str.length - 1;

    while (start <= end) {
      if (str[start] === str[end]) {
        start++;
        end--;
      } else {
        return false
      }
    }

    return true;
  }
};