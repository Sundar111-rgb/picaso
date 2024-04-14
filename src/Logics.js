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

