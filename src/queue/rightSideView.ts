import { TreeNode } from "../utils";

function rightSideView(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  const result: number[] = [];
  const queue: [TreeNode, number][] = [[root, 0]];
  while (queue.length) {
    const [node, level] = queue.shift()!;
    if (typeof result[level] === 'undefined') {
      result[level] = node.val;
    }

    node.right && queue.push([node.right, level + 1]);
    node.left && queue.push([node.left, level + 1]);
  }

  return result;
};