/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "../utils";

// function minDepth(root: TreeNode | null): number {
//     // 层次遍历，并且记录节点当前所在层次，找到叶子节点后结束遍历
//   if (!root) {
//     return 0;
//   }
//   const queue: [TreeNode, number][] = [[root, 1]];
//   while (queue.length) {
//     const [node, level] = queue.shift()!;
//     if (!node.left && !node.right) {
//       return level;
//     }
//     node.left && queue.push([node.left, level + 1]);
//     node.right && queue.push([node.right, level + 1]);
//   }

//   throw new Error('logic error');
// };

function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  
  if (root.left && root.right) {
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  } else if (root.left) {
    return minDepth(root.left) + 1;
  } else if (root.right) {
    return minDepth(root.right) + 1;
  } else {
    return 1;
  }
}