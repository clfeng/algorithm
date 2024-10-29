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

import { createTree, TreeNode } from "../utils";

// f(root): 考虑偷取该节点所有的到的最大金额
// f(root) = Math.max(f(root.left) + f(root.right), 
// root.val + f(root.left.left) + f(root.left.right) + f(root.right.left) + f(root.right.right) )


function rob(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  const memo = new Map<TreeNode, number>();
  function _rob(root: TreeNode | null): number {
    if (!root) {
      return 0;
    }

    if (memo.has(root)) {
      return memo.get(root)!;
    }


    const noRoRoot = _rob(root.left) + _rob(root.right)
    const robRoot = root.val + (root.left ? _rob(root.left.left) + _rob(root.left.right) : 0) +
    (root.right ? _rob(root.right.left) + _rob(root.right.right) : 0);
    const ret = Math.max(noRoRoot, robRoot);
    memo.set(root, ret);
    return ret;
  }
  return _rob(root);

};

const root = createTree([3,2,3,null,3,null,1]);
console.log(rob(root))