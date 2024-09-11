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

// function isSymmetric(root: TreeNode | null): boolean {
//   return check(root, root);
//   function check(p: TreeNode | null, q: TreeNode | null): boolean {
//     if (!p && !q) {
//       return true;
//     }

//     if (!p || !q) {
//       return false;
//     }

//     return p.val === q.val && check(p.right, q.left) && check(p.left, q.right);
//   }
// };

// function isSymmetric(root: TreeNode | null): boolean {
//   if (!root) {
//     return true;
//   }

//    const queue: [TreeNode, TreeNode][] = [[root, root]];

//    while(queue.length) {
//     const [p, q] = queue.shift()!;
//     if (!p && !q) {
//       continue;
//     }
//     if (p!.val !== q!.val) {
//       return false;
//     }

//     if (p.left && !q.right) {
//       return false;
//     }
//     if (p.right && !q.left) {
//       return false;
//     }

//     if (!p.left && q.right) {
//       return false;
//     }

//     if (!p.right && q.left) {
//       return false;
//     }

//     p.left && q.right && queue.push([p.left, q.right]);
//     p.right && q.left && queue.push([p.right, q.left]);
//    }

//    return true;
// };

function isSymmetric(root: TreeNode | null): boolean {
  const queue: (TreeNode | null)[] = [];

  queue.push(root, root);

  while (queue.length) {
    const p = queue.shift();
    const q = queue.shift();

    if (!p && !q) {
      continue;
    }

    if (!p || !q) {
      return false;
    }

    if (p.val !== q.val) {
      return false;
    }

    queue.push(p.left, q.right);
    queue.push(p.right, q.left);

  }
  return true;
};