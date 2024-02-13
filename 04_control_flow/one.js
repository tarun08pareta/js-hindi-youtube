
// if
// < ,> <= >= ==, ===, != !==
// const isUserLoggedIn=true;

// const tempature =41
// if(tempature >50)
// {
// console.log("tempature is less than 50");
    
// }
// else {
//     console.log("tempature is greathan 50")
// }


// const score =200;
// if (score>100) {
//     let power ="fly"
   
//     console.log(`User power :${power}`)   //ye excuted ho jayyega 
// } console.log(`User power :${power}`)  // but ye nhi ho payega because ye scop ke bhar aa jayega ok



// const balance=1000;
// if (balance>850) console.log("test");
    
// if(balance<500)
// {
//     console.log("less than 500");
// }
// else if(balance <750)
// {
//     console.log("less than 750");
// }else if(balance< 900)
// {
//     console.log("less than 950");

// }else{
//     console.log("less than 1200")
// }


const userLoggedIn=true
const DebitCard=true
const LoggedInFromGoogle=false
const LoggedInFromEmail=true
if(userLoggedIn && DebitCard)
{
    console.log("Allow to buy")
}
if (LoggedInFromEmail || LoggedInFromGoogle) {
    console.log("user logged in")
}
