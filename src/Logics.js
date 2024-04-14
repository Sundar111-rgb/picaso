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


