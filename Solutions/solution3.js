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
    let lastcarinfomake;
    lastcarinfomake =inventory[inventory.length-1];
    return "Last car is a "+ lastcarinfomake.car_make +" "+lastcarinfomake.car_model+" "+lastcarinfomake.car_year;
    
  }

// Q3
  // The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
  
function problem3(){
   alphabet=[];
   for(let i=0 ; i<inventory.length ;i++){
    alphabet.push(inventory[i].car_model)
   }
   alphabet.sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()));
   return `Alphabetically order is:\n ${alphabet}\n`;
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
    console.log(`Cars are older than the year of 2000 :\n` ,oldcars.length);
    return console.log(`Array of older cars are :\n`,oldcars)
}

  //Q6
  // A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
  
  function problem6(){
    carchoice=[];
    for(let i=0 ;i<inventory.length;i++){
        if(inventory[i].car_make==="BMW" || inventory[i].car_make==="Audi"){
            carchoice.push(inventory[i]);
        }
    }
    console.log(`With an Array return\n`,carchoice);
    console.log(`With JSON function use\n`,JSON.stringify(carchoice))
  return carchoice;
  }
  

  //Here I export the data of solutions file 
module.exports={problem1,problem2,problem3,problem4,problem5,problem6};