import { TreeNode } from "../utils";

function kthSmallest(root: TreeNode | null, k: number): number {
  const stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop()!;
    --k;
    if (k === 0) {
      break;
    }

    root = root.right;
  }

  return root!.val;
};
