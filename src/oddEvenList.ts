import { ListNode } from "./utils";

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }

  let oddHead = new ListNode(-1);
  let evenHead = new ListNode(-1);
  let odd = oddHead;
  let even = evenHead;
  let cur: ListNode | null = head;
  let i = 1;
  while (cur) {
    if (i % 2 === 1) {
      odd.next = cur;
      odd = odd.next;
    } else {
      even.next = cur;
      even = even.next;
    }

    cur = cur?.next || null;
    i++;
  }

  odd.next = evenHead.next;
  evenHead.next = null;
  even.next = null;

  head = oddHead.next;
  oddHead.next = null;
  return head;
};