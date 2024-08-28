import { ListNode } from "../utils";

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let stack1: ListNode[] = [];
  let stack2: ListNode[] = [];

  while(l1) {
    stack1.push(l1);
    l1 = l1.next;
  }

  while(l2) {
    stack2.push(l2);
    l2 = l2.next;
  }

  let head = new ListNode(-1);
  let k = 0;
  while (stack1.length && stack2.length) {
    let item1 = stack1.pop()!;
    let item2 = stack2.pop()!;
    const sum = item1.val + item2.val + k;
    k = Math.floor(sum / 10);

    const node = new ListNode(sum % 10);
    node.next = head.next;
    head.next = node;
  }

  while (stack1.length) {
    let item1 = stack1.pop()!;
    const sum = item1.val + k;
    k = Math.floor(sum / 10);
    const node = new ListNode(sum % 10);
    node.next = head.next;
    head.next = node;
  }

  while (stack2.length) {
    let item = stack2.pop()!;
    const sum = item.val + k;
    k = Math.floor(sum / 10);
    const node = new ListNode(sum % 10);
    node.next = head.next;
    head.next = node;
  }

  if (k !== 0) {
    const node = new ListNode(k);
    node.next = head.next;
    head.next = node;
  }

  return head.next;
};