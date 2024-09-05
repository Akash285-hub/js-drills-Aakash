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
    // console.log(interestlist)
    for(let j=0 ; j<interestlist.length ; j++){
        if(rx.test(interestlist[j]))
        {
            games.push(Users[i][0]);
        }
        }
    }
    return `Users which are interested in playing video games are : ${games}`;
 }

 // Q2 Find all users staying in Germany.
function problem2(users){
    userstay=[];
    for(let i=0 ; i<Users.length ; i++){
     let data =Users[i][1];
     if(data.nationality==="Germany"){
         userstay.push(Users[i][0])
     }
    }
    return `Users Staying in Germany : ${userstay}`;
 }

// Q3 Find all users with masters Degree.
  function problem3(users){
    Degree=[];
    for(let i=0 ; i<Users.length ; i++){
     let data =Users[i][1];
     if(data.qualification==="Masters"){
         Degree.push(Users[i][0])
     }
    }
    return `Users with Masters degree : ${Degree}`;
 }



//Here I export all the data of the solution file
module.exports={problem1,problem2,problem3};