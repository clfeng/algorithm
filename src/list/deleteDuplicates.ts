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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) {
        return head;
    }
    let node: ListNode | null = head;

    while (node) {
        if (node.val === node.next?.val) {
            let temp = node.next;
            node.next = node.next.next;
            temp.next = null;
        } else {
            node = node?.next || null;
        }
    } 

    return head;
};