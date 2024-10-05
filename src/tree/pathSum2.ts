import { createTree, TreeNode } from "../utils";

// function pathSum(root: TreeNode | null, targetSum: number): number {
//    let totalPath = 0;
//   traverse(root, [0]);
//   return totalPath;
//   function traverse(root: TreeNode | null, pathSum: number[]) {
//     if (!root) {
//       return;
//     }

//     // 加自己
//     pathSum = pathSum.map(sum => {
//       return sum + root.val;
//     })

//     // 遍历所有路径，找到和为targetSum的，进行记录
//     pathSum.forEach(sum => {
//       if (targetSum === sum) {
//         totalPath++;
//       }
//     });

//      // 不加自己
//      pathSum.push(0);
//     traverse(root.left, [...pathSum]);
//     traverse(root.right, [...pathSum]);
//   }
// };

// function pathSum(root: TreeNode | null, targetSum: number): number {
//   if (!root) {
//     return 0;
//   }
//   let ret = 0;
//   ret += rootSum(root, targetSum);
//   ret += pathSum(root?.left || null, targetSum);
//   ret += pathSum(root?.right || null, targetSum);
//   return ret;
// }

// function rootSum(root: TreeNode | null, targetSum: number): number {
//   if (!root) {
//     return 0;
//   }

//   let ret = 0;
//   if (root.val === targetSum) {
//     ret++;
//   }

//   ret += rootSum(root.left, targetSum - root.val);
//   ret += rootSum(root.right, targetSum - root.val);
//   return ret;
// }
function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) {
    return 0;
  }

  const prefix = new Map<number, number>();
  prefix.set(0, 1);
  const ret = dfs(root, 0, prefix);
  return ret;

  function dfs(root: TreeNode | null, curr: number, prefix: Map<number, number>): number {
    if (!root) {
      return 0;
    }

    curr = curr + root.val;
    let ret = prefix.get(curr - targetSum) ?? 0;
    prefix.set(curr, (prefix.get(curr) || 0) + 1);
    ret += dfs(root.left, curr, prefix);
    ret += dfs(root.right, curr, prefix);
    prefix.set(curr, (prefix.get(curr)!) - 1);

    return ret;
  }
}



//@ts-nocheck
// var pathSum = function(root, targetSum) {
//   const prefix = new Map();
//   prefix.set(0, 1);
//   return dfs(root, prefix, 0, targetSum);
// }

// const dfs = (root, prefix, curr, targetSum) => {
//   if (root == null) {
//       return 0;
//   }

//   let ret = 0;
//   curr += root.val;

//   ret = prefix.get(curr - targetSum) || 0;
//   prefix.set(curr, (prefix.get(curr) || 0) + 1);
//   ret += dfs(root.left, prefix, curr, targetSum);
//   ret += dfs(root.right, prefix, curr, targetSum);
//   prefix.set(curr, (prefix.get(curr) || 0) - 1);

//   return ret;
// }


// const root = createTree([10,5,-3,3,2,null,11,3,-2,null,1]);
// console.log(pathSum(root, 8));
