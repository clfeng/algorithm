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

import { createList, ListNode, printList } from "./utils";

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head = new ListNode(-1);
    let cur = head;

    let m = l1;
    let n = l2;
    let k = 0;
    while (m && n) {
      let sum = k + m.val + n.val;
      k = Math.floor(sum / 10);
      cur.next = new ListNode(sum % 10);
      cur = cur.next;
      m = m.next;
      n = n.next
    }

    while(m) {
      let sum = k + m.val;
      k = Math.floor(sum / 10);
      cur.next = new ListNode(sum % 10);
      cur = cur.next;
      m = m.next;
    }

    while(n) {
      let sum = k + n.val;
      k = Math.floor(sum / 10);
      cur.next = new ListNode(sum % 10);
      cur = cur.next;
      n = n.next;
    }

    if (k !== 0) {
      cur.next = new ListNode(k);
    }

    return head.next;
};
let l1 = createList([9,9,9,9,9,9,9]);
let l2 = createList([9,9,9,9]);

printList(addTwoNumbers(l1, l2))