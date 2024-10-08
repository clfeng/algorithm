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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummyHead = new ListNode(-1)
    let cur: ListNode = dummyHead;

    while (list1 && list2) {
        if (list1.val < list2.val) {
          cur.next = list1;
          list1 = list1.next;
        } else {
          cur.next = list2;
          list2 = list2.next;
        }

        cur = cur.next;
    }

    if (list1) {
      cur.next = list1;
    }

    if (list2) {
      cur.next = list2;
    }

    return dummyHead.next;
};