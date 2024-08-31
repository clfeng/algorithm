// import './stack/preorderTraversal';


const list = [];
const stack = [...[1, [4, [6]]]];
while (stack.length) {
  const item = stack.pop()!
  if (!Array.isArray(item)) {
    list.push(item);
  } else {
    stack.push(...item);
  }
}


console.log(list);
