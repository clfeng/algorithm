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

import { createList, ListNode } from "../utils";

function isPalindrome(head: ListNode | null): boolean {
  if (!head || head && !head.next) {
    return true;
  }

  let firstHalfEnd = getFirstHalfEnd(head);
  let secondHalfStart = reverseList(firstHalfEnd.next!);

  firstHalfEnd!.next = null;

  let p1: ListNode | null = head;
  let p2: ListNode | null = secondHalfStart;

  let result = true; 
  while (result && p1 && p2) {
    if (p1.val !== p2.val) {
      result = false;
    } else {
      p1 = p1.next;
      p2 = p2.next;
    }
  }

  firstHalfEnd.next = reverseList(secondHalfStart);
  return result;

  function reverseList (head: ListNode): ListNode {
    if (!head) {
      return head;
    }

    let prev:ListNode | null = null;
    let cur: ListNode | null = head;
    let next = head.next;
    while (cur) {
      cur.next = prev;
      prev = cur;
      cur = next;
      next = next?.next || null;
    }

    return prev!;
  }


  function getFirstHalfEnd(head: ListNode): ListNode {
    if (!head || !head.next) {
      return head;
    }
    let slow = head;
    let fast: ListNode = head.next;
    while (fast.next && fast.next.next) {
      slow = slow.next!;
      fast = fast.next.next;
    }

    return slow;
  }
};

let head = createList([1,0,1]);

console.log(isPalindrome(head));