// for of  loop

const arr=[1,2,3,4,5]
for (const num of arr) {            
    console.log(num)
    
}
const greeting="hello tarun"
for (const greet of greeting) {
    // console.log(`Each char is:${greet}`)
    
}



// Map

const map = new Map()
map.set('IN',"INDIA")                              //    output==>Map(3) {
    map.set('USA',"UNITED State Of America")        //           'IN' => 'INDIA',
    map.set('Fr',"France")                            //          'USA' => 'UNITED State Of America',
                                                      //            'Fr' => 'France'
                                                       //           }



// console.log(map)

for (const key of map) {
       console.log(key)
    }

    // output=====>
    // [ 'IN', 'INDIA' ]
    // [ 'USA', 'UNITED State Of America' ]
    // [ 'Fr', 'France' ]

    for (const [key,value] of map) {
        console.log(key ,":-" ,value)
     }
     // output===>
    //  IN :- INDIA
    //  USA :- UNITED State Of America
    //  Fr :- France