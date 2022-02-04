const hhh = [1,2,3,4,5];
const ggg = [6,7,8,9,10];
console.log([...hhh,...ggg].map(item => item*2))

output :-  [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]


const hhh = [1,2,3,4,5,6];
const ggg = [6,7,8,9,4];
console.log((hhh.length-1) - ggg.pop())

output :- 1

const hhh = [1,2,3,4,5];
const ggg = [6,7,8,9,10];
console.log([...hhh,...ggg].sort((a,b) => b-a))

output :- [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

let arr = ['a','b','c'];
let arr2 = [...arr];
arr2.push('d');
console.log(arr2);
console.log(arr); 

output :- ["a", "b", "c", "d"]
          ["a", "b", "c"]


let arr = ['a','b'];
let arr2 = [...arr,'c','d'];
console.log(arr2);

output :- ["a", "b", "c", "d"]

let arr = [1,2,3,-1,-2];
console.log(Math.min(...arr)); 

output :- -2

const user1 = {
	name: 'Jen',
	age: 22,
};

const user2 = {
	name: "Andrew",
	location: "Philadelphia"
};

const mergedUsers = {...user1, ...user2};
console.log(mergedUsers)

output :- {
  age: 22,
  location: "Philadelphia",
  name: "Andrew"
}

    let arr = [1, 2, 3]
    console.log(delete arr[0]);     output :- //true 
    console.log(arr);                         //[empty, 2, 3]


console.log([1, 2, 3, 8, 89].reduce((prev, curr) =>
     prev + curr
));

output :- 103

console.log(null === undefined);     // false
console.log(null == undefined);      // true

console.log([1,2,3][1]);              // 2

console.log("my name is khan".split(" ").map(item => item[0]))
console.log("6576 0980 5434 3221".split(" ").map(item => item[2]))


output :- ["m", "n", "i", "k"]
          ["7", "8", "3", "2"]


