
let a=300;
if(true)
{
    let a=10;
    const b=20;
    console.log("INNER:",a);
}
console.log("outsidde:",a);



function one()
{
    const userName="tarun"
    function Two()
    {
        const website="youtube"
        console.log(userName);
    }
   
    // console.log(website);
    Two();
}
one();


// if(true)
// {
//     const userName="pareta"
//     if(userName==="pareta")
//     {
//         const website=" linkdln"
//         console.log(userName + website);

//     }
//     // console.log(website)
// }
// console.log(userName);


/*********************************INTERSTING*********************** */

console.log(addOne(6))
function addOne(num1)
{
    return num1 +1;
}


const addTwo=function(num2)
{
    return num2+1;

}
console.log(addTwo(2))

// // upr wala program chal jayega but agr niche wale ki trh kre to error aayegi


// addOne(6);              // ye functin to extidue kr lega 
// function addOne(num1)
// {
//     return num1 +1;
// }

// addTwo(8);      // is function ko variable me store kr diya h to ye exitude nhi kr payega
// const addTwo=function(num2)
// {
//     return num2+1;

// }

