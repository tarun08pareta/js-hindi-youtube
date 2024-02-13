// for loops 

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==8)
    {
        // console.log("8 is best number")
        
    }
    // console.log(element)
    
}


for (let i = 0; i <=10; i++) {
    // console.log(`outer loop ${i}`)
    for (let j = 0; j <=10; j++) {
    //    console.log(`innter loop ${j} and outer loop ${i}`)
    // console.log( i + '*' + j + ' = ' + i*j)
    }
    
}


let myArray=["tarun","bahubali","superman","batman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    if(element=="bahubali"){
        // console.log("bahubali most bahubali super hero")
        
    }
    // console.log(element)
    
}

// for (let index = 0; index <=20; index++) {
//     if(index==8)
//     {
//         console.log(`Detected 8`)
//         break
//     }
//    console.log(`value of i is:${index}`)
    
// }
for (let index = 0; index <=20; index++) {
    if(index==8)
    {
        // console.log(`Detected 8`)
        continue
    }
//    console.log(`value of i is:${index}`)
    
}