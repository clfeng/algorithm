import { TreeNode } from "../utils";

function sumNumbers(root: TreeNode | null): number {
  const result: string[] = [];
  traverse(root, '', result);
  return result.reduce((sum, cur) => {
    return sum += Number(cur);
  }, 0)


  function traverse(root: TreeNode | null, path: string, result: string[]) {
    if (!root) {
      return;
    }
    const isLeaf = !root.left && !root.right;
    path = `${path}${root.val}`;

    if (isLeaf) {
      result.push(path);
      return;
    }

    traverse(root.left, path, result);
    traverse(root.right, path, result);
  }
};