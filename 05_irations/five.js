// for each loop 

const coding=["js","java","cpp","python",'ruby']
// coding.forEach(function name(){});// function ase likhte h butt for each me change ho jayega

// coding.forEach(function(val){
//     console.log(val)
// })



// coding.forEach( (item) => {
//     console.log(item);
// })


// function printMe(item)
// {
//     console.log(item)
// }
// coding.forEach(printMe);


// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr)

// })



const myCoding=[
    {
        languageName:"java script",
        languageFileNamee:"js"

    },
    {
        languageName:"JAVA ",
        languageFileNamee:"java"

    },
    {
        languageName:"python",
        languageFileNamee:"py"

    }
]
myCoding.forEach( (item)=>{                     // her ek item object h oer item ke ander value h 
console.log(item.languageFileNamee)
})