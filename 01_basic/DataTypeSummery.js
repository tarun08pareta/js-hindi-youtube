// *************************************PRIMITIVE DATA TYPE***********************************
 
//call by value

// 7 TYPE :String ,number,boolen,null,undefined,symbol(unique value banane ke liye)

// Bigint


// Is JavaScript a static type or a dynamic type?

// Javascript is a dynamic typing language. When you declare a variable, you do not need to specify what type this variable is. Javascript engine infers what type this variable is based on the value assigned to at run time.


const score =100;
const scoreValue =100.3

const isLoggedIn = false;

const outSideTemp = null;
let userEmail;      // undefined

const id =Symbol('123')
const anotherId =Symbol('123')
 console.log( id ===anotherId);        // not equal 

 const bigNumber = 4446454454551441n;   // n lagane pr automatic bigint bn gya h


// *******************NON PRIMITIVEDATA TYPE **************************
//refernce type data type

// Arrary ,objects , Functions


const heros =["tarun" ,"ironman","spiderman"]

let myObj={
    name :"tarun",
    age: 20
}

const myFunction = function(){
console.log("hello world")
}
myFunction();
console.log(typeof myFunction )     // function ka type     object function hota h




//**************************************************** */

// Stack memory(Primitive )    and HEAP memory  (Non -Primitive )   

let myYoutubename = "tarun08pareta"
let anothermame = myYoutubename;

anothermame ="chaiaurcode"
console.log(myYoutubename);
console.log(anothermame);


let user ={
    email : "usersjj@gmail.com",
    upi:"user@ybl"
}
let userTwo =user;
 userTwo.email ="tarun@.com";   /// user one se copy nhi reference milta h

console.log(user.email)
console.log(userTwo.email)    // dono me same hi value aayega reference lekar
