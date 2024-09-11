import { createTree, TreeNode } from "../utils";

// function countNodes(root: TreeNode | null): number {
//   if (!root) {
//     return 0;
//   }
//   const queue = [root];
//   let count = 1;
//   while (queue.length) {
//     const node = queue.shift()!;

//     if (node.left) {
//       count++;
//       queue.push(node.left);
//     }

//     if (node.right) {
//       count++;
//       queue.push(node.right);
//     }
//   }

//   return count;
// };

function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  
  let node: TreeNode | null = root;
  let leftDepth = 0;
  while (node?.left) {
    node = node.left;
    leftDepth++;
  }

  node = root;
  let rightDepth = 0;
  while (node?.right) {
    node = node.right;
    rightDepth++;
  }

  if (leftDepth === rightDepth) {
    return 2 ** (leftDepth + 1) - 1;
  } else {
    return countNodes(root.left) + countNodes(root.right) + 1;
  }
};

const arr = [1,2,3,4,5,6];
const root = createTree(arr);
console.log(countNodes(root));