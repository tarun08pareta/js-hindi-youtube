// singleton      construct se always singleton banega 
 //Object.create     this is construct type 


// object literals

const mySym = Symbol("key1")

const jsuser={
    name:"tarun",
    "full name":"tarun pareta",
    // mySym:"myKey",                 // string ki trh use hoga
    [mySym]:"myKey1",               // ab ye symbol ki trh use hogga
    age:18,
    location:"kota",
    email:"tarun@gmail.com",
    isLoggedIn:false,
    lastLoginDay:["monday","sunday"]

}
   
// console.log(jsuser.name);               // not is a good method

// console.log(jsuser["email"]);

 
// console.log(jsuser.full name);   // aoutput nhi milega 
// console.log(jsuser["full name"]);

// console.log( jsuser[mySym]);

jsuser.email="pareta@gmail.com"
// Object.freeze(jsuser)    // yha pr hi rok diya ab change nhi hoga

jsuser.email= "tarunpareta@gmail.com";

// console.log(jsuser);


jsuser.greeting =function(){
    console.log("hello js user");
}

jsuser.greetingTwo =function(){
    console.log(`hello js user,${this.name}`);
}

console.log(jsuser.greeting());  // undefine
console.log(jsuser.greetingTwo());