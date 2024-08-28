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

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head) {
      return head;
    }
    const dummyHead = new ListNode(-1, head);
    let prev = dummyHead;
    let cur: ListNode | null = head;
    let next: ListNode | null = cur.next;

    while (cur && next) {
      cur.next = next.next;
      next.next = cur;
      prev.next = next;
      

      prev = cur;
      cur = cur.next;
      next = cur?.next || null;
    }

    return dummyHead.next;
};