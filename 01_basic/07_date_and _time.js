/**************************************DATE*********************************************/

let myDate = new Date()
// console.log(myDate)                          // output=====> 2023-10-20T10:39:29.163Z
// console.log(myDate.toString())                    //output=====> Fri Oct 20 2023 16:09:29 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString())               //  output=====> Fri Oct 20 2023
// console.log(myDate.toLocaleDateString())       //output=====> 20/10/2023
// console.log(typeof myDate)                         // date ka typeof  object


let myCreateDate =new Date("2023-01-23")
// console.log(myCreateDate.toLocaleString());                   // month 0 se start hota h


let myTimeStamp = Date.now()
// console.log(myTimeStamp)

// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now() /1000));        // m.sec me convert


let newDate  =new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth() +1);


console.log(`${newDate.getDay() } and time`);

newDate.toLocaleString('default ',{
    weekday: "long",
   
})