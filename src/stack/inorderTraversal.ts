import { TreeNode } from "../utils";


// 通过递归的思路实现
// function inorderTraversal(root: TreeNode | null): number[] {
//   const result: number[] = [];
//   if (!root) {
//     return result;
//   }

//   return inorder(root, result);

//   function inorder (root: TreeNode | null, result: number[]): number[] {
//     if (!root) {
//       return result;
//     }
//     inorder(root.left, result);
//     result.push(root.val);
//     inorder(root.right, result);
//     return result;
//   }

// };


// 通过栈的方式实现
enum CommondType {
  print = 'print',
  go = 'go',
};

class Command {
  node: TreeNode;
  type: CommondType;
  constructor(type: CommondType, node: TreeNode) {
    this.type = type;
    this.node = node;
  }
}
function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const result: number[] = [];
  const stack: Command[] = [];
  stack.push(new Command(CommondType.go, root));

  while (stack.length) {
    const command = stack.pop()!;
    if (command.type === CommondType.go) {
      command.node.right && stack.push(new Command(CommondType.go, command.node.right));
      stack.push(new Command(CommondType.print, command.node))
      command.node.left && stack.push(new Command(CommondType.go, command.node.left))
    } else {
      result.push(command.node.val);
    }
  }

  return result;
}
