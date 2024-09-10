const {keys,values}=require(`../Solutions/solution5`)
const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this ob


//Testcase of function keys
let newa=keys(testObject);
console.log(newa);

//Test case of function values
let value=values(testObject)
console.log(value)