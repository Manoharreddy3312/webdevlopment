

// // const Child = ({data,value,val}) => {

// import { Fragment } from "react";

// // const Child = ({emp}) => {
// const Child = ({stu}) => {
//   console.log(stu);
//   return (
//     <div>


//       {/* <h1>{props.data}</h1> */}
//         {/* <div>{data}</div>
//         <div>{value}</div>
//         <div>{val}</div> */}


//         {/* <div>
//             <div>Name: {emp.name}</div>
//             <div>Age: {emp.age}</div>
//             <div>City: {emp.city}</div>
//         </div> */}

        // <Fragment>
        //     {stu.map((student,index) => (
        //         <div key={index} style={{ backgroundColor: "lightgray", marginBottom: "10px", padding: "10px", borderRadius: "10px", width: "50%" , marginTop: "15px",marginLeft: "auto", marginRight: "auto"}}>
        //             <h2 style={{ textAlign: "center", marginBottom: "10px", color: "black" }}>{student.name}</h2>
        //             <ul style={{ listStyleType: "number" }}>
        //                 {student.skill.map((skill,index) => (     
        //                     <li key={index}>{skill}</li>
        //                 ))}
        //             </ul>
        //         </div>
        //     ))}
        // </Fragment>

//     </div>
//   )
// }

// export default Child

// =============================================================================================================

// import { Fragment } from "react";

// const Child = ({ stu }) => {
    
//     console.log(stu);
//     return (
//         <div>
//             {/* <Fragment>
//             {stu.map((student,index) => (
//                 <div key={index} style={{ backgroundColor: "lightgray",
//                     marginBottom: "10px", padding: "10px", borderRadius: "10px", width: "50%" , marginTop: "15px",marginLeft: "auto", marginRight: "auto"}}>
//                     <h2 style={{ textAlign: "center", marginBottom: "10px", color: "black" }}>{student.name}</h2>
//                    <div key={index}>
//                        <p style={{textAlign:'center'}}>Rating: {student.rating.comm}</p>
//                    </div>
//                 </div>
//             ))}
//         </Fragment> */}

//             <Fragment>
//                 {stu.studentDetails.map((student, index) => (
                    
//                     <div key={index} style={{
//                         backgroundColor: "lightgray",
//                         marginBottom: "10px", padding: "10px", borderRadius: "10px", width: "50%", marginTop: "15px", marginLeft: "auto", marginRight: "auto"
//                     }}>
//                         <h2 style={{ textAlign: "center", marginBottom: "10px", color: "black" }}>{student.name}</h2>
//                         <ul style={{ listStyleType: "number", color: "green" }}>
//                             {student.skill.map((skill, index) => (
//                                 <li key={index}>{skill}</li>
//                             ))}
//                         </ul>
//                         <div key={index}>
//                             <p style={{ textAlign: 'center',color:'red',fontWeight:'bold' }}>Rating: {student.rating.comm}</p>
//                         </div>

//                     </div>
//                 ))}
//             </Fragment>

//         </div>
//     )
// }

// export default Child



// import './Recipes.css'
// const Child = ({ data }) => {
//     const {products} = data;
//     console.log(products);
//   return (
//     <div id = 'container'>
//        {
//         products.map((products) => (
//             <div key={products.id} className="item" >
//                 <h2 className="item_title" >{products.title}</h2>
//                 <img src={products.image} alt={products.name} className="item_img" />
//                 <p className="des">{products.description}</p>
//                 <p className="cooking_time">Cooking Time: {products.prepTimeMinutes} Minutes</p>
//             </div>
//         ))
//        }
//     </div>
//   )
// }

// export default Child


import "./Recipes.css"

const Child = ({value}) => {
console.log(value);
const {products} = value;


  return (
    <div id='container'>
      {
     products.map((val, i) => (
  <main key={i} className="card">
    <div className='imageContainer'>
    
      <img src={val.thumbnail} alt={val.title}/> 
    </div>
    <div className="content-wrapper">
      <h2>{val.title}</h2>
     
      <p className="price">${val.price}</p> 
    </div>
  </main>
))}
    </div>
  )
}

export default Child;

