function setUserName(userName)
{
    // complex DB call
    this.userName=userName
}
function createUser(userName,email,password)
{
    // setUserName(userName)   // ye call nhi ho rha h

    setUserName.call(this,userName)
    this.emai = email,
    this.password = password
}
const tarun = new createUser("tarun","tarun@fb.com","558521")
console.log(tarun)