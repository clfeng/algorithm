export function swap (nums: number[], i: number, j: number) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

export function genTestArr (len: number, min: number, max: number) {
  const arr = new Array(len);
  for (let i = 0; i < len; i++) {
    arr[i] = Math.floor((max - min) * Math.random());
  }
  return arr;
}
enum OrderType {
  positive = 'positive',
  reverse  = 'reverse'
}
export function isOrder (nums: number[], type: OrderType = OrderType.positive) {
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

export function validateSort (nums: number[], sortFunc: (nums: number[]) => void) {
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