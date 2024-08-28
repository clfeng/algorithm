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

import { createList, ListNode, printList } from "../utils";

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  let dummyHead = new ListNode(-1);
  let dummyTail = dummyHead;
  while (head) {
    dummyTail.next = head;
    dummyTail = dummyTail.next!;
    head = head.next;

    let prev = dummyTail;
    let cur = head;
    while (cur?.next) {
      prev = cur;
      cur = cur.next;
    }

    prev.next = null;
    dummyTail.next = cur;
    dummyTail = dummyTail.next!;
    if (head === cur) {
      head = null;
    }
  }
};
let head = createList([1, 2, 3, 4]);
reorderList(head)
printList(head)