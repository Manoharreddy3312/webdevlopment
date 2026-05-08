

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

//         <Fragment>
//             {stu.map((student,index) => (
//                 <div key={index} style={{ backgroundColor: "lightgray", marginBottom: "10px", padding: "10px", borderRadius: "10px", width: "50%" , marginTop: "15px",marginLeft: "auto", marginRight: "auto"}}>
//                     <h2 style={{ textAlign: "center", marginBottom: "10px", color: "black" }}>{student.name}</h2>
//                     <ul style={{ listStyleType: "number" }}>
//                         {student.skill.map((skill,index) => (     
//                             <li key={index}>{skill}</li>
//                         ))}
//                     </ul>
//                 </div>
//             ))}
//         </Fragment>

//     </div>
//   )
// }

// export default Child

// =============================================================================================================

import { Fragment } from "react";

const Child = ({ stu }) => {
    +
    console.log(stu);
    return (
        <div>
            {/* <Fragment>
            {stu.map((student,index) => (
                <div key={index} style={{ backgroundColor: "lightgray",
                    marginBottom: "10px", padding: "10px", borderRadius: "10px", width: "50%" , marginTop: "15px",marginLeft: "auto", marginRight: "auto"}}>
                    <h2 style={{ textAlign: "center", marginBottom: "10px", color: "black" }}>{student.name}</h2>
                   <div key={index}>
                       <p style={{textAlign:'center'}}>Rating: {student.rating.comm}</p>
                   </div>
                </div>
            ))}
        </Fragment> */}

            <Fragment>
                {stu.studentDetails.map((student, index) => (
                    
                    <div key={index} style={{
                        backgroundColor: "lightgray",
                        marginBottom: "10px", padding: "10px", borderRadius: "10px", width: "50%", marginTop: "15px", marginLeft: "auto", marginRight: "auto"
                    }}>
                        <h2 style={{ textAlign: "center", marginBottom: "10px", color: "black" }}>{student.name}</h2>
                        <ul style={{ listStyleType: "number" }}>
                            {student.skill.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                        <div key={index}>
                            <p style={{ textAlign: 'center',color:'red',fontWeight:'bold' }}>Rating: {student.rating.comm}</p>
                        </div>

                    </div>
                ))}
            </Fragment>

        </div>
    )
}

export default Child
