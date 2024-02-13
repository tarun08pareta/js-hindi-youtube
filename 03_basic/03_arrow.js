const user={
    userName:"tarun",
    price:555,

    welCome:function()
    {
     console.log(`${this.userName},welcome to website`);
    //  console.log(this);   // iska output
    //tarun , welcomme to website
//     { userName: 'tarun', price: 555, welCome: [Function: welCome] }
// pareta,welcome to website
// { userName: 'pareta', price: 555, welCome: [Function: welCome] }


    }
}
// user.welCome();         // function calll
// user.userName="pareta";
// user.welCome()
// console.log(this);    // output====>{}   empty print hoga



// function chai(){
//    let  username="tarun";
//     // console.log(this);  // bhut sari values aayegi tarun
//      console.log(this.username);   // output====>undefined  aayega

// }
// chai();

// const chai=function()
// {
//     let  username="tarun";
//     console.log(this.username);   // output=====>undefined
// }
// chai();


const chai=()=>
{
    let  username="tarun";
    console.log(this);   // output=====>{}
}
chai();



// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }                           /*ek method to ye h or ek or h*/
// console.log(addTwo(5,8));



// const addTwo=(num1,num2)=>  num1+num2;    //output ====>13
// const addTwo=(num1,num2)=>  (num1+num2);    //output ====>13
const addTwo=(num1,num2)=>  ({username:"tarun"});    //object ko
                               
    console.log(addTwo(5,8));    