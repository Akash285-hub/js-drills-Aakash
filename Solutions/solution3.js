//Here I import the data from data file
const inventory=require(`../Data/Data3`)

// Q1-
//  The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
//   ("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");
  
function problem1(id){
    let carinfomake=[];
    let carinfomodel=[];
    let carinfoyear=[];
 for(let i=0 ; i<inventory.length ;i++){
    if(inventory[i].id === id){
        carinfomake.push(inventory[i].car_make);
        carinfomodel.push(inventory[i].car_model);
        carinfoyear.push(inventory[i].car_year);

    }
}
return `Car 33 is a ${carinfomake} ${carinfomodel} ${carinfoyear}`;
}
// Q2-
//   The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
//   ("Last car is a *car make goes here* *car model goes here*");
  
// function problem2() {
//     let lastcarinfomake=[];
//     let lastcarinfomodel=[];
//     for(let i=0; i<inventory.length;i++) {
//         lastcarinfomake.push(inventory[i].car_make);
//         lastcarinfomodel.push(inventory[i].car_model);
//     }
//     return `Last car is a ${lastcarinfomake} ${lastcarinfomodel}`;
//   }

// ==== Problem #3 ====
  // The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
  
function problem3(){
   alphabet=[];
   for(let i=0 ; i<inventory.length ;i++){
    alphabet.push(inventory[i].car_model)
   }
   alphabet.sort();
   return `Alphabetically order is ${alphabet}`;
}
//Here I export the data of solutions file 
module.exports={problem1,problem3};