const hhh = [1,2,3,4,5];
const ggg = [6,7,8,9,10];
console.log([...hhh,...ggg].map(item => item*2))

output :-  [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]


const hhh = [1,2,3,4,5,6];
const ggg = [6,7,8,9,4];
console.log((hhh.length-1) - ggg.pop())

output :- 1
