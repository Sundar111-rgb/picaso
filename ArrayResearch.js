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
----------------------------------------------------------------------

        function getKeyByValue(object, value) {
            return Object
              .keys(object)
              .find(key => object[key] === value);
        }
      
        var exampleObject = {
            key1: 'Geeks',
            key2: 100,
            key3: 'Javascript'
        };
      
        ans = getKeyByValue(exampleObject, 'Javascript');
        console.log(ans);


 var obj = { "1": 5, "2": 7, "3": 0, "4": 0, "5": 0 };
      
  
var result1 = Object.keys(obj).map((key) => Number(key));
var result2 = Object.keys(obj).map((key) => obj[key]);
    
console.log(result1);
console.log(result2);

output :-----------------
	
"key3"
[1, 2, 3, 4, 5]
[5, 7, 0, 0, 0]

-----------------------------------------------------------------------

const names = ['Alex', 'Bob', 'Johny', 'Atta'];
const obj = Object.assign({}, names);
console.log(obj['3']);


const animal = {  
    first: 'The',  
    last: 'Lion'  
};  
const propertyValues=Object.values(animal);  
console.log(propertyValues);  

output :-----------------
	
"Atta"
["The", "Lion"]

------------------------------------------------------------------------

const sampleArray = [  
  ['one', 1],  
  ['two', 2],  
];  
  
console.log(Object.fromEntries(sampleArray)); 

output :----------------

{
  one: 1,
  two: 2
}
------------------------------------------------------------------------------------------------------

const kkk = [
             {id:2, week:'Sun', isEnabled : true },
             {id:4, week:'Thr', isEnabled : false},
             {id:5, week:'Tue', isEnabled : true },
             {id:1, week:'Wed', isEnabled : false},
             {id:3, week:'Mon', isEnabled : true },
             {id:6, week:'Wed', isEnabled : false},
             {id:7, week:'Sat', isEnabled : true }
            ]

const hhh = kkk
                .filter(item => item.isEnabled === true)
                .map   (item => item.week)

console.log(hhh)

console.log(kkk
            .map  (i => i.id)
            .sort((a,b) => b-a))
            

console.log(kkk
            .map  (i => i.id)
            .splice(1,2,3))

console.log(Array
            .from(kkk.map(i => i.id),(v => v+v))
            .join('')
           )

console.log(kkk.filter(i => i.isEnabled == 6 in kkk.map(i => i.id)))
--------------------

output :-
	
["Sun", "Tue", "Mon", "Sat"]

[7, 6, 5, 4, 3, 2, 1]

[4, 5]

"4810261214"

[ {
  id: 2,
  isEnabled: true,
  week: "Sun"
},  {
  id: 5,
  isEnabled: true,
  week: "Tue"
},  {
  id: 3,
  isEnabled: true,
  week: "Mon"
},  {
  id: 7,
  isEnabled: true,
  week: "Sat"
}]
----------------------------------------------------------

makeAdder = (x) => (y) =>  x + y;


var add5 = makeAdder;
var add10 = makeAdder(10);
var add15 = makeAdder(23)(34);


console.log(add15);   
console.log(add5(12)(15));  
console.log(add10(12)); 

output :-
	
57
27
22

-------------------------------------------------------
	
    var secondMax = function (arr) {     
    var max = Math.max.apply(null, arr); // get the max of the array
    arr.splice(arr.indexOf(max), 1); // remove max from the array
    return Math.max.apply(null, arr); // get the 2nd max
};

var arr = [220, 120, 111, 265, 54, 78]; // use int arrays


var max2 = secondMax(arr);
console.log(max2);

output :- 220
--------------------------------------------------------


var arr = [220, 120, 111, 265, 54, 78];    
console.log(Math.max.apply(null, arr.splice(arr.indexOf(Math.max.apply(null, arr)), 1)))

output :- 220
----------------------------------------------------------

function sum1(a,b) {
  return [a+b, a*b, a/b, a%b]
}

const [a,b,c,d] = sum1(4,2)
const xxx = sum1(5,2)

console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log(xxx[0])
console.log(xxx[1])
console.log(xxx[2])
console.log(xxx[3])


output :-
	6
	8
	2
	0
	7
	10
	2.5
	1
	
---------------------------------------------------------------
		
console.log([
             {id: 1, date: '12-03-2014'},
             {id: 2, date: '08-02-2014' },
             {id: 2, date: '30-03-2015'},
             {id: 2, date: '08-04-2020' },
             {id: 2, date: '08-06-2020' }
].sort((a, b) => new Date(a.date) - new Date(b.date)));

output :-
	
[{date: "08-02-2014",id: 2}, {date: "12-03-2014",id: 1},  { date: "30-03-2015", id: 2}, { date: "08-04-2020",id: 2}, { date: "08-06-2020",id: 2}]

Array Destructring Concept
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring

