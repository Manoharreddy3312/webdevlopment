// console.log("hai");

// ! OBJECT : object are the real-time entity which is used to store the data in key-value pair.
// ! it is non-primitive datatype.
// ! it is mutable.


// ! ------Using Literal Way----------

// let emp ={
//     name : "kl Rahul",
//     age : 31,
//     state : 'Karnataka',
//     proffession : 'Cricketer'
// }

// console.log(emp); //---add
// emp.wife_name = "Athya shetty"

// console.log(emp);

// delete emp.wif_name // delete
// console.log(emp);

// ====================================================================
// let student = {
//     name: "kl rahul",
//     city: "karnataka",
//     skill: ["cricketer", "swimming", "football"]
// }

// skill can print one by one  using methods
// console.log(student.skill[0]);
// console.log(student.skill[1]);
// console.log(student.skill[2]);

// console.log();

//! using map method:
// student.skill.map((a) => {
//     console.log(a);
// })

// ==================================================================

// let student = [{
//     name: "kl rahul",
//     city: "karnataka",
//     skill: ["html", "css", "js", "react js"],
//     course: "java full stack"
// },
// {

//     name: "sweety",
//     city: "ap",
//     skill: ["mannual", "selenium", "api testing"],
//     course: "Testing full stack",
// },
// {

//     name: "bunty",
//     city: "hyd",
//     skill: ["pandas", "numpy", "django"],
//     course: "python full stack",
    
// }

// ]
// student.map((i) => {
//     i.skill.map((j) => {
//         console.log(j);
//     })
    
// })

// ==================================================================



// let student = {
//     name: "kl rahul",
//     city: "karnataka",
//     skill: ["cricketer", "swimming", "football"]
// }

// skill can print one by one  using methods
// console.log(student.skill[0]);
// console.log(student.skill[1]);
// console.log(student.skill[2]);

// console.log();

//! using map method:
// student.skill.map((a) => {
//     console.log(a);
// })

// ==================================================================

// let data  =
// student : [{
    //     name: "kl rahul",
    //     city: "karnataka",
    //     skill: ["html", "css", "js", "react js"],
    //     course: "java full stack"
    // },
    // {
        
    //     name: "sweety",
    //     city: "ap",
    //     skill: ["mannual", "selenium", "api testing"],
    //     course: "Testing full stack",
    // },
    // {
        
    //     name: "bunty",
    //     city: "hyd",
    //     skill: ["pandas", "numpy", "django"],
    //     course: "python full stack",
    
    // }  
    // ]
    
// ==================================================================

// let data = {
//     student: [
//         {
//             name: "kl rahul",
//             city: "karnataka",
//             skill: ["html", "css", "js", "react js"],
//             course: "java full stack"
//         },
//         {
            
//             name: "sweety",
//             city: "ap",
//             skill: ["mannual", "selenium", "api testing"],
//             course: "Testing full stack",
//         },
//         {
            
//             name: "bunty",
//             city: "hyd",
//             skill: ["pandas", "numpy", "django"],
//             course: "python full stack",
            
//         }
        
//     ]
// }

// data.student.map((i) => {
//     i.skill.map((j) => {
//         console.log(j);
//     })
// })

// ==================================================================

// let data = {
//     student: [
//         {
//             name: "kl rahul",
//             city: "karnataka",
//             skill: ["html", "css", "js", "react js"],
//             course: "java full stack",
//             rating:{
//                 rate:"1"
//             }
//         },
//         {
            
//             name: "sweety",
//             city: "ap",
//             skill: ["mannual", "selenium", "api testing"],
//             course: "Testing full stack",
//             rating:{
//                 rate:"2"
//             }
//         },
//         {
            
//             name: "bunty",
//             city: "hyd",
//             skill: ["pandas", "numpy", "django"],
//             course: "python full stack",
//             rating:{
//                 rate:"1*"
//             }
            
//         }
        
//     ]
// }
// //! print the rate of each student
// data.student.map((i) => {
//     console.log(i.rating.rate);
// })
// ==================================================================
let user = [{
    name:"anish",
    active:false
},
{
    name : "ravi",
    active:true
},
{
    name : "sweety",
    active:true
}
]

// for(let i=0; i<user.length; i++){
//     if(user[i].active === true){
//         console.log(user[i]);
//         break;
//     }


// let a= user.find((v)=>{
//     return v.active==true
// })

// console.log(a);




//! let arr = [2,5,3]. find the product of all numbers using array method

// let arr = [2,5,3]
// let product = arr.reduce((acc,cv)=>{
//     return acc * cv
// },1)
// console.log(product);






























































