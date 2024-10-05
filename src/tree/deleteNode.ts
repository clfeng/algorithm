import { createTree, TreeNode } from "../utils";

// function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
//   if (!root) {
//     return null;
//   }

//   if (key > root.val) {
//     root.right = deleteNode(root.right, key);
//     return root;
//   }
//   if (key < root.val) {
//     root.left = deleteNode(root.left, key);
//     return root;
//   }

//   if (!root.left && !root.right) {
//     return null;
//   }

//   if (!root.left) {
//     return root.right;
//   }

//   if (!root.right) {
//     return root.left;
//   }

//   let successor = root.right;

//   while (successor.left) {
//     successor = successor.left
//   }

//   root.right = deleteNode(root.right, successor.val);
//   successor.left = root.left;
//   successor.right = root.right;

//   return successor;
// };


function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) {
    return null;
  }

  let cur: TreeNode | null = root;
  let curParent: TreeNode | null = null;

  while (cur && cur.val !== key) {
    curParent = cur;
     if (cur.val < key) {
      cur = cur.right;
     } else {
      cur = cur.left;
     }
  }

  if (!cur) {
    return root;
  }

  let replaceCur: TreeNode | null = null;
  if (!cur.left && !cur.right) {
    replaceCur = null;
  } else if (!cur.right) {
    replaceCur = cur.left;
  } else if (!cur.left) {
    replaceCur = cur.right;
  } else {
    let successor = cur.right, successorParent = cur;

    while (successor.left) {
      successorParent = successor;
      successor = successor.left;
    }

    if (successorParent.val === cur.val) {
      successorParent.right = successor.right;
    } else {
      successorParent.left = successor.right;
    }

    successor.right = cur.right;
    successor.left = cur.left;
    replaceCur = successor;
  }

  // 要删除的是树的根节点
  if (!curParent) {
    return replaceCur;
  } else {
    if (curParent.left?.val === key) {
      curParent.left = replaceCur;
    } else {
      curParent.right = replaceCur;
    }
  }
    
  return root;
} 