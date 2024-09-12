const {keys,values,mapObject,pairs,invert,defaults}=require(`../Solutions/solution5`)
const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this ob


//Testcase of function keys
let newa=keys(testObject);
console.log(newa);

//Test case of function values
let constans=mapObject(testObject,function callback(ele){
return ele+1;
})
console.log(constans)

//Testcase of function pairs
let print=pairs(testObject);
console.log(print);

//Testcase of function invert
let change=invert(testObject);
console.log(change);

//Testcase of function default
let show=defaults(testObject);
console.log(show);