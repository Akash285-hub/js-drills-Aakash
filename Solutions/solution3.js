const inventory=require(`../Data/Data3`)

// Q1
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
module.exports={problem1}