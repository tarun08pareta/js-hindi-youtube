// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS  (IIFE)


function chai()
{
    console.log(`DB CONNECTED`)
}
chai();


(function chai()
{
    console.log(`DB CONNECTED`)
})();


(()=>{
    console.log(`DB CONNECTED TWO`)
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})("tarun");