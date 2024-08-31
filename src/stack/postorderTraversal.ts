import { TreeNode } from "../utils";

// function postorderTraversal(root: TreeNode | null): number[] {
//   const result: number[] = [];
//   if (!root) {
//     return result;
//   }

//   return postorder(root, result);
//   function postorder (root: TreeNode | null, result: number[]): number[] {
//     if (!root) {
//       return result;
//     }

//     postorder(root.left, result);
//     postorder(root.right, result);
//     result.push(root.val);
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
function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const result: number[] = [];
  const stack: Command[] = [];
  stack.push(new Command(CommondType.go, root));
  while (stack.length) {
    const command = stack.pop()!;
    if (command.type === CommondType.go) {
      stack.push(new Command(CommondType.print, command.node))
      command.node.right && stack.push(new Command(CommondType.go, command.node.right));
      command.node.left && stack.push(new Command(CommondType.go, command.node.left))
    } else {
      result.push(command.node.val);
    }
  }

  return result;
}
