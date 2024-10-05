import { TreeNode } from "../utils";

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) {
      return false;
    }

    if (!root.left && !root.right) {
      return root.val === targetSum;
    }

    if (root.left && hasPathSum(root.left, targetSum - root.val)) {
      return true
    }

    if (root.right && hasPathSum(root.right, targetSum - root.val)) {
      return true;
    }

    return false;
};