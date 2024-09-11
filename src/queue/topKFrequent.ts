// compare: (a: T, b: T) => boolean, true 表示 a 的优先级高于 b 的优先级
class Heap<T = number> {
  heapList: T[] = [];
  compare: (a: T, b: T) => boolean;
  constructor (compare: (a: T, b: T) => boolean) {
    this.compare = compare;
  }

  get size () {
    return this.heapList.length;
  }

  isRoot (i: number) {
    return i === 0;
  }

  parent (i: number) {
    return Math.floor((i - 1) / 2);
  }

  left (i: number) {
    return i * 2 + 1;
  }

  right (i: number) {
    return i * 2 + 2;
  }

  push(item: T) {
    this.heapList.push(item);
    this.shiftUp(this.size - 1);
  }

  pop () {
    this.swap(0, this.size - 1);
    let ret = this.heapList.pop();
    this.shiftDown(0);
    return ret;
  }

  swap (i: number, j: number) {
    let temp = this.heapList[i];
    this.heapList[i] = this.heapList[j];
    this.heapList[j] = temp;
  }

  shiftDown (i: number) {
    while(i < this.size) {
      const left = this.left(i);
      const right = this.right(i);
      let child = -1;
      if (left < this.size && right < this.size) {
        if (this.compare(this.heapList[left], this.heapList[right])) {
          child = left;
        } else {
          child = right;
        }
      } else if (left < this.size) {
        child = left;
      } else if (right < this.size) {
        child = right;
      }

      if (child !== -1 && this.compare(this.heapList[child], this.heapList[i])) {
        this.swap(i, child);
        i = child;
      } else {
        break;
      }
    }
  }

  shiftUp (i: number) {
    while (i >= 0) {
      let parent = this.parent(i);
      if (parent >= 0 && this.compare(this.heapList[i], this.heapList[parent])) {
        this.swap(i, parent);
        i = parent;
      } else {
        break;
      }
    }
  }
}

function topKFrequent(nums: number[], k: number): number[] {
    let map: Record<number, number> = {};
    for (const num of nums) {
      if (!map.hasOwnProperty(num)) {
        map[num] = 0;
      }
      map[num]++;
    }

    const heap = new Heap<[number, number]>(function (a, b) {
      return a[0] < b[0];
    });
    

    Object.entries(map).forEach(([key, count]) => {
      if (heap.size < k) {
        heap.push([count, Number(key)]);
      } else {
        heap.push([count, Number(key)])
        heap.pop();
      }
    });

    const result: number[] = [];
    while (heap.size) {
      result.push(heap.pop()![1])
    }

    return result;
};