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
module.exports={problem1}



