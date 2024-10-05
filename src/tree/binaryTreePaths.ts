import { TreeNode } from "../utils";

function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root) {
    return [];
  }

  const paths: string[] = [];
  getPath(root, '', paths);
  return paths;

  function getPath(root: TreeNode | null, path: string, paths: string[]) {
    if (!root) {
      return;
    }

    const isLeaf = !root.left && !root.right;
    path = path.length ? `${path}->${root.val}` : `${root.val}`;
    if (isLeaf) {
      paths.push(path);
      return;
    }
    getPath(root.left, path, paths);
    getPath(root.right, path, paths);

  }
};