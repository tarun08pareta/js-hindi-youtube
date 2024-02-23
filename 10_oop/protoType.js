// const myName = "tarun     "
// const myChai = "chai    "

// // console.log(myName.trim().length)
// console.log(myName.trueLength)

let myHero = ["thor", "spiderMan"];

let heroPower = {
  thor: "hammer",
  spiderMan: "sling",
  getSpiderPower: function () {
    // console.log(`spidy power is ${this.spiderMan}`);
  },
};

Object.prototype.tarun = function () {
//   console.log(`tarun is present is all object`);
};

Array.prototype.heyTarun = function () {
//   console.log(`hello tarun what are you doing`);
};
// heroPower.tarun()
// myHero.tarun();
// myHero.heyTarun();
// heroPower.heyTarun()

// inheritance


const user = {
    name : "tarun",
    email:"taruyay@@hguh"
}

const teacher = {
  makeVideo: true,
};
const teachingSupport = {
  isAviable: false,
};

const TASsupport = {
  makeAssignment: "make js assignment ",
  fullTime: true,
  __proto__:teachingSupport
};
 teacher.__proto__= user

 // morden  syntax

 Object.setPrototypeOf(teachingSupport,teacher)

 let anotherUserName = "chaiOrCode      "

 String.prototype.trueLength = function()
 {
    console.log(`${this}`)
    // console.log(`${this.user}`)
    console.log(`true length is :${this.trim().length}`)

 }
 anotherUserName.trueLength()

 "tarun".trueLength()
 "chai".trueLength()