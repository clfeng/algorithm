import { ListNode } from "../utils";

function insertionSortList(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }

  // [start, end] 为已经排好序的部分，cur 为当前考察的元素
  let start = head;
  let end = head;

  let cur = head.next;
  while (cur) {

    // 找到 cur 的插入位置 i
    let iPrev: ListNode | null = null;
    let i: ListNode = start;
    while (i.val < cur.val && i !== end.next) {
      iPrev = i;
      i = i.next!;
    }

    if (i === end.next) {
      end = end.next;
      cur = end.next;
      continue;
    }

    // 需要修改cur的链接

    // 取出cur
    end.next = cur.next;

    // cur 放在排好序链表的头部了
    if (!iPrev) {
      cur.next  = start;
      start = cur;
    } else {
      cur.next = i;
      iPrev.next = cur;
    }

    cur = end.next;
  }

  return start;
};