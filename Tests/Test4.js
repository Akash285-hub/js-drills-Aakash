const {each,map} = require('../Solutions/solution4')

//Testcase of function1
const items=[1,2,3,4,5,5];

each(items,(elem,index)=>{
    console.log(`Elements are : ${elem} and index is : ${index}`);
})

