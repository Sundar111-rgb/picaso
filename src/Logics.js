/* Flatten and duplicate */
const hhh = [1,2,3,4,[1,2,3],5,6,[7,8]];
const flat = [];

const flattenArray =(arr) => {
 arr.forEach(element => {
    if(Array.isArray(element))
      {
        flat.concat(flattenArray(element))
      }
   else
     {
       flat.push(element)
     }
 })
 return flat.filter((item,index) => flat.indexOf(item) == index)
}

console.log(flattenArray(hhh));

/* Count substring in string */

const str = "Mynameiskhan Mynameiskhan Mynameiskhan Mynameiskhan Mynameisjaan";
var count=0;
var khan = [];
const countkhan = (str) => {
  for(var i=0;i<=str.length;i++)
    
      for(var j=0;j<=str.length;j++)
    
      if(str.substr(i,j) == "My" )
        {
          count++;
          khan.push(str.substr(i,j))
        }
    
    
 return count;
}

console.log(countkhan(str));

/* Max and SecondMax */

const hhh = [1,2,3,4,5,6];
var max = 0;
var secmax = 0;
const secondMax = (hhh) => {
  for(var i=0;i<=hhh.length-1;i++)
    {
      if(max < hhh[i])
        {
          secmax = max;
          max = hhh[i]
        }
      else if(hhh[i] != max && secmax<hhh[i])
        {
          secmax = hhh[i]
        }
   }
}

secondMax(hhh)

console.log(max, secmax);
-----------------------------------------------------------------

let array = ["name=a,age=20","gender=m,add=delhi,state=mp"];

let result = array.map(item => {
  let obj = {};
  item.split(',').forEach(pair => {
    let [key, value] = pair.split('=');
    obj[key] = value;
  });
  return obj;
}).reduce((acc, curr) => ({ ...acc, ...curr }), {}); // Merge all objects into a single object

console.log(result);

output :-

{
  add: "delhi",
  age: "20",
  gender: "m",
  name: "a",
  state: "mp"
}

---------------------------------------------------------------

let arr = [1, 4, 2, 3, 0, 5, 8, 9, 10, 19, 0, 1, 2, 11, 13, 9, 8, 4, 5, 6];
let sequences = [];
let currentSequence = [arr[0]];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] + 1) {
        currentSequence.push(arr[i]);
    } else {
        if (currentSequence.length > 1) {
            sequences.push(currentSequence);
        }
        currentSequence = [arr[i]];
    }
}

if (currentSequence.length > 1) {
    sequences.push(currentSequence);
}

console.log(sequences);

output :- 

[[2, 3], [8, 9, 10], [0, 1, 2], [4, 5, 6]]

---------------------------------------------------------------

const hhh = [1,2,3]
const kkk = [2,3,4]
const ggg = [3,4,5]
const bbb = [4,5,6]

const listofarray = (...n) => n;
const removeDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) === index); 
console.log(listofarray(...hhh, ...kkk, ...ggg, ...bbb));

console.log(removeDuplicates(listofarray(...hhh, ...kkk, ...ggg, ...bbb)));

console.log((listofarray(...hhh, ...kkk, ...ggg, ...bbb)
             .filter((item, index) => (listofarray(...hhh, ...kkk, ...ggg, ...bbb))
             .indexOf(item) === index)));


output :- 
[1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6]

[1, 2, 3, 4, 5, 6]
[1, 2, 3, 4, 5, 6]

--------------------------------------------------------------

const str1="hello";
const str2="oellh";

console.log(str1.split("")); 
console.log(str1.split("").sort()); 
console.log(str1.split("").sort().join('','')); 

console.log(str2.split("")); 
console.log(str2.split("").sort()); 
console.log(str2.split("").sort().join('','')); 

console.log(str1.split("").sort().join('','') == str2.split("").sort().join('','')); 

output :-

["h", "e", "l", "l", "o"]
["e", "h", "l", "l", "o"]
"ehllo"
["o", "e", "l", "l", "h"]
["e", "h", "l", "l", "o"]
"ehllo"
true

-----------------------------------------------------------------

function rearrangeArray(arr) {
    let nonZeros = [];
    let zeros = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros.push(arr[i]);
        } else {
            nonZeros.push(arr[i]);
        }
    }
    
    let middle = Math.floor(nonZeros.length / 2);
    console.log(middle);                        // 3
    console.log(nonZeros.slice(0, middle));    //  [1, 2, 4]
    console.log(nonZeros.slice(middle));       //  [3, 7, 8]
    let result = nonZeros.slice(0, middle).concat(zeros, nonZeros.slice(middle));
    return result;
}

let input = [1, 0, 2, 4, 0, 3, 7, 0, 8];
let output = rearrangeArray(input);
console.log(output); // [1, 2, 4, 0, 0, 0, 3, 7, 8]

-------------------------------------------------------------------------

let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

let groupedByAge = people.reduce((acc, person) => {
  if (!acc[person.age]) {
    acc[person.age] = [];
  }
  acc[person.age].push(person);
  return acc;
}, {});

console.log(groupedByAge);

Output :-

{
  '20': [ { name: 'Max', age: 20 }, { name: 'Jane', age: 20 } ],
  '21': [ { name: 'Alice', age: 21 } ]
}
------------------------------------------------------------------------

let people = [
  {name: 'Alice', age: 21},
  {name: 'Max', age: 20},
  {name: 'Jane', age: 20}
];

let groupedByAge = {};

for (let i = 0; i < people.length; i++) {
  let person = people[i];
  let age = person.age;
  
  if (!groupedByAge[age]) {
    groupedByAge[age] = [];
  }
  
  groupedByAge[age].push(person);
}

console.log(groupedByAge);

---------------------------------------------------------------------------------

let input = "abc123xyz678";

// Split the string into an array of characters
let characters = input.split('');

// Filter out non-numeric characters
let numbers = characters.filter(char => !isNaN(char) && char !== '');

// Join the numeric characters back into a single string
let output = numbers.join('');

console.log(output); // Output will be "123678"

----------------------------------------------------------------------------------



const data = [
  {
    "id": 0,
    "type": "Price",
    "colorr": "#cccccc",
    "data": [
      {
        "isChecked": true,
        "code": "Rs 20000 and Below"
      },
      {
        "isChecked": true,
        "code": "Rs 20000 - Rs 40000"
      },
      {
        "isChecked": true,
        "code": "Rs 40000 - Rs 50000"
      },
      {
        "isChecked": false,
        "code": "Rs 50000 - Rs 60000"
      },
      {
        "isChecked": false,
        "code": "Rs 60000 - Rs 70000"
      },
      {
        "isChecked": false,
        "code": "Rs 70000 - Rs 80000"
      },
      {
        "isChecked": false,
        "code": "Rs 80000 and Above"
      }
    ]
  },
  {
    "id": 1,
    "type": "Brand",
    "colorr": "#cccccc",
    "data": [
      {
        "isChecked": true,
        "code": "HP"
      },
      {
        "isChecked": false,
        "code": "DELL"
      },
      {
        "isChecked": false,
        "code": "LENOVO"
      },
      {
        "isChecked": false,
        "code": "APPLE"
      },
      {
        "isChecked": false,
        "code": "ACER"
      }
    ]
  }
]
 
console.log(data.length)
const blick = [];
var groupedByAge = [];
for(var i=0;i<data.length;i++)
  {
 groupedByAge = data[i].data.reduce((acc, data) => {
  if (!acc[data.isChecked]) {
    acc[data.isChecked] = [];
  }
  acc[data.isChecked].push(data);
  return acc;
}, {});
    blick.push(groupedByAge)
  }

console.log("Blick",blick);


output :-

[
  {
    false: [
      {
        code: "Rs 50000 - Rs 60000",
        isChecked: false
      },
      {
        code: "Rs 60000 - Rs 70000",
        isChecked: false
      },
      {
        code: "Rs 70000 - Rs 80000",
        isChecked: false
      },
      {
        code: "Rs 80000 and Above",
        isChecked: false
      }
    ],
    true: [
      {
        code: "Rs 20000 and Below",
        isChecked: true
      },
      {
        code: "Rs 20000 - Rs 40000",
        isChecked: true
      },
      {
        code: "Rs 40000 - Rs 50000",
        isChecked: true
      }
    ]
  },
  {
    false: [
      {
        code: "DELL",
        isChecked: false
      },
      {
        code: "LENOVO",
        isChecked: false
      },
      {
        code: "APPLE",
        isChecked: false
      },
      {
        code: "ACER",
        isChecked: false
      }
    ],
    true: [
      {
        code: "HP",
        isChecked: true
      }
    ]
  }
]

------------------------------------------------------------------------------------------------

const input = [
  {
    id: 0,
    type: "Price",
    colorr: "#cccccc",
    data: [
      {
        isChecked: true,
        code: "Rs 20000 and Below"
      },
      {
        isChecked: true,
        code: "Rs 20000 - Rs 40000"
      },
      {
        isChecked: true,
        code: "Rs 40000 - Rs 50000"
      },
      {
        isChecked: false,
        code: "Rs 50000 - Rs 60000"
      },
      {
        isChecked: false,
        code: "Rs 60000 - Rs 70000"
      },
      {
        isChecked: false,
        code: "Rs 70000 - Rs 80000"
      },
      {
        isChecked: false,
        code: "Rs 80000 and Above"
      }
    ]
  },
  {
    id: 1,
    type: "Brand",
    colorr: "#cccccc",
    data: [
      {
        isChecked: true,
        code: "HP"
      },
      {
        isChecked: false,
        code: "DELL"
      },
      {
        isChecked: false,
        code: "LENOVO"
      },
      {
        isChecked: false,
        code: "APPLE"
      },
      {
        isChecked: false,
        code: "ACER"
      }
    ]
  }
];

const filterByTypeAndChecked = (data, type) => {
  return data
    .filter(item => item.type === type)
    .flatMap(item => item.data)
    .filter(subItem => subItem.isChecked)
    .map(subItem => subItem.code);
};

const filteredPrice = filterByTypeAndChecked(input, "Price");
const filteredBrand = filterByTypeAndChecked(input, "Brand");

console.log("Filtered Prices:", filteredPrice);
console.log("Filtered Brands:", filteredBrand);

Output :-

Filtered Prices: [ 'Rs 20000 and Below', 'Rs 20000 - Rs 40000', 'Rs 40000 - Rs 50000' ]
Filtered Brands: [ 'HP' ]





