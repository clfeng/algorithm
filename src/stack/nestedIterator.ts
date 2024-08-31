/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

// @ts-nocheck
class NestedIterator {
  list: NestedInteger[];
  constructor(nestedList: NestedInteger[]) {
    this.list = [];
    const stack = [...nestedList];
    while (stack.length) {
      let item = stack.pop();
      if (item.isInteger()) {
        this.list.push(item);
      } else {
        stack.push(...item.getList());
      }
    }
  }

  hasNext(): boolean {
    return !!this.list.length;
  }

  next(): number {
    let item = this.list.pop();
    return item.getInteger();
  }
}