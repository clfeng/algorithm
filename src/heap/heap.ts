// 实现的最大堆
export class MaxHeap {
  heaps: number[];
  constructor(nums?: number[]) {
    if (!nums) {
      this.heaps = [];
      return;
    } 

    this.heaps = [...nums];
    for(let i = this.parent(this.size() - 1); i >= 0; i--) {
      this.shiftDown(i);
    }
  }

  /* 获取左子节点的索引 */
  left(i: number): number {
    return 2 * i + 1;
  }

  /* 获取右子节点的索引 */
  right(i: number): number {
    return 2 * i + 2;
  }

  /* 获取父节点的索引 */
  parent(i: number): number {
    return Math.floor((i - 1) / 2); // 向下整除
  }

  /* 访问堆顶元素 */
  peek(): number {
    return this.heaps[0];
  }
  push (val: number) {
    this.heaps.push(val);
    this.shiftUp(this.size() -1);
  }
  shiftUp (i: number) {
    if (i < 0 || i >= this.size()) {
      return;
    }

    while(true) {
      const p = this.parent(i);
      if (p >= 0 && this.heaps[i] > this.heaps[p]) {
        this.swap(this.heaps, i, p)
        i = p;
      } else {
        break;
      }
    }
  }

  pop () {
    if (this.size() <= 0) {
      return;
    }

    this.swap(this.heaps, 0, this.size() - 1);
    const item = this.heaps.pop();
    this.shiftDown(0);

    return item;
  }

  shiftDown (i: number) {
    if (i < 0 || i >= this.size()) {
      return;
    }

    while(true) {
      let l = this.left(i);
      let r = this.right(i);
      let max = i;
      if (l < this.size() && this.heaps[l] > this.heaps[max]) {
        max = l;
      }
      if (r < this.size() && this.heaps[r] > this.heaps[max]) {
        max = r;
      }

      if (max === i) {
        break;
      }

      this.swap(this.heaps, i, max);
      i = max;
    }

  }
  swap (nums: number[], i: number, j: number) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  size () {
    return this.heaps.length;
  }
}