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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head) {
      return head;
    }

    const dummyHead = new ListNode(-1, head);
    let groupStart: ListNode | null = head;
    let groupEnd: ListNode | null = head;
    let count = 1;
    let groupPrev = dummyHead;

    while (groupStart) {
      // 找到需要反正组的结束点
      while (count < k && groupEnd) {
        groupEnd = groupEnd.next;
        count++;
      }

      // 数量不够，不需要反转
      if (count < k || !groupEnd) {
        break;
      }

      // 进行组的反转
      let prev = null;
      let cur: ListNode | null = groupStart;
      let next: ListNode | null = groupStart.next;
      const groupEndNext: ListNode | null = groupEnd?.next || null;

      while (cur && cur !== groupEndNext) {
        cur.next = prev;
        prev = cur;
        cur = next;
        next = cur?.next || null;
      }
      groupPrev.next = groupEnd;
      groupStart.next = cur;

      // 进入下一组的处理
      groupPrev = groupStart;
      groupStart = cur;
      groupEnd = cur;
      count = 1;
    }

    return dummyHead.next;
};

printList(reverseKGroup(createList([1,2,3,4,5]), 3))