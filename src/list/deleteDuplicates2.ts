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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) {
      return head;
    }

    let vHead = new ListNode(-1, head);
    let cur: ListNode | null = head;
    let prev = vHead;

    let lastDeleteVal = -Infinity;
    while (cur) {
      if (cur.val === cur.next?.val || cur.val === lastDeleteVal) {
        lastDeleteVal = cur.val;
        prev.next = cur.next;
        cur = prev.next;
      } else {
        prev = cur;
        cur = cur.next;
      }
    }
    return vHead.next;
};