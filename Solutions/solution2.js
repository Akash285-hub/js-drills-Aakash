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

 //Q4 Group users based on their Programming language mentioned in their designation.
function problem4(){
    const rx1=/\bGolang\b/i;
    const rx2=/\bJavascript\b/i;
    const rx3=/\bPython\s*Developer\b/i;

    let group={
        'golangDeveloper':[],
        'javascript':[],
        'python':[]
    }
    for(let i=0; i<Users.length ;i++){
        let designationlist=Users[i][1].desgination;
       if(rx1.test(designationlist)){
        group['golangDeveloper'].push(Users[i][0]);
       }
       else if(rx2.test(designationlist)){
        group['javascript'].push(Users[i][0]);
       }
       else if(rx3.test(designationlist)){
        group['python'].push(Users[i][0]);
       }
    }   
    return group;
}

//Here I export all the data of the solution file
module.exports={problem1,problem2,problem3,problem4};