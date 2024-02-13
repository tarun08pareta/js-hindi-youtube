/**************** ARRAYS[The Array object, as with arrays in other programming languages]*********************/

const myArr=[0,1,2,3,4,"tarun"];

const myHeros =["IronMan","spiderMan"];




// console.log(myArr[5]);

// ARRAY METHOD
 

// myArr.push("bahubali")
// myArr.pop()                //last value remove 

// myArr.unshift(5)                 // array ke  1st element ke aage shift ho jayege
// myArr.shift()                 // array ke  1st element 0 ht jayega 

// console.log(myArr.includes(9));     // boolen type data type
// console.log(myArr.indexOf(3)); 


const newArr=myArr.join();


console.log(myArr)
console.log(newArr)                // ===========> output   0,1,2,3,4,tarun
// console.log(typeof newArr)               // new array ka STRING   aayegaa okkk



// slice ,splice

console.log("A" ,myArr);

const myn1 =myArr.slice(1,3)

console.log(myn1)
console.log("B",myArr)

const myn2 =myArr.splice(1,3)
console.log("C" ,myArr);    // output==========> array hi change ho gya "C [ 0, 4, 'tarun' ]"
console.log(myn2);              // output==========> array hi change ho gya "C [ 1,2,3 ]"