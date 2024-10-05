
import { TreeNode } from "../utils";

function isValidBST(root: TreeNode | null): boolean {
    function recurse (root: TreeNode | null, lower: number, uppper: number): boolean {
      if (!root) {
        return true;
      }

      const val = root.val;
      if (val <= lower) {
        return false
      }

      if (val >= uppper) {
        return false;
      }

      return recurse(root.left, lower, val) && recurse(root.right, val, uppper);
    }

    return recurse(root, -Infinity, Infinity);
};