const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  //Db call, cryptoGraphics ,network
  setTimeout(function () {
    console.log("Asyn Task is complete ");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("Promise consumed ");
});



new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved ");
});




const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "tarunkalal", email: "tarunkalal841@gmail.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});



const PromiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    error = false;
    if (!error) {
      resolve({ username: "tarun", password: "1235551" });
    } else {
      reject("ERROR:Something went worng");
    }
  }, 1000);
});




PromiseFour.then(function (user) {
  console.log(user);
  return user.username;
})
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("the promise either is resolved or rejected");
  });





const PromiseFive = new Promise(function (resolve,reject) {
  setTimeout(function () {
    error = false;   //  false hoga to code run ho jaye ga but
    if (!error) {
      resolve({ username: "javaScript", password: "1235551" });
    } else {
      reject("ERROR:java Script  went worng");
    }
  }, 1000);
});
  
async function ConsumePromiseFive (){
    const Response = await PromiseFive
    console.log(Response)
}
ConsumePromiseFive()









const PromiseSix = new Promise(function (resolve,reject) {
    setTimeout(function () {
      error = true;   //  false hoga to code run ho jaye ga but  true hoga to try catch method lagana padega async method me 
      if (!error) {
        resolve({ username: "java", password: "1235551" });
      } else {
        reject("ERROR:    java  went worng");
      }
    }, 1000);
  });
    
  async function ConsumePromiseSix (){
      try {
        const Response = await PromiseSix
      console.log(Response)
      } catch (error) {
        console.log(error)
      }
  }
  ConsumePromiseSix()


  async function getAllUsers(){
    try {
        const Response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data =  await Response.json()   //  data ko direct hone me time lagega to isko bhi await krana padega
        console.log(data)
    } catch (error) {
        console.log('E:', error)
    }
      
  }

  getAllUsers()


  

  fetch('https://jsonplaceholder.typicode.com/users')
  .then( function(Response){
return Response.json()
  })
  .then((data)=>{
console.log(data)
  })
  .catch( (error)=>{
   console.log(error)
  })