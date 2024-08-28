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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (!head) {
    return head;
  }
  let virtualHead = new ListNode(0, head);
  let beforeLeftHead: ListNode | null= null;
  let leftHead: ListNode | null = null;
  let prev: ListNode | null = virtualHead;
  let cur: ListNode | null = head;
  let next: ListNode | null = null;
  let i = 1; // cur 指向的是第几个节点


  while (i < left) {
    prev = cur;
    cur = cur?.next || null;
    i++;
  }

  leftHead = cur;
  beforeLeftHead = prev;

  prev = null;
  next = cur?.next || null;

  while (cur && i <= right) {
    cur.next = prev;
    prev = cur;
    cur = next;
    next = cur?.next || null;
    i++;
  }
  
  beforeLeftHead!.next = prev;
  leftHead!.next = cur;
  
  let ret = virtualHead.next;
  virtualHead.next = null;
  return ret;
};

let head = createList([1, 2, 3, 4, 5]);
printList(reverseBetween(head, 2, 4));

