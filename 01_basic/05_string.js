/***********************STRING*****************************/

const name ="tarun"
const repoCount =20;

// console.log(name +repoCount +"value");

console.log(`hello my name is  ${name} and my repo count is ${repoCount}`);

//one more action string declar
 let gameName = new String("tarun-kalal");
//  console.log(gameName[0])
 console.log(gameName.__proto__);


//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
//  console.log(gameName.toLowerCase());

//  console.log(gameName.charAt(2));        /// 2nd position pr konsa word h
//  console.log(gameName.indexOf('t'));        /// t konsi index pr hoga

const newString = gameName.substring(0,4);

// console.log(newString);   /// output   "taru"  only 3 char hi aayege 0 1 2

const anotherString = gameName.slice(-10,4)
console.log(anotherString); 


const newStringOne =  "   tarun    ";
console.log(newStringOne);                        // same print hoga space bh aayega okk tarun
console.log(newStringOne.trim());     // same print nhi hoga spcde nhi aayega 

const url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"

console.log(url.replace('org','com'));


console.log(url.includes("tarun"));   // output false aayega okk na

/*string convert arraay*/
console.log(gameName.split('-'))    // output  ====> [ 'tarun', 'kalal' ]
 