//Here I import the file person.js
const person=require('../Data/Data1')

const {problem1,problem2}=require(`../Solutions/solution1`)

 //problem1 testcase
let newemails=problem1(person)
console.log(newemails)

//problem2 testcase

//Case1 : If the the arguments is passed through function
let newhobbies1=problem2(30)
console.log(newhobbies1);
//Case2 : If the arguments is not passed through function
let newhobbies2=problem2()
console.log("Argument is mandatory");
//Case3 : If the incorrect argument is passed through a function
let newhobbies3=problem2(60)
console.log("Incorrect Argument");

