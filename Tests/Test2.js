//Here I import the data of the js file solution
const {problem1,problem2,problem3,problem4}=require(`../Solutions/solution2`)

// testcase of problem1
let interest = problem1();
console.log(interest);

// testcase of problem2

//Get all users stay in Germany
let newuserstay = problem2("Germany");
console.log(newuserstay);
//If we don't pass any data in the function
let newuserstay2 = problem2("");
console.log("Arguments pass is mandatory");
//If we pass any incorrect data in the function
let newuserstay3 = problem2("Auckland");
console.log("Incorrect Data");


// testcase of problem3
let masterdegree = problem3("Masters");
console.log(masterdegree);
//If we don't pass any data in the function
let masterdegree2 = problem3("");
console.log("Arguments pass is mandatory");
//If we pass any incorrect data in the function
let masterdegree3 = problem3("Bachelor");
console.log("Incorrect Data");

// testcase of problem4
let designation = problem4();
console.log(designation);