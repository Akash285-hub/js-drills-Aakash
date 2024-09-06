const inventory = require("../Data/Data3")
const {problem1}=require(`../Solutions/solution3`)

//TestCases of problem1

//If argument is passed
let newcarinfo1=problem1(33);
console.log(newcarinfo1);
//If no argumnet is passed
let newcarinfo2=problem1();
console.log("Argument pass is mandatory");
//If incorrect argument is passed
let newcarinfo3=problem1(40);
console.log("Incorrect Argument");



