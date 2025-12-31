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
// let user = [{
//     name:"anish",
//     active:false
// },
// {
//     name : "ravi",
//     active:true
// },
// {
//     name : "sweety",
//     active:true
// }
// ]

// for(let i=0; i<user.length; i++){
//     if(user[i].active === true){
//         console.log(user[i]);
//         break;
//     }
// }

// let a= user.find((v)=>{
//     return v.active==true;
// })

// console.log(a);


//! let arr = [2,5,3]. find the product of all numbers using array method

// let arr = [2,5,3]
// let product = arr.reduce((acc,cv)=>{
//     return acc * cv
// },1)
// console.log(product);


// =================================================================================

//! ---------------USING OBJECT CONCTRUCTOR--------------------------

// let emp = new Object();
// console.log(emp);
// emp.name = "Kl Rahul";
// emp.age = 31
// console.log(emp);


// =================================================================================

//! ---------------USING FUNCTION AS A CONSTRUCTOR-------------------

// function Cake(cname,cprice){
//     this.cake_name = cname;
//     this.cake_price = cprice;
// }
// let c1 = new Cake("white Forest",1000)
// console.log(c1);

// let c2 = new Cake("Red velvate",1500)
// console.log(c2);

// let c3 = new Cake("Honey Cake",1700)
// console.log(c3);

// =================================================================================

// ! math(): The Math object provides properties and methods for mathematical constants and functions.

// console.log(Math.PI); //! 1
// let a = Math.floor(20.2) //! 2
// let a = Math.ceil(20.2)  //! 3
// let a = Math.round(20.2)  //! 4
// let a = Math.random()  //! 5
// (let a = Math.random()*1000)  //! Generate random numbers like OTP
// let a = Math.min(9,7,3,7,56)  //! 6
// let a = Math.max(9,7,3,7,56)  //! 7
// let a = Math.sqrt(4) //! 8
// let a = Math.cbrt(27) //! 9
// let a = Math.pow(5,2) //! 10
// let a = Math.pow(5,2) //! 11
// console.log(a);

// =================================================================================

// git add .
// git commit -m "commit"
// git push --set-upstream origin main
// git push

// =================================================================================


// ! -------OBJECT METHODS-----------


// let emp = {
//     name : "kl rahul",
//     age : 31,
//     city : "Karnataka"
// }


// let objectkeys = Object.keys(emp)  //! ---1
// console.log(objectkeys);

// let objectvalues = Object.values(emp)  //! ---2
// console.log(objectvalues);


// Object.freeze(emp) //!---3
// emp.state = "Telangana";
// console.log(Object.freeze);


// Object.isFrozen(emp)  //! ---4
// console.log(Object.isFrozen(emp));

// Object.seal(emp)  //! ---5
// emp.state = "Telangana";
// console.log(Object.seal(emp));

// Object.isSealed(emp)  //! ---6
// console.log(Object.isSealed(emp));

// ===================================================================

// !-----------DATE & TIME -----------------

// let a = new Date()
// console.log(a);
// let year = a.getFullYear()
// console.log(year);
// console.log(a.getFullYear());
// console.log(a.getMonth());
// console.log(a.getDay());
// console.log(a.getHours());
// console.log(a.getMinutes());
// console.log(a.getSeconds());
// console.log(a.getMilliseconds());
// console.log(a.getTime());
// console.log(a.getTimezoneOffset());
// console.log(a.getUTCDay());
// console.log(a.toLocaleDateString());
// console.log(a.toLocaleTimeString());

// let b = new Date()

// console.log(b.setFullYear(2026,0,1));
// console.log(b.setHours(13));


let ref = new Date();
let day = ["Sunday", "Monday","Tueday","Wednesday","Thursday","Friday","Saturday"]
let dayCount = ref.getDay();
console.log(day[dayCount]);
console.log(day[3]);

// ===================================================================

         












































