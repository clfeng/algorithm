import { createTree, TreeNode } from "../utils";

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	
  if (!root) {
    return root;
  }

  if (!p && q) {
    return q;
  }
  if (p && !q) {
    return p;
  }

  // 思路：分别找出p和q的路径，然后从头到尾遍历路径，找出最后一个重叠的项
  let pPaths: TreeNode[] = getPaths(root, p);
  let qPaths: TreeNode[] = getPaths(root, q);
  
  let commonAncestor = null;
  const minLen = Math.min(pPaths.length, qPaths.length)

  for (let i = 0; i < minLen; i ++) {
    if (pPaths[i].val === qPaths[i].val) {
      commonAncestor = pPaths[i];
    } else {
      return commonAncestor;
    }
  }

  return commonAncestor;

  function getPaths (root: TreeNode, node: TreeNode | null) {
    if (!node) {
      return [root];
    }
    let cur: TreeNode | null = root;
    let ret: TreeNode[] = [];
    while (cur) {
      ret.push(cur);
      if (cur.val === node.val) {
        return ret;
      } else if (cur.val < node.val) {
        cur = cur.right;
      } else {
        cur = cur.left;
      }
    }

    return ret;
  }
};

const root = createTree([3,5,1,6,2,0,8,null,null,7,4]);
const p = new TreeNode(5);
const q = new TreeNode(4);

console.log(lowestCommonAncestor(root, p, q));