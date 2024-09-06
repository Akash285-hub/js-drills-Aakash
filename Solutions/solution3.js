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
return `Car 33 is a ${carinfomake} ${carinfomodel} ${carinfoyear}\n`;
}
// Q2-
//   The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
//   ("Last car is a *car make goes here* *car model goes here*");
  
function problem2() {
    let lastcarinfomake=[];
    let lastcarinfomodel=[];
    lastcarinfomake.push(inventory[inventory.length-1]);
    return `Last car in their inventory is : ${lastcarinfomake} \n`;
  }

// ==== Problem #3 ====
  // The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
  
function problem3(){
   alphabet=[];
   for(let i=0 ; i<inventory.length ;i++){
    alphabet.push(inventory[i].car_model)
   }
   alphabet.sort();
   return `Alphabetically order is ${alphabet}\n`;
}

//Q4
  // The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.
function problem4(){
    caryear=[];
    for(let i=0; i<inventory.length;i++){
         caryear.push(inventory[i].car_year)
    }
    return `Years are : \n ${caryear}\n`;
}
  // Q5
  // The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
function problem5(){
    oldcars=[];
    for(let i=0 ;i<inventory.length ;i++){
        if(inventory[i].car_year<2000){
            oldcars.push(inventory[i])
        }
    }
    console.log(`Cars are older than the year of 2000 :` ,oldcars.length);
    return console.log(`Array of older cars are :`,oldcars)
}

  //Here I export the data of solutions file 
module.exports={problem1,problem3,problem4,problem5};