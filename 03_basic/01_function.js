

function sayMyName()
{
    console.log("T");
    console.log("A");
    console.log("R");
    console.log("U");
    console.log("N");
}
// sayMyName();

// function addTwoNumber(number1,number2)    // parameter h isme 
// {
//     console.log(number1 + number2);
// }
// addTwoNumber(4,56);   // or isme arrgument



function addTwoNumber(number1,number2)    // parameter h isme 
{
//     let result=number1 + number2;
//     return result;
// console.log("tarun");     // output nhi aayega because return ke bd console log excutes nhi hota h

// itna likhne ki jarurt nhi h
     return number1+number2;

}
const result= addTwoNumber(4,56);   // or isme arrgument
console.log("Result:",result);


function loggenUserMassage(username)
{
     return `${username} judt logged in`
}

console.log(loggenUserMassage("tarun"));
// console.log(loggenUserMassage(""));   //  just logged in
// console.log(loggenUserMassage());   //  undefined judt logged in


// function CalculatePrice(num1)      // only 200 hi milega
function CalculatePrice(...num1)      // [ 200, 400, 500 ] ye mil jayega
{
    return num1;

}
console.log(CalculatePrice(200,400,500));


const user ={
    userName:"tarun",
    price:"99"
}

function handleObject(anyObject)
{
    console.log(`userName is ${anyObject.userName} and price id ${anyObject.price}`)  //userName is tarun and price id 99
    console.log(`userName is ${anyObject.userName} and price id ${anyObject.prices}`)
                // output======>userName is tarun and price id undefined
}
// handleObject(user);
// ya fir ase bhi pass kr skte h

handleObject({
    username:"tanu",             // ab output=====> ye aayega (userName is undefined and price id 399) 
    price:"399"
})


const myNewArray=[100,200,355,400]

function returnSecondValue(getArry){
    return getArry[2]

}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,355,400]));           // donno ka same hi output aaayega 355