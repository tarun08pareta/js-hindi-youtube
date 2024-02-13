// const userEmail="tarun@gmail.com"   // output===>Got User Email"
// const userEmail=""     //output===>Dont't have user email

const userEmail=[]

if(userEmail)
{
    console.log("Got User Email")
}else{
    console.log("Dont't have user email")
}

// faulsy value  ===> false ,0 ,-0,"", BigInt 0n,  null , undefined  ,NaN(not a nnumber )

// turthly value ===> "0" ,'false',[], " ",{},   function(){}

if (userEmail.length===0) {
    console.log("Array is empty")
    
}

const emptyObj= {}
if(Object.keys(emptyObj).length===0)
{
    console.log("object in emppty")
}

// Nullish Coalescing Operator (??)   null   undefined

let val1;
// val1=5 ?? 10    // output===>5
// val1=null ?? 10     // output===> 10
// val1 =undefined ?? 15     //  output===>15

val1= null ?? 10 ?? 20      // output===> 10

console.log(val1)


// Ternary  operator

// Condition ? true:false


const iceTeaPrice=100
iceTeaPrice<=80? console.log("less than 80"):console.log("greathan than 80");