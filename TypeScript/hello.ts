//! string

// let myname:string = "kl rahul"
// let myclg :string = "KLU"

// console.log("i am "+ myname+ " from "+myclg)
// ! NUMBER
let num : number = 20
let num2 : number = 30

console.log(num+num2)
console.log(num-num2)
console.log(num*num2)
console.log(num/num2)
console.log(num%num2)
console.log(num**num2)

//! Boolean
let isnumber:boolean = true;
console.log(isnumber)

//! undefined
let projectcmptdate:(undefined|string) = undefined
projectcmptdate = "30-11-2025"
console.log("project cmpleate date is "+projectcmptdate)

//! any

let stroreAnything:any;
stroreAnything = "i am a Cricket Player"
stroreAnything = 1
stroreAnything = true
console.log("strore anything is: "+stroreAnything)

// array

let myskills:string[]=["html","css","js","ts"]
let skillpro:number[]=[5,5,4,3]
let skillandpro:(string|number)[]=["html",5,"css",5,"js",4,"ts",3]    
console.log(myskills)
console.log(skillpro)
console.log(skillandpro)

console.log(" ")
myskills.push("React js")
skillpro.push(4)
skillandpro.push("React js",4)
console.log(myskills)
console.log(skillpro)
console.log(skillandpro)

git add .
git commit -m  "first commit"
git push -u origin main