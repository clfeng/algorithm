export function swap(nums: number[], i: number, j: number) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}

export function genRandomArr(len: number, min: number, max: number) {
  const arr = new Array(len);
  for (let i = 0; i < len; i++) {
    arr[i] = min + Math.floor((max - min + 1) * Math.random());
  }
  return arr;
}

export function genFloatArr(len: number, min: number, max: number) {
  const arr = new Array(len);
  for (let i = 0; i < len; i++) {
    arr[i] = +(min + (max - min) * Math.random()).toFixed(2);
  }
  return arr;
}
export enum OrderType {
  positive = 'positive',
  reverse = 'reverse'
}
export function isOrder(nums: number[], type: OrderType = OrderType.positive) {
  console.log('check nums', nums);
  for (let i = 0; i < nums.length - 1; i++) {
    if (type === OrderType.positive) {
      if (nums[i] > nums[i + 1]) {
        throw new Error(`nums is not positive order, nums[${i}] > nums[${i + 1}]`)
      }
    } else {
      if (nums[i] < nums[i + 1]) {
        throw new Error(`nums is not positive reverse, nums[${i}] < nums[${i + 1}]`)
      }
    }
  }
}

export function validateSort(nums: number[], sortFunc: (nums: number[]) => void) {
  console.log('validate function', sortFunc.name);
  console.log('origin nums', JSON.stringify(nums));
  const copyNums = JSON.parse(JSON.stringify(nums)) as typeof nums;
  copyNums.sort((prev, next) => prev - next);
  const targetNumsStr = JSON.stringify(copyNums);

  sortFunc(nums);
  const sortedNumsStr = JSON.stringify(nums);
  console.log('sorted nums', sortedNumsStr);
  if (sortedNumsStr !== targetNumsStr) {
    throw new Error(`after sorted nums should be ${copyNums}, but get ${nums}`);
  }
}

export class MinHeap {
  heaps: number[];
  constructor(nums: number[]) {
    this.heaps = [...nums];
    // 建堆操作
    for (let i = this.parent(this.size() - 1); i >= 0; i--) {
      this.shiftDown(i);
    }
  }

  size() {
    return this.heaps.length;
  }
  parent(i: number) {
    return Math.floor((i - 1) / 2);
  }
  left(i: number) {
    return i * 2 + 1;
  }
  right(i: number) {
    return i * 2 + 2;
  }
  shiftDown(i: number) {
    while (i < this.size()) {
      const left = this.left(i);
      const right = this.right(i);
      let min = i;
      if (left < this.size() && this.heaps[left] < this.heaps[min]) {
        min = left;
      }

      if (left < this.size() && this.heaps[right] < this.heaps[min]) {
        min = right;
      }

      if (i === min) {
        break;
      }
      this.swap(this.heaps, i, min);
      i = min;
    }
  }

  shiftUp(i: number) {
    while (i > 0) {
      const p = this.parent(i);
      if (this.heaps[i] < this.heaps[p]) {
        this.swap(this.heaps, i, p);
        i = p;
      } else {
        break;
      }
    }
  }
  push(val: number) {
    this.heaps.push(val);
    this.shiftUp(this.size() - 1);
  }

  pop() {
    if (!this.size()) {
      return;
    }
    this.swap(this.heaps, 0, this.size() - 1);
    let item = this.heaps.pop();
    this.shiftDown(0);
    return item;
  }

  swap(nums: number[], i: number, j: number) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  peek() {
    return this.heaps[0];
  }
}


export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function createList(arr: number[]) {
  const head = new ListNode();
  let cur = head;
  for (const num of arr) {
    const node = new ListNode(num);
    cur.next = node;
    cur = node;
  }

  const ret = head.next;
  head.next = null;
  return ret;
}

export function printList(head: ListNode | null) {
  let ret = [];

  while (head) {
    ret.push(head.val);
    head = head.next;
  };
  console.log(ret.join(' -> '));
}



export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


export function createTree (arr: (number | null)[]): TreeNode | null {
  const rootItem = arr.shift();
  if (!rootItem) {
    return null
  }
  const root = new TreeNode(rootItem);
  const queue: TreeNode[] = [root];

  while (arr.length) {
    const node = queue.shift()!;
    if (arr.length) {
      let item = arr.shift();
      if (item) {
        node.left = new TreeNode(item);
        queue.push(node.left);
      }
    }

    if (arr.length) {
      let item = arr.shift();
      if (item) {
        node.right = new TreeNode(item);
        queue.push(node.right);
      }
      
    }
  }
  return root;
}