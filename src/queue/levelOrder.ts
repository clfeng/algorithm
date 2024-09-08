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

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) {
      return [];
    }

    const result: number[][] = [];
    const queue: [TreeNode, number][] = [[root, 0]];
    while (queue.length) {
      let [node, level] = queue.shift()!;
      if (!result[level]) {
        result[level] = [];
      }
      result[level].push(node.val);
      node.left && queue.push([node.left, level + 1]);
      node.right && queue.push([node.right, level + 1]);
    }

    return result;
};