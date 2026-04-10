//! callback():

// function add(a,b){
//     console.log(a+b)
// }
// function cal(callback){
//     callback(1,20)

// }
// cal(add);


//! Generator()

// function* Generator() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const gen = Generator()
// console.log(gen.next.value)
// console.log(gen.next.value)
// console.log(gen.next.value)


//! IIFE

// (function(name){
//     console.log("Hello "+name)
// })
// ("RAHUL KL")

//! Promise
let mypromise = new promise((res,rej)=>{
    let suc = "True";
    if (suc){
        res("promise resolved")
       }else{
        rej("promise rejected")
       }   
})

mypromise
.then((result) => {
console.log(result)
    
}).catch((err) => {
    console.log(err)
});




