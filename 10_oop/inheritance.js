class User{
    constructor(userName) {
        this.userName  = userName
        
    }
    logMe()
    {
        console.log(`USERNAME IS :${this.userName}`);
    }
}
 class teacher extends User
 {
    constructor(userName,email,password)
    {
        super(userName)
        this.email= email;
        this.password= password
    }

    addCource()
    {
        console.log(`Add new course was add by ${this.userName}`)
    }
 }
 const chai = new  teacher("RPJ","rpj@123","164646")

 chai.addCource()
//  console.log(chai.teacher())
console.log(chai instanceof teacher)   // true 
console.log(chai instanceof User)   // true 