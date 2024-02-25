const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter)

// console.log(Math.PI)

// Math.PI = 5;
// console.log(Math.PI)


const chai = {
    name : "Taja Chai",
    price :250,
    isAvaiable : true
}
// console.log(chai)

console.log(Object.getOwnPropertyDescriptor(chai,"name"))


Object.defineProperty(chai,'name' ,{
    writable: false,
  enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))