
// ! USEEFFECT HOOK

// import {useState,useEffect} from 'react'

// const FetchData = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch('https://dummyjson.com/recipes')
//       .then((res) => res.json())
//       .then((v) => {
//         console.log(v.recipes);
//         setData(v.recipes);
//       })
//      }, []);

//   return (
//     <div className="main">
//       <h1 style={{
//         fontWeight: 'bold',
//         fontSize: '30px',
//         color: 'white',
//         marginBottom: '20px',
//         textAlign: 'center',
//         margin: '20px 20px 20px 20px',
//         padding: '10px 10px 10px 10px',
//         borderRadius: '10px',
//         border: '1px solid black',
//         backgroundColor: 'orange',

//       }}>
//         Recipe List</h1>
//       <div className="content-wrapper">
//         {data.map((item) => (
//           <div key={item.id} className="card">
//             <img src={item.image} alt={item.title} className="card-image" />
//             <h2 className="card-title">{item.title}</h2>
//             <p className="card-description">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }; 
// export default FetchData;




// import {useState,useEffect} from 'react'

// const fetchData = () => {
//   const [data, setData] = useState([]);
//   function fetchRecipes() {
//     fetch('https://dummyjson.com/recipes')
//       .then((res) => res.json())
//       .then((v) => {
//         console.log(v.recipes);
//         setData(v.recipes);
//       });
//   }
//   useEffect(() => {
//     fetchRecipes();
//   }, []);

//     return (
//         <div className="main">
//             <h1 style={{
//                 fontWeight: 'bold',
//                 fontSize: '30px',
//                 color: 'white',
//                 marginBottom: '20px',
//                 textAlign: 'center',
//                 margin: '20px 20px 20px 20px',
//                 padding: '10px 10px 10px 10px',
//                 borderRadius: '10px',
//                 border: '1px solid black',
//                 backgroundColor: 'red',
//             }}>
//                 Recipe List</h1>
//             <div className="content-wrapper">
//                 {data.map((item) => (




//                     <div key={item.id} className="card">
//                         <img src={item.image} alt={item.title} className="card-image" />
//                         <h2 className="card-title">{item.title}</h2>
//                         <p className="card-description">{item.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default fetchData;


// create count and init and create 2 buttons count++ and init++ when clicking on count++ button count should increase by 1 and when clicking on init++ button init should increase by 1 and count should be increase display the count and init value in the UI use useState hook to manage the state of count and init and useEffect hook to log the count and init value whenever they change in the console.

// import { useState, useEffect } from 'react';
// const Count = () => {
//     const [count, setCount] = useState(0);
//     const [init, setInit] = useState(0);

//     useEffect(() => {
//         if (init == 0) {
//             setCount(count);
//         }else {
//             setCount(count+1);
//         }   
//     }, [init]);

//     return (
//         <div style={{
//             fontWeight: 'bold',
//             fontSize: '30px',
//             color: 'black',
//             marginBottom: '20px',
//             textAlign: 'center',
//             margin: '20px 20px 20px 20px',
//             padding: '10px 10px 10px 10px',
//             borderRadius: '10px',
//             border: '1px solid black',
       
//         }}>
//             <h1>
//                 Count and Init</h1>
//             <div>
//                 <div>
//                     <h2>Count: {count}</h2>
//                     <button className="card-button" onClick={() => setCount(count + 1)}>Count++</button>
//                 </div>
//                 <div className="card">
//                     <h2>Init: {init}</h2>

//                     <button onClick={() => setInit(init + 1)}>Init++</button>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Count;


 