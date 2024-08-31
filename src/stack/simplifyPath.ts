function simplifyPath(path: string): string {
  const pathArr = path.split('/');
  const stack: string[] = [];

  for (const item of pathArr) {
    if (item === '.' || item === '') {
      continue;
    } else if (item === '..') {
      stack.pop();
    } else {
      stack.push(item);
    }
  }

  let result = stack.join('/');
  return `/${result}`;
};