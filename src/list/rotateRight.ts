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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  let len = 1;
  let cur = head;
  while (cur.next) {
    cur = cur.next;
    len++;
  }

  // 当前的cur是尾部节点
  cur.next = head; // 成环

  let count = len - (k % len);
  cur = head;
  while (count > 1) {
    cur = cur.next!;
    count--;
  }
  head = cur.next;
  cur.next = null;
  return head;
};