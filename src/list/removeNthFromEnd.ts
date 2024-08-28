/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from "../utils";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummyHead = new ListNode(-1, head);
  let fast: ListNode | null = head;
  let slow = dummyHead;

  while (n > 0) {
    fast = fast?.next || null;
    n--;
  }

  while (fast) {
    fast = fast.next;
    slow = slow!.next!;
  }

  slow.next = slow.next!.next;
  return dummyHead.next;
};