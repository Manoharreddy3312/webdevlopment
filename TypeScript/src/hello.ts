//! string

// let myname:string = "kl rahul"
// let myclg :string = "KLU"

// console.log("i am "+ myname+ " from "+myclg)
// ! NUMBER
// let num : number = 20
// let num2 : number = 30

// console.log(num+num2)
// console.log(num-num2)
// console.log(num*num2)
// console.log(num/num2)
// console.log(num%num2)
// console.log(num**num2)

//! Boolean
// let isnumber:boolean = true;
// console.log(isnumber)

//! undefined
// let projectcmptdate:(undefined|string) = undefined
// projectcmptdate = "30-11-2025"
// console.log("project cmpleate date is "+projectcmptdate)

//! any

// let stroreAnything:any;
// stroreAnything = "i am a Cricket Player"
// stroreAnything = 1
// stroreAnything = true
// console.log("strore anything is: "+stroreAnything)

//! array

// let myskills:string[]=["html","css","js","ts"]
// let skillpro:number[]=[5,5,4,3]
// let skillandpro:(string|number)[]=["html",5,"css",5,"js",4,"ts",3]    
// console.log(myskills)
// console.log(skillpro)
// console.log(skillandpro)

// console.log(" ")
// myskills.push("React js")
// skillpro.push(4)
// skillandpro.push("React js",4)
// console.log(myskills)
// console.log(skillpro)
// console.log(skillandpro)



//! Tuple()

// let idetails:[string,string,number] = ["Amazon","CID-1",66]
// let [companyName,Role,iduration] = idetails
// console.log("CompanyName: "+companyName)
// console.log("Role:"+Role)
// console.log("InterviewDuration: "+iduration+ " Min")

// let trainBooking:{
//     trainName:string,
//     No_of_passingers : number
//     Ticket_number : number
// } = {
//     trainName:'Rayalaseema SF',
//     No_of_passingers:3,
//     Ticket_number: 786789
// }
// console.log(trainBooking)



// let ProductBooking:{
//     Product_Name : string,
//     product_Price : number,
//     product_Id : number,
//     product_mfd : string,

// } = {
//     Product_Name : "Iphone",
//     product_Price : 6987957,
//     product_Id : 190970878699986,
//     product_mfd : "20-FEB-2000"  
// }

// console.log("Your Product Booking Details is : " ,ProductBooking)

//! Enum :

// enum projectStatus{
//     inProgresss = "Project is in Progress",
//     complete = "Project is Complete",
//     onHold = "Project is on Hold"

// }
// console.log("What is the project Statu ?")
// console.log(projectStatus.inProgresss)


function info(a:string):string{
    return `KLASSY CRICKETER ${a}`

}
let result = info("kl rahul")
console.log(result);

console.log("javascript")