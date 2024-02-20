const user ={
    userName :'tarun',
    loginCount:8,
    signeid:true,

    getUsersDetails:function(){
        // console.log("got user details from user dataBases")
        // console.log(`userName is : ${this.userName}`)
        // console.log(this)
    }
}
// console.log(user.userName,user.loginCount)
// console.log(user.getUsersDetails())
// console.log(this)


function User(userName,userCount,isLogged){
    this.userName=userName
    this.userCount=userCount
    this.isLogged=isLogged
    // return this          // aap likho to kya wrna koi jarurt nhi 
}
// console.log(User("tarun",2,true))
const UserOne= new User("tarun",2,true)
const UserTwo= new User("pareta",5,false)
console.log(UserOne)
console.log(UserTwo)