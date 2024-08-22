import { ListNode, createList, printList } from "./utils";

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }
  let prev: ListNode | null = null;
  let cur: ListNode | null = head;
  let next: ListNode | null = cur.next;
  while(cur) {
    cur.next = prev;
    prev = cur;
    cur = next;
    next = cur?.next || null;
  }

  return prev;
};

const head = createList([1, 2, 3, 4, 5])
printList(reverseList(head));