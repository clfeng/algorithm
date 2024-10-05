import { TreeNode } from "../utils";

// function isBalanced(root: TreeNode | null): boolean {
//   if (!root) {
//     return true;
//   }
//   if (Math.abs(getTreeLevel(root.left) - getTreeLevel(root.right)) > 1) {
//     return false;
//   }
//   return isBalanced(root.left) && isBalanced(root.right);

//   function getTreeLevel(root: TreeNode | null, level = 0): number {
//     if (!root) {
//       return level;
//     }
//     return Math.max(getTreeLevel(root.left, level + 1), getTreeLevel(root.right, level + 1));
//   }
// };

function isBalanced(root: TreeNode | null): boolean {
  return height(root) >= 0;
  function height (root: TreeNode| null): number {
    if (!root) {
      return 0;
    }

    const leftHeight = height(root.left);
    if (leftHeight === -1) {
      return -1;
    }
    const rightHeight = height(root.right);
    if (rightHeight === -1) {
      return -1; 
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }

    return Math.max(leftHeight, rightHeight) + 1;
  }
};