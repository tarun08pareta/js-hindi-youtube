const TinderUser=new Object();       // single tone object    output========>{}

// const TinderUser={};             // none single tone object   output====>{}

TinderUser.id="2021UCS031";

TinderUser.name="tarun";
 TinderUser.isLoggedIn=false;

console.log(TinderUser);

const regularUser={
   
    email:"ravi@gmail.com",
    fullName:{
        userfullName:{
            firstName:"ravi",
            lastName:"pareta",
        }
    }
}
// console.log(regularUser.fullName.userfullName["lastName"]);

const obj1={
    1:'t',2:'a',3:'r',4:'u',5:'n'
}
const obj2={
    6:'p',7:'a',8:'r',9:'e',10:'t',11:'a'
}

// const obj3={obj1,obj2}   output====>{
//   obj1: { '1': 't', '2': 'a', '3': 'r', '4': 'u', '5': 'n' },
//   obj2: { '6': 'p', '7': 'a', '8': 'r', '9': 'e', '10': 't', '11': 'a' }
// }


// const obj3=Object.assign({},obj1,obj2);     //(target object ,sources)

// console.log(obj3);          // sinngle {} me aa jayega nested {} me nhi aayega 


// const obj3={...obj1,...obj2}
// console.log(obj3);            // same output



const usres=[
    {                                                                    // arrry me objects
        id:1,
         email:"tarungamil.com"
    },
    {
        id:1,
         email:"tarungamil.com"
    },
    {
        id:1,
         email:"tarungamil.com"
    }
]
// console.log(usres[1].email);


// console.log(TinderUser);
// console.log(Object.keys(TinderUser));    //output===>[ 'id', 'name', 'isLoggedIn' ]       dataType==> ARRAY hi aayega
// console.log(Object.values(TinderUser));    //output===>[ '2021UCS031', 'tarun', false ]      dataType==> ARRAY hi aayega
// console.log(Object.entries(TinderUser));    //output===>[  [ 'id', '2021UCS031' ],[ 'name', 'tarun' ],[ 'isLoggedIn', false ]]      dataType==> ARRAY hi aayega


// console.log(TinderUser.hasOwnProperty('isLoggedIn'));                     //output=======>true



const Course={
    CourseName:"js in hindi",
    price:'999',
    CourseInstructor:"hitesh"
}

// const {CourseInstructor}=Course;
// console.log(CourseInstructor);   output=====>hitesh  

const {CourseInstructor:taecher}=Course;
console.log(taecher);                         // same hi output aayega okk


// {
//     // this is API
//    " name":"hitesh",
//     "CourseInstructor":'hitessh',
//     "price":"free"
// }


[     //oit is also API
    {},
    {},
    {}
]
