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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) {
    return head;
  }
  const vHead = new ListNode(-1, head);

  let cur: ListNode | null = head;
  let prev = vHead;
  while (cur) {
    if (cur.val === val) {
      prev.next = cur.next;
      cur.next = null;
      cur = prev.next;      
    } else {
      prev = cur;
      cur = cur.next;
    }
  }

  return vHead.next;
};