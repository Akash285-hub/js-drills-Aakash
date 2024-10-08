const {each,map,find,reduce,filter,flatten} = require('../Solutions/solution4')
const items=[1,2,3,4,5,5];
const nestedArray = [1, [2], [[3]], [[[4]]]];

// //Testcase of function1
each(items,(elem,index)=>{
    console.log(`Elements are : ${elem} and index is : ${index}`);
})

// //Testcase of function2
let newmap=map(items,(elem)=>{
   return elem+1
})
console.log(newmap);


// // Testcase of function3
let sum=reduce(items,(x,y)=>{
 return x+y;
})
console.log(sum);

// //Testcase of function4
let newfind=find(items,(elem)=>{
    return elem===4;
})
console.log(newfind);

// //Testcase of function5
let newfilter=filter(items,(elem)=>{
    return elem<5;
})
console.log(newfilter);

// //Testcase of function6
let newarry=flatten(nestedArray)
console.log(newarry)

