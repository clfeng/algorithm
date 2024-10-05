import { TreeNode } from "../utils";

// function pathSum(root: TreeNode | null, targetSum: number): number[][] {
//   const result: number[][] = [];
//   traverse(root, targetSum, [], result);
//   return result;
//   function traverse(root: TreeNode | null, targetSum: number, path: number[], result: number[][]) {
//     if (!root) {
//       return;
//     }

//     path = [...path, root.val];
//     const isLeaf = !root.left && !root.right;
//     if (isLeaf) {
//       const sum = path.reduce((sum, cur) => sum += cur, 0);
//       if (sum === targetSum) {
//         result.push(path);
//       }
//     } else {
//       traverse(root.left, targetSum, path, result);
//       traverse(root.right, targetSum, path, result);
//     }
//   }
// };


function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const result: number[][] = [];
  traverse(root, targetSum, [], result);
  return result;
  function traverse(root: TreeNode | null, targetSum: number, path: number[], result: number[][]) {
    if (!root) {
      return;
    }

    path = [...path, root.val];
    targetSum = targetSum - root.val;
    const isLeaf = !root.left && !root.right;
    if (isLeaf) {
      if (targetSum === 0) {
        result.push(path);
      }
     
    } else {
      traverse(root.left, targetSum, path, result);
      traverse(root.right, targetSum, path, result);
    }
  }
};