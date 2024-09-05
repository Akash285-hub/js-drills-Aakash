//Here I Import the file  person.js
const person  = require('../Data/Data1');

//Q1 Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

function problem1(){
    let emails=[]
    for(let i=0 ; i < person.length ; i++){
        emails.push(person[i].email)
    }
    return `Emails are: ${emails}\n`;
}


//Q2 Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

function problem2(age){

    let hobbies=[]
    for(let i =0 ; i < person.length ; i++){
        if(person[i].age===age){
            hobbies.push(person[i].hobbies)
        }
    }
    
    return `Hobbies are: ${hobbies}\n`;
  }

  // Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.


function problem3(){
    if (typeof Country !== 'string') {    
      return `Invalid country parameter\n`;
    } 
    let name=[]
    for(let i =0 ; i < person.length ; i++){
        if(person[i].isStudent===true && person[i].country==='Australia'){
            name.push(person[i].name)
        }
    }
    return `Name of the student is: ${name}\n`;
  }

  module.exports={problem1,problem2,problem3}