const {each,map,find} = require('../Solutions/solution4')
const items=[1,2,3,4,5,5];

// //Testcase of function1

// each(items,(elem,index)=>{
//     console.log(`Elements are : ${elem} and index is : ${index}`);
// })

;

//Testcase of function2
let newfind=find(items,(elem)=>{
    return elem===4;
})
console.log(newfind);

