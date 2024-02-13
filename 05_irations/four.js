const myObject={
    js:"java script",
    cpp:"c++",
    rb:"ruby"

}
// for in loop
for (const key in myObject) {
    // console.log(key,":-",value)  ye nhi hoga print
    // console.log(myObject[key])    // java script c++ ruby

    console.log(`${key} is for each word ${myObject[key]}`)
}


// for in loop in array

const programming=["js","c++","rb"]
for (const key in programming) {

    console.log(programming[key])
        
    }


    // map pr for in loop

//     const map = new Map()
// map.set('IN',"INDIA")                              
//     map.set('USA',"UNITED State Of America")        
//     map.set('Fr',"France")                            
                                    

//     for (const key in map) {    // map ke uprfor in loop nhi chalega
//         console.log(key)
//     }