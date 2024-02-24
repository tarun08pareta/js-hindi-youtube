// ES6

// class User {
//   constructor(userName, password, email) {
//     this.userName=userName;
//     this.password=password;
//     this.email= email;
//   }
//   encryptPassword(){
//     return `${this.password}aabc`
//   }

//   changeUserName()
//   {
//     return `${this.userName.toUpperCase()}`
//   }
// }
// const chai = new User("tarun","tarun@","tarun@125")
//  console.log(chai.encryptPassword())
//  console.log(chai.changeUserName())


 // behind the seen 

 function User(userName, password, email)
 {
    this.userName=userName;
    this.password=password;
    this.email= email;
 }
 User.prototype.encryptPassword = function()
 {
    return `${this.password}abc`
 }
User.prototype.changeUserName = function()
{
    return `${this.userName.toUpperCase()}`
}
 const tea = new User("tarun","dsbdjbjkkfu","bahubali@123")

 console.log(tea.encryptPassword())
 console.log(tea.changeUserName())