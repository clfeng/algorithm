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

// function maxDepth(root: TreeNode | null): number {
//   if (!root) {
//     return 0;
//   }
//   const queue: [TreeNode, number][] = [[root, 1]];
//   let max = 1;

//   while(queue.length) {
//     const [node, level] = queue.shift()!;
//     max = Math.max(level, max);
//     node.left && queue.push([node.left, level + 1]);
//     node.right && queue.push([node.right, level + 1]);
//   }

//   return max;
// };


function maxDepth(root: TreeNode | null): number {

  return _maxDepth(root, 0);

  function _maxDepth(root: TreeNode | null, level: number): number {
    if (!root) {
      return level;
    }

    return Math.max(
      _maxDepth(root.left, level + 1),
      _maxDepth(root.right, level + 1)
    )
  }
};

