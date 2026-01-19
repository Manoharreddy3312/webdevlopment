let str = "Angular js"

// for (i in str){
//     console.log(str[i])   //! it will return index value

// }

// for (let i in str){
//     console.log(i)    //! it will return value
// }

// for (let i of str){
//     console.log(i)    //! it will return value
// }

// str.array.forEach((v)=>{
//     console.log(v)
// });
console.log(" ")

let arr = ["React js","Angular js","Vue js"];

// for (i in arr){
//     console.log(arr[i])    //! it will return index value
// }

// for (let i in arr){
//     console.log(i)    //! it will return value
// }

// for (let i of arr){
//     console.log(i)    //! it will return value
// }

arr.forEach((v)=>{    //! it will return value
    console.log(v)    //! it is used for iteration              
});

console.log(" ")


let Player = {
    name : "Kl Rahul",
    age  : 31,
    professional : "Cricket Player"
}

// for(i in Player){
//     console.log(Player[i])    //! it will return value
// }

// for(let i in Player){
//     console.log(i)    //! it will return index value
// }

// for(let i of Player){
//     console.log(i)    //! it will return value
// }


console.log()



    //   | --------------------------------------------------------|
    //   |        | string       |    arry           |    Object   |
    //   | -------|--------------|-------------------|-------------|        
    //   | forin  | index value  |   index value     |    keys     |
    //   | forof  | value        |   value           |   values    |
    //   | forEch | no index     |   no index        |    no index |
    //   -----------------------------------------------------------


