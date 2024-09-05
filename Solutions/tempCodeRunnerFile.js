//Here I import the all the data of the user object 
const users=require(`../Data/Data2`);

//Here I initialize the object Users in the form of array
const Users = Object.entries(users);

// Q1 Find all users who are interested in playing video games.
function problem1(){
    const rx=/\bVideo\s*Games\b/i;
    let games=[];
    for(let i=0 ;i<Users.length ;i++){
        let interestlist=Users[i][1].interests;
    
    for(let j=0 ; j<interestlist.length ; j++){
        if(rx.test(interestlist[j]))
        {
            games.push(Users[i][0]);
        }
        }
    }
    return `Users which are interested in playing video games are : ${games}`;
 }
 module.exports= {problem1}