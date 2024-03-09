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
----------------------------------------------------------------------------------------------------------------------------
function A()  
{  
} 

function B()  
{  
}  
  
A.prototype.display = () => "A is invoked";  
B.prototype.display = () => "B is invoked";  
document.writeln(A.prototype.display.call()); 
document.writeln(B.prototype.display.call()); 

output :-
	A is invoked B is invoked
	
----------------------------------------------------------------------------------------------------------------------------
var p = new Promise((resolve, reject) => {
var x=7+5;
(x==12 ? resolve(" executed and resolved successfully") : reject("rejected"));
});
p.then(res => console.log("Promise is"+res)).catch(err => console.log("Promise is "+err));

output :- 
       "Promise is executed and resolved successfully"
-----------------------------------------------------------------------------------------------------------------------------

var p = new Promise((resolve, reject) => {
var x=7+1;
(x==12 ? resolve(
                 [
                  {id:1, first :'Sundar', last:'Chauhan' }, 
                  {id:2, first :'Sundar', last:'Chauhan' },
                  {id:3, first :'Sundar', last:'Chauhan' }
                 ]
                ) 
                  : 
         reject(
                [
                 {id:4, first :'Samer', last:'Chauhan' }, 
                 {id:5, first :'Samer', last:'Chauhan' },
                 {id:6, first :'Samer', last:'Chauhan' }
                ]
               )
);
}); 

p.then(res => res.map(i => console.log(i.id+' '+i.first+' '+i.last))
).catch(err => err.map(i => console.log(i.id+' '+i.first+' '+i.last))
)


------------------------------------------------------------------------------------------------

	let arr = [1,1,2,3,2,3,4,4]; 

function removeDuplicates(arr) { 
	return arr.filter((item, 
		index) => arr.indexOf(item) === index); 
} 
console.log(removeDuplicates(arr));

function removeDuplicatess(arr) { 
	let unique = []; 
	arr.forEach(element => { 
		if (!unique.includes(element)) { 
			unique.push(element); 
		} 
	}); 
	return unique; 
} 
console.log(removeDuplicatess(arr));

function removeDuplicatesss(arr) { 
    let unique = arr.reduce(function (acc, curr) { 
        if (!acc.includes(curr)) 
            acc.push(curr); 
        return acc; 
    }, []); 
    return unique; 
} 
console.log(removeDuplicatesss(arr));

function removeDuplicatessss(arr) { 
    let unique = []; 
    for (i = 0; i < arr.length; i++) { 
        if (unique.indexOf(arr[i]) === -1) { 
            unique.push(arr[i]); 
        } 
    } 
    return unique; 
} 
console.log(removeDuplicatessss(arr));

----------------------------------------------------------

const john = {
  name: 'John',
  age: 24,
};

const jane = {
  name: 'Jane',
  age: 22,
};

function greeting() {
  console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
}

const greetingJohn = greeting.bind(john);
greetingJohn();

const greetingJane = greeting.bind(jane);
greetingJane();

Output :-
"Hi, I am John and I am 24 years old"
"Hi, I am Jane and I am 22 years old"

----------------------------------------------------------

const student = {
    firstName: 'Monica'
}

// getting property
Object.defineProperty(student, "getName", {
    get :  () => {
        return this.firstName;
    }
});

// setting property
Object.defineProperty(student, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student.firstName); // Monica

// changing the property value
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah
---------------------------------------------------------------
const user = { 
    _password: "", 
    get password() { 
        return this._password; 
    }, 
    set password(value) { 
        this._password = value; 
    }, 
   
}; 
  
console.log(user.password); // "" 
user.password = "password123"; 
console.log(user.password); // "321drowssap" 
-----------------------------------------------------------------
const hhh = [1,2,3]
const kkk = [2,3,4]
const ggg = [3,4,5]
const ggk = [4,5,6]

const listofarray = (...n) => {
     return n
}

const mmm = listofarray(...hhh,...kkk,...ggg,...ggk);
console.log(mmm)

function removeDuplicates(arr) { 
	return arr.filter((item, 
		index) => arr.indexOf(item) === index); 
} 
console.log(removeDuplicates(mmm));

output : -
	[1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6]
        [1, 2, 3, 4, 5, 6]
--------------------------------------------------------------------------------

const value = [342,435,564,786,5234]
console.log(value)
var uniq = [];
var query = [];
for(var i=0;i<=value.length-1;i++)
{
     uniq.push(value[i].toString().split(''))
     for(var j=0;j<=uniq.length-1;j++)
      {
        uniq[j].sort((a,b) => b-a)
        query.push(parseInt(uniq[j].join('')))
      }
}

console.log(query.filter((item,i) => query.indexOf(item) === i))

output :- 
         [342, 435, 564, 786, 5234]
         [432, 543, 654, 876, 5432]
------------------------------------------------------------------------------------
var Arr = [329];

console.log(Arr);

var uniz = []
for(var i=0;i<Arr.toString().length;i++)
  {
    uniz.push(parseInt(Arr.toString()[i]))
    for (var k = 1; k < uniz.length; k++)
      {
       for (var j = 0; j < k; j++)
         {
          if (uniz[k] < uniz[j]) {
            var x = uniz[k];
            uniz[k] = uniz[j];
            uniz[j] = x;
        }
     }
  }
}    


console.log([parseInt(uniz.join(''))]);

output :-
  [329]
  [239]
-------------------------------------------------------------------------------------------
const myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

console.log(myObject.fullName());
console.log(myObject.fullName.call({firstName:"Naman", lastName:"Pant"}));
console.log(myObject.fullName.apply({firstName:"Naman", lastName:"Pant"}));
console.log(myObject.fullName.bind({firstName:"Naman", lastName:"Pant"})());

output :- 

"John Doe"
"Naman Pant"
"Naman Pant"
"Naman Pant"
-----------------------------------------------------------------------------------------------
class Foo {
  constructor(name) {
    this.name = name;
  }

  getNameSeparator() {
    return '-';
  }
}

class FooBar extends Foo {
  constructor(name, index) {
    super(name);
    this.index = index;
  }

  getFullName() {
    return this.name + super.getNameSeparator() + this.index;
  }
}

const firstFooBar = new FooBar('foo', 1);

console.log(firstFooBar.name);
// Expected output: "foo"

console.log(firstFooBar.getFullName());
// Expected output: "foo-1"
---------------------------------------------------------------------------------------------------
	
	function print2largest(arr, arr_size) {
		let i;
		let largest = second = 0;

		if (arr_size < 2) {
			document.write(" Invalid Input ");
			return;
		}

		for (i = 0 ;i<arr_size;i++){
			if (arr[i]>largest){
				second = largest ;
				largest = arr[i]
			}

			else if (arr[i]!=largest && arr[i]>second ){
				second = arr[i];
			}
		}

		if (second == 0){
			
		return ("There is no second largest element<br>");
		}
		else{
			return ("The second largest element is " + second);
				
			}
		}
	
	let arr= [ 12, 35, 1, 10, 134, 1 ];
	let n = arr.length;
	console.log(print2largest(arr, n));
------------------------------------------------------------------------------------

const hhh = [9,1,2,7,4,8,10];
var max = 0
var secmax = 0
const getmaxvalue = (hhh) => {
  
  
  for(var i=0;i<hhh.length;i++)
    {
     if(max < hhh[i])
       {
       secmax = max
       max = hhh[i]
       }
      
      else if(hhh[i] != max && secmax < hhh[i])
       secmax = hhh[i]
     }
  
}


getmaxvalue(hhh);
console.log(max);
console.log(secmax);
output :-
        10
         9
-----------------------------------------------------------

const arr = [1,2,3,1,2,3,4,5,6,4]; 
var uniq = []
for(var i = 0; i < arr.length; i++) {  
            for(var j = i + 1; j < arr.length; j++) {  
                if(arr[i] == arr[j])  
                   uniq.push(arr[j]);  
            }  
        }  

console.log(uniq)
output :-
[1, 2, 3, 4]
-------------------------------------------------------------

const checkPolindrome = (str) => {
var len = str.length;
for( var i=0;i<len/2;i++)
  {
    if(str[i] !== str[len - i -1])
      {
        return "Not Polindrome";
      }
  }
  return "Polindrome";
}

console.log(checkPolindrome("MADAMADAM"))
output :-
   polindorme

--------------------------------------------------------------

let sum = 0;
const number = 153;

let tmp = number;

while(tmp > 0) {
  let remainder = tmp%10;
  sum = sum + remainder * remainder * remainder;
  tmp = parseInt(tmp/10);
}

if(sum == number)
  console.log('Armstrong');
else
  console.log('Not Armstrong');
--------------------------------------------------------------

const hhh = [{id:1, name:'Sundar'},{id:2, name:'Sundar'},{id:3, name:'Sundar'}]

hhh.forEach((item) => {
  item.address = 'Patna',
  item.pin = "800001"
}) 

console.log(hhh)

const kkk = {id:1, name:'Sundar'}
Object.keys(kkk).forEach(i => console.log(i))
Object.keys(kkk).forEach(i => console.log(kkk[i]))

console.log(Object.values(kkk))
console.log(Object.entries(kkk)[1][1])

output :- 

[[object Object] {
  address: "Patna",
  id: 1,
  name: "Sundar",
  pin: "800001"
}, [object Object] {
  address: "Patna",
  id: 2,
  name: "Sundar",
  pin: "800001"
}, [object Object] {
  address: "Patna",
  id: 3,
  name: "Sundar",
  pin: "800001"
}]
"id"
"name"
1
"Sundar"
[1, "Sundar"]
"Sundar"
--------------------------------------------------------------

const removeDuplicates = (str) =>   
    {   
        var length = str.length;   
        var newstr = "" ;   
      
        for (var i = 0; i < length; i++)    
        {             
          if (newstr.indexOf(str.charAt(i)) < 0)   
            {   
                newstr += str.charAt(i);   
            }   
        }   
       return newstr;  
    };   


console.log(removeDuplicates("geeksforgeeksdfg"));

outout :-

"geksford"

---------------------------------------------------------------

const number = 10
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

output :-

"Fibonacci Series:"
0
1
1
2
3
5
8
13
21
34
-----------------------------------------------------------------
const str = "newyorkcitynewyorkcitynewyorkcitynewyorkcitynewyorkcitynewyorkcity"
var count = 0;
var newstr = [];
for(var i=0;i<=str.length;i++)
  {
    for(var j=0;j<=str.length;j++)
    {
      if(str.substr(i,j) == "newyork")
        {
         count ++;
          newstr.push(str.substr(i,j))
        }
     }
}


console.log("Number of newyork string :- "+count);
console.log(newstr);
console.log(newstr.length);

output :- 
"Number of newyork string :- 6"
["newyork", "newyork", "newyork", "newyork", "newyork", "newyork"]
6

---------------------------------------------------------------

var arr = [];
function RightRotate(a, n, k) 
{ 
	k = k % n; 
	for (let i = 0; i < n; i++) { 
		if (i < k)  
			arr.push(a[n + i - k]); 
		else 
			arr.push(a[i - k]); 
	} 
	console.log(arr); 
} 

let Array = [1, 2, 3, 4, 5]; 
let N = Array.length; 
let K = 1; 

RightRotate(Array, N, K); 

output :-
[5, 1, 2, 3, 4]
------------------------------------------------------------------
/* No. of Vowels */
/* No. of Consonants */

const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count
}


function countConsonant(str) {
    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (!vowels.includes(letter)) {
            count++;
        }
    }
    return count
}

const string = "prompt Enter a string"
const result1 = countVowel(string.replaceAll(' ',''));
const result2 = countConsonant(string.replaceAll(' ',''));

console.log(string);
console.log(result1);
console.log(result2);

------------------------------------------------------------------

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games'],
};

let count = 0;

for(let key in student) {
    ++count;
}

console.log(count);

output :- 
3

-------------------------------------------------------------
// 09 March 2024
	
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };
//const obj = Object.assign(o1, o2, o3);
const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, target object itself is changed.


const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"



	





