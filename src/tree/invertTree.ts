import { TreeNode } from "../utils";

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) {
      return root;
    }

    if (!root.left && !root.right) {
      return root;
    }
    const left = root.left;
    const right = root.right;
    root.right = invertTree(left);
    root.left = invertTree(right);
    return root;
};