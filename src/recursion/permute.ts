// function permute(nums: number[]): number[][] {
//   const ret: number[][] = []
//   _permute([], nums);
//   return ret;
    
//   function _permute (selectedNums: number[], toSelectArr: number[]) {
//     if (!toSelectArr.length) {
//       ret.push(selectedNums); 
//       return;
//     }

//     for (const num of toSelectArr) {
//       _permute([...selectedNums, num], [...toSelectArr].filter(item => item !== num));
//     }
//   }
// };


function permute(nums: number[]): number[][] {
  const ret: number[][] = [];
  const p: number[] = []; // 表示目前已经选中的元素组合成的数组
  const used = new Map<number, boolean>(); // 用来判断元素是否已经被选中了
  nums.forEach(num => used.set(num, false));

  _permute(p);
  return ret;
    
  function _permute (selectedArr: number[]) {
   if (selectedArr.length === nums.length) {
    ret.push([...p]);
    return;
   }

   for (const num of nums) {
    if (!used.get(num)) {
      p.push(num);
      used.set(num, true);
      _permute(p);
      p.pop();
      used.set(num, false);
    }
   }
  }
};

console.log(permute([1, 2, 3]))