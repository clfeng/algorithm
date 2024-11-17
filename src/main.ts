import './dynamic_program/findTargetSumWays.ts';

// const toString = Object.prototype.toString;
// function deepClone(origin: any) {
//   let weakMap = new WeakMap();
//   return _deepClone(origin);

//   function _deepClone(origin: any) {
//     let type = toString.call(origin)
//     if ([
//       '[object String]',
//       '[object Number]',
//       '[object Boolean]',
//       '[object Null]',
//       '[object Undefined]',
//       '[object BigInt]',
//       '[object Symbol]'
//     ].includes(type)) {
//       return origin;
//     } 
    
//     if (weakMap.has(origin)) {
//       return weakMap.get(origin)!;
//     }

//     if (type === '[object Array]') {
//       let arr: any[] = [];
//       weakMap.set(origin, arr);
//       origin.forEach((item: any) => arr.push(_deepClone(item)))
//       return arr;
//     } else if (type === '[object Object]') {
//       let obj: Record<string | symbol | number, any> = {};
//       weakMap.set(origin, obj);
//       Reflect.ownKeys(origin).forEach((key) => {
//         obj[key] = _deepClone(origin[key]);
//       });
//       return obj;
//     } else if (type === '[object Set]') {
//       let set = new Set<any>();
//       weakMap.set(origin, set);
//       [...origin].forEach(item => set.add(_deepClone(item)))
//       return set;
//     } else if (type === '[object Map]') {
//       let map = new Map<any, any>();
//       weakMap.set(origin, map);
//       for (const [key, value] of origin.entries()) {
//         map.set(key, _deepClone(value));
//       }
//       return map;
//     } else {
//       throw new Error('invalid type');
//     }
//   }
// }

// // 基础测试
// let origin = {
//   a: 1,
//   b: {
//     c: '1',
//     d: new Map([['key', [1, 2]]])
//   },
//   d: new Set([1, { d: false, e: undefined, f: null }])
// }

// let obj = deepClone(origin);
// console.log(obj.b === origin.b);
// console.log(obj.d === origin.d);
// console.log(obj.b.d === origin.b.d);
// console.log(obj.b.d.get('key') === origin.b.d.get('key'));

// // 测试循环引用
// let a: any = {
//   name: "muyiy",
// 	a1: undefined,
// 	a2: null,
// 	a3: 123,
// 	book: {title: "You Don't Know JS", price: "45"},
// }
// a.circleRef = a;
// let cloneA = deepClone(a);
// console.log(cloneA);


// // 测试相同对象
// let obj1 = {};
// let obj2 = {a: obj1, b: obj1};
// console.log(obj2.a === obj2.b); 


// let obj3 = deepClone(obj2);
// console.log(obj3.a === obj3.b); 



