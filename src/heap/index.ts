import { genRandomArr, isOrder, OrderType } from "../utils";
import { MaxHeap } from "./heap";

const heap = new MaxHeap();
const nums = genRandomArr(10, 1, 100);
nums.forEach(item => heap.push(item));

const sortedNums: number[] = []
for (let i = 0; i < nums.length; i++) {
  const item = heap.pop();
  item && sortedNums.push(item);
}

console.log('>>>>> nums', nums);
console.log('>>>>> sortedNums', sortedNums);
isOrder(sortedNums, OrderType.reverse)
