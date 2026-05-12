// import Child from "./Child"
// import React from "react"

// let emp = {
//     name: "John Doe",
//     age: 30,
//     city: "New York",
//     skill: "React"

// }


// let student = {
//   studentDetails:[{
//     name: "Vamshi Krishna Java developer",
  
//     skill:["JavaScript","React","Node.js","Express.js"],
//     rating:{
//         comm: "1",
//     }
// },{
//     name: "Rajesh Kumar Python Developer",

//     skill: ["Python", "Django", "Machine Learning", "Data Science"],
//       rating:{
//         comm: "2",
//     }

// },
// {
//     name: "Sai Cloud Engineer",

//     skill: ["AWS", "DEVOPS", "JUNKINS", "DOCKER"],
//       rating:{
//         comm: "3",
//     }
// }
// ]
// }

// const Parent = () => {
//   return (
//     <div>
//       {/* <h1>Parent Component</h1> */}
//         {/* <Child data = "Hello from Parent!" value = "React" />   */}
//          {/* <Child emp = {emp} />   */}
//         <Child stu = {student} />
//     </div>
//   )
// }

// export default Parent;



import Child from "./Child"
import data from "./data.json"



const Parent = () => {
  console.log(data);
  return (
    <div>
        <Child value={data} />
    </div>
    

  )
}

export default Parent
