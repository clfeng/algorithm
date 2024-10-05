import { TreeNode } from "../utils";

function sumOfLeftLeaves(root: TreeNode | null): number {
  return _sumOfLeftLeaves(root, false)
  function _sumOfLeftLeaves(root: TreeNode | null, isLeftChild: boolean): number {
    if (!root) {
      return 0;
    }
    const isLeaf = !root.left && !root.right;

    if (isLeaf) {
      return isLeftChild ? root.val : 0;
    }


    return _sumOfLeftLeaves(root.left, true) + _sumOfLeftLeaves(root.right, false);
  }
};