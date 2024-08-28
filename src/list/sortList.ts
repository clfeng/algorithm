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

// function sortList(head: ListNode | null): ListNode | null {
//   if (!head) {
//     return head;
//   }
//   // 基于归并排序的思路进行排序
//   let len = 0;
//   let cur: ListNode | null = head;
//   while (cur) {
//     cur = cur.next || null;
//     len++;
//   }

//   let dummyHead = new ListNode(-1, head);
//   let gap = 1;
//   while (gap < len) {
//     let groupPrev: ListNode | null = dummyHead;

//     while (groupPrev?.next) {
//       let start: ListNode = groupPrev.next;
//       let mid: ListNode | null = start;
//       let i = 1;

//       while (mid && i < gap) {
//         mid = mid.next || null;
//         i++;
//       }
//       let end: ListNode | null = mid;
//       while (end && i < gap * 2) {
//         end = end.next || null;
//         i++;
//       }

//       // 无法形成链条比较的链表，只进入gap更新
//       if (!mid?.next) {
//         groupPrev = null;
//         continue;
//       }

//       const [sortedStart, sortedEnd] = merge(start, mid, end);
//       groupPrev.next = sortedStart;
//       groupPrev = sortedEnd;
//     }

//     gap = gap * 2;
//   }

//   return dummyHead.next;


//   function merge(start: ListNode, mid: ListNode, end: ListNode | null) {
//     let endNext = end?.next || null;
//     if (end?.next) {
//       end.next = null;
//     }

//     let head = new ListNode(-1);
//     let cur: ListNode | null = head;
//     let l1: ListNode | null = start;
//     let l2: ListNode | null = mid?.next || null;
//     mid.next = null;

//     while (l1 && l2) {
//       if (l1.val < l2.val) {
//         cur.next = l1;
//         l1 = l1.next;
//       } else {
//         cur.next = l2;
//         l2 = l2.next;
//       }
//       cur = cur!.next;
//     }

//     while (l1) {
//       cur.next = l1;
//       l1 = l1.next;
//       cur = cur.next;
//     }

//     while (l2) {
//       cur.next = l2;
//       l2 = l2.next;
//       cur = cur.next;
//     }
//     cur.next = endNext;
//     return [head.next!, cur];
//   }
// };

function merge (head1: ListNode | null, head2: ListNode | null) {
  const dummyHead = new ListNode(0);
  let cur = dummyHead;

  while (head1 && head2) {
    if (head1.val < head2.val) {
      cur.next = head1;
      head1 = head1.next;
    } else {
      cur.next = head2;
      head2 = head2.next;
    }
    cur = cur.next!;
  }

 if (head1) {
   cur.next = head1
 }
 if (head2) {
  cur.next = head2
 }

 return dummyHead.next;

}

function toSortList (head: ListNode | null, tail: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }
  if (head.next === tail) {
    head.next = null;
    return head;
  }


  let fast: ListNode | null = head, slow: ListNode | null = head;
  while (fast !== tail) {
    fast = fast?.next || null;
    slow = slow?.next || null;

    if (fast && fast !== tail) {
      fast = fast.next;
    }
  }

  return merge(toSortList(head, slow), toSortList(slow, tail));
}

function sortList(head: ListNode | null): ListNode | null {
  return toSortList(head, null); // 对[head, null)进行排序
}

printList(sortList(createList([4, 2, 1, 3])))