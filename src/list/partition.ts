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

function partition(head: ListNode | null, x: number): ListNode | null {
    if (!head) {
      return head;
    }  

    let ltHead= new ListNode(-1);
    let lt = ltHead;
    let gtHead = new ListNode(-1);
    let gt = gtHead;

    let cur: ListNode | null = head;
    while (cur) {
      if (cur.val < x) {
        lt.next = cur;
        lt = lt.next;
      } else {
        gt.next = cur;
        gt = gt.next;
      }
      cur = cur.next;
    }

    lt.next = gtHead.next;
    gt.next = null;

    head = ltHead.next;
    gtHead.next = null;
    ltHead.next = null;
    return head;
};