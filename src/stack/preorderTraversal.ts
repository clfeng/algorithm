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
// function preorderTraversal(root: TreeNode | null): number[] {
//   return preorder(root, []);

//   function preorder (root: TreeNode|null, result: number[]) {
//     if (!root) {
//       return result;
//     }

//     result.push(root.val);
//     preorder(root.left, result);
//     preorder(root.right, result);
//     return result;
//   }
// };

// 通过栈的方式实现
enum CommondType {
  print = 'print',
  go = 'go',
};

class Command {
  node: TreeNode;
  type: CommondType;
  constructor(type: CommondType, node: TreeNode) {
    this.type = type;
    this.node = node;
  }
}
function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const result: number[] = [];
  const stack: Command[] = [];
  stack.push(new Command(CommondType.go, root));

  while (stack.length) {
    const command = stack.pop()!;
    if (command.type === CommondType.go) {
      command.node.right && stack.push(new Command(CommondType.go, command.node.right));
      command.node.left && stack.push(new Command(CommondType.go, command.node.left))
      stack.push(new Command(CommondType.print, command.node))
    } else {
      result.push(command.node.val);
    }
  }

  return result;
}





// function preorderTraversal(root: TreeNode | null): number[] {
//   // 通过栈的思路实现
//   const stack: (TreeNode | null)[] = [root];
//   const result: number[] = [];

//   while (stack.length) {
//     const node = stack.pop()!;
//     if (!node) {
//       continue;
//     }
//     result.push(node.val);

//     if (node.right) {
//       stack.push(node.right);
//     }
//     if (node.left) {
//       stack.push(node.left);
//     }
//   }

//   return result;
// };