// db.students.insertMany(
//     [
//         {
//             name:"bahubali",
//             age:25,
//             course:"mba"
//         },
//         {
//             name:"dev sena",
//             age:21,
//             course:"llb"

//         }
//     ]
// )
db.students.find(
    {
        course:"llb"
    }
)

db.students.insert(
    {
        name:"nehs",
        age:20,
        country:"india",
        course:"java",
        date:new Date(),
        sr:Math.random()
    }
)
db.students.updateOne(
    {
        name:"aadi",
    },
    {
        $set:{
            age:15
        }
       
    },
    {
        upsert:ture
    }
)
db.students.updateOne(
    {
        name:"neha"
    },
    {
        $unset: { age:2 } 

    }

)
db.students.remove(
    {
        name:"rajiv"
    },
   

)