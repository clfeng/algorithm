import { TreeNode } from "../utils";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) {
      return true;
    } else if(p && !q) {
      return false;
    } else if (!p && q) {
      return false;
    }

    // 剩下的就是两个节点都存在的情况
    if (p!.val !== q!.val) {
      return false;
    }

    return isSameTree(p!.left, q!.left) && isSameTree(p!.right, q!.right);
};