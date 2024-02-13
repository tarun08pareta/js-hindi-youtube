const MyNum=[1,2,3,4]

// const myTotal=MyNum.reduce(function (acc,currentValue){
//     console.log(`acc:${acc} and currentValue:${currentValue}`)
//     return acc+currentValue

// },0)                                        // acc ki value 0 di gyi h


const myTotal=MyNum.reduce( (acc,cuuValue) => acc+cuuValue,0)
console.log(myTotal)


const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:2990
    },
    {
        itemName:"java course",
        price:3999
    },
    {
        itemName:"c++ course",
        price:999
    }
]
const priceToPay= shoppingCart.reduce( (acc,item) => acc+item.price,0)
console.log(priceToPay)