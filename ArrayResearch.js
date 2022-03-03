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

const hhh = {a:'a', b:'b', c:'c'}

const ggg = {...hhh};

delete ggg.a;

console.log(ggg);
console.log(hhh);

output :- 
{
  b: "b",
  c: "c"
}
 {
  a: "a",
  b: "b",
  c: "c"
}

console.log("Mynameiskhan".split("").reverse().join("")).     // output :- nahksiemanyM
console.log("My name is khan".split(" ").reverse().join(" ")). // output :- khan is name My
console.log("My name is khan".split("").reverse().join("")).    // output :- nahk si eman yM


console.log({ name: 'sundar', 
               address : [ { permanant: 'Patna1', temporary : 'Noida1' }, 
                           { permanant: 'Patna2', temporary : 'Noida2' },         // output :- ["Noida1", "Noida2", "Noida3"]
                           { permanant: 'Patna3', temporary : 'Noida3' }, 
                         ] 
             }.address.map(item => item.temporary))



console.log([...[1,2,3], ...[4,5,6]][5]).                    // output :-  6

---------------------------------------------------------------------------------
const hhh = [{ id:1, name:'Sundar', address:'Delhi' }]

console.log(hhh[0].id,
            hhh[0]['id'], 
            [{ id:1, name:'Sundar', address:'Delhi' }][0]['name'],
            [{ id:1, name:'Sundar', address:'Delhi' }][0].name
           )


console.log('str'
             .split('')
             .reverse()
             .join() 
           )

console.log(hhh[0]['name'])

output :- 
1
1
"Sundar"
"Sundar"
"r,t,s"
"Sundar"
--------------------------------------------
const hhh = [
             { id:1, name:'Sundar'},
             { id:1, name:'Sundar'},
             { id:1, name:'Sundar'}
            ]

console.log(hhh);

hhh.forEach(a => a.marks = 95)
hhh.forEach(a => a.grade = 'A')

console.log(hhh);

output :- 
	{
  grade: "A",
  id: 1,
  marks: 95,
  name: "Sundar"
}, {
  grade: "A",
  id: 1,
  marks: 95,
  name: "Sundar"
}, {
  grade: "A",
  id: 1,
  marks: 95,
  name: "Sundar"
}]
-------------------------------------------------------------
const hhh = [
             { id:1, name:'Sundar'},
             { id:1, name:'Sundar'},
             { id:1, name:'Sundar'}
            ]

console.log(hhh);

hhh.map(a => a.marks = 95)
hhh.map(a => a.grade = 'A')

console.log(hhh)
--------------------------------------------------------------
const arr = [
             {id: 1, date: 'Apr 15 2014 10:00:00 AM'},
             {id: 2, date: 'Mar 18 2014 08:00:00 AM'}, 
             {id: 3, date: 'Jun 13 2014 07:00:01 AM'}, 
             {id: 4, date: 'Aug 12 2014 07:00:03 AM'}
            ];

const sortByDate = arr => arr.sort((a, b) =>  new Date(a.date).getTime() - new Date(b.date).getTime());

sortByDate(arr);
console.log(arr);

output :-
[{
  date: "Mar 18 2014 08:00:00 AM",
  id: 2
}, 
{
  date: "Apr 15 2014 10:00:00 AM",
  id: 1
}, 
{
  date: "Jun 13 2014 07:00:01 AM",
  id: 3
},
{
  date: "Aug 12 2014 07:00:03 AM",
  id: 4
}]

