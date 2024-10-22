import { TreeNode } from "../utils";

function sortedArrayToBST(nums: number[]): TreeNode | null {
  return createTree(nums, 0, nums.length - 1);
  function createTree(nums: number[], start: number, end: number): TreeNode | null {
    if (start > end) {
      return null;
    }
    const mid = Math.floor(start + (end - start) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = createTree(nums, start, mid - 1);
    root.right = createTree(nums, mid + 1, end);
    return root;
  }
};