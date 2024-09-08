import { TreeNode } from "../utils";

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }
  const result: number[][] = [];
  const queue: [TreeNode, number][] = [[root, 0]];
  while (queue.length) {
    const [node, level] = queue.shift()!;
    const even = (level % 2) === 0;
    if (!result[level]) {
      result[level] = [];
    }
    if (even) {
      result[level].push(node.val);
    } else {
      result[level].unshift(node.val)
    }
    node.left && queue.push([node.left, level + 1]);
    node.right && queue.push([node.right, level + 1]);
  }

  return result;
};