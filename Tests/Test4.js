const {each,map} = require('../Solutions/solution4')
const items=[1,2,3,4,5,5];

// //Testcase of function1

// each(items,(elem,index)=>{
//     console.log(`Elements are : ${elem} and index is : ${index}`);
// })

//Testcase of function2
const newarr=map(items,(elem)=>{
  return elem*2;
})
console.log(`New Array is `,newarr)