// import { useState } from "react";
/*  
// const Firststate = () => {
//     const [count, setCount] = useState(0);
//     function increment(){
//         setCount(count + 1);
//     }
//     function decrement(){
//         setCount(count - 1);
//     }
//     function reset(){
//         setCount(0);
//     }

//     return (
//       <div>
//             <h1>Change User: {user}</h1>
//             <button onClick={() => setUser('Klassy Rahul')}>
//                 Click me
//             </button>
//         </div>


//         change random colors when we click on the button
//         <div>
//             <h1 style={{color: colors}}>Change User: {setColors}</h1>
//             <button onClick={() => setColors('#' + Math.floor(Math.random()).toString(16).substring(2, 7))}>
//                 Click me
//             </button>
//         </div>
//         
//             <div>
//                 <h1 style={{color:'red'}}>Count: {count}</h1>
//                 <button style={{color:'green',fontSize:'20px'}} onClick={increment}>
//                     Increase Count
//                 </button>
//                 <button style={{color:'orange', marginLeft:'10px', marginRight:'10px', fontSize:'20px'}} onClick={decrement}>
//                     Decrease Count
//                 </button>
//                 <button style={{color:'blue',fontSize:'20px'}} onClick={reset}>
//                     Reset Count
//                 </button>
//             </div>

      
//     );
// };

// export default Firststate;

// const Firststate = () => {
    //     const [emp, setEmp] = useState({
//         name: 'KL Rahul',
//         salary: 20000,
//         city: 'Karnataka'
//     });
//     return (
//         <div>
//             <h1>Name: {emp.name}</h1>
//             <h2>Salary:&#8377; {emp.salary}</h2>
//             <h2>City: {emp.city}</h2>
//             <button style={{marginRight: '10px',color:'green',fontSize:'20px'}} onClick={() => setEmp({...emp, city: 'Mumbai',})}>
//                 Update city
//             </button>
//             <button style={{marginRight: '10px',color:'blue',fontSize:'20px'}} onClick={() => setEmp({...emp, salary: emp.salary + 10000})}>
//                 Update salary
//             </button>
//         </div>

//     );
// };

// export default Firststate;



// const Firststate = () => {
    //     const [ShowPassword, setShowPassword] = useState(false);
    
//     return (
    //         <div style={{alignItems:'center', marginTop:'50px', gap:'20px'}}>
    //           password: <input type={ShowPassword ? 'text' : 'password'} placeholder="Enter password" />
    //           <button onClick={() => setShowPassword(!ShowPassword)}>
    //             {ShowPassword ? 'Hide' : 'Show'} Password
    //           </button>
    //         </div>
    
    
    //     )
    // }
    
    // export default Firststate;
    
    
    
    
    // spinner loading the page for 3 seconds and then show the content

    // const Firststate = () => {
//     const [loading, setLoading] = useState(true);

//     setTimeout(() => {
    //         setLoading(false);
//     }, 3000);

//     if (loading) {
    //         // return <div style={{alignItems:'center', marginTop:'25%'}}>Loading...</div>;
    //         return <div style={{alignItems:'center', marginTop:'20%'}}><img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Loading..." /></div>;
    //     }
    
    //   return (
        //     <div>
        //         <h1 style={{alignItems:'center',marginTop:'25%',background:"blue", color:"white", padding:"20px"}}>Welcome to React Library</h1>
        
        //     </div>
        //   )
        // }
        
        // export default Firststate
        
        
        
        
        // import React from 'react';

        // const Firststate = () => {
//     //  button to like and unlike the post
//     const [liked, setLiked] = React.useState(false);
//   return (
//     <div>
//         <div>


//             <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" alt="Post Image" style={{width: '30%', height: '30%',marginTop: '15%'}} />
//         </div>
//       <button onClick={() => setLiked(!liked)} >
//         {liked ? 'Unlike' : 'Like'}
//             <span style={{color: liked ? 'red' : 'gray', marginLeft: '5px', fontSize: '20px'}}>&#10084;</span>
//       </button>
//         <p>{liked ? 'You liked this post.' : 'You have not liked this post yet.'}</p>
//     </div>
//   )
// }

// export default Firststate

*/

/*
// const Firststate = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [currentPage, setCurrentPage] = useState('Home');

//     const handleLogout = () => {
//         setIsLoggedIn(false);
//         setCurrentPage('Home');
//     };

//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//     };

//     return (
//         <div style={{ fontFamily: 'Arial, sans-serif', background: '#f0f0f0', minHeight: '100vh', padding: '20px', fontSize: '25px' }}>
//             <nav style={{ display: 'flex', gap: '20px', background: 'orange', color: 'white', justifyContent: 'center', padding: '20px', borderRadius: '10px', fontSize: '25px' }}>
//                 <button onClick={() => handlePageChange('Home')}>Home</button>
//                 <button onClick={() => handlePageChange('About')}>About</button>
//                 <button onClick={() => handlePageChange('Contact')}>Contact</button>
//                 {!isLoggedIn ? (
//                     <>

//                         <button onClick={() => { setIsLoggedIn(true); handlePageChange('Home'); }}>Register</button>
//                         <button onClick={() => { setIsLoggedIn(true); handlePageChange('Home'); }}>Login</button>
//                     </>
//                 ) : (
//                     <button onClick={handleLogout}>Logout</button>
//                 )}
//             </nav>
//             <div style={{ padding: '20px', textAlign: 'center', outline: 'none', margin: '20px' }}>
//                 <h1>{currentPage} Page</h1>
//                 {isLoggedIn && <p>Welcome back! You are logged in.</p>}
//             </div>
//         </div>
//     );
// };

// export default Firststate;

*/

/*
//! use switch case 
const Firststate = () => {
    const[isLogged, setIsLogged] = useState(true);

    function toggle(e){
        e.preventDefault();
        setIsLogged(!isLogged);
    }
    
        switch(isLogged){
            case true:
                return (
                    <nav style={{display:'flex', gap:'30px', background:'orange', color:'black', justifyContent:'center', padding:'30px', borderRadius:'10px', fontSize:'25px'}}>
                        <a href="#" style={{textDecoration:'none'}}>Home</a>
                        <a href="#" style={{textDecoration:'none'}}>About</a>
                        <a href="#" style={{textDecoration:'none'}}>Contact</a>
                        <a href="#" onClick={toggle} style={{textDecoration:'none'}}>Register</a>
                        <a href="#" onClick={toggle} style={{textDecoration:'none'}}>Login</a>
                    </nav>
                )                       
            case false:
                return (
                    <nav style={{display:'flex', gap:'30px', background:'orange', color:'black', justifyContent:'center', padding:'30px', borderRadius:'10px', fontSize:'25px', margin:'20px', outline:'none', textAlign:'center',textDecoration:'none',}}>
                        <a href="#" style={{textDecoration:'none'}}>Home</a>
                        <a href="#" style={{textDecoration:'none'}}>About</a>
                        <a href="#" style={{textDecoration:'none'}}>Contact</a>
                        <button onClick={toggle} style={{background:'red', color:'white', border:'none', padding:'10px', borderRadius:'5px', cursor:'pointer'}}>Logout</button>
                    </nav>
                )
            default:return null;
        }   
}

export default Firststate;

*/




//! /* use if and else condition */

/*
    if (isLogged==true) {
        return (
            <nav style={{display:'flex', gap:'20px', background:'orange', color:'white', justifyContent:'center', padding:'20px', borderRadius:'10px', fontSize:'25px'}}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#" onClick={toggle}>Register</a>
                <a href="#" onClick={toggle}>Login</a>
            </nav>

        )
        }
    else{    
        return (
            <nav style={{display:'flex', gap:'20px', background:'orange', color:'white', justifyContent:'center', padding:'20px', borderRadius:'10px', fontSize:'25px', margin:'20px', outline:'none', textAlign:'center',textDecoration:'none',}}>
                <a href="#" >Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <button onClick={toggle} style={{background:'red', color:'white', border:'none', padding:'10px', borderRadius:'5px', cursor:'pointer'}}>Logout</button>
            </nav>
    )
    }
}


//! use && operator

const Firststate = () => {
    const[isLogged, setIsLogged] = useState(false);

    function toggle(e){
        e.preventDefault();
        setIsLogged(!isLogged);
    }
    return (
        <nav style={{display:'flex', gap:'30px', background:'orange', color:'black', justifyContent:'center', padding:'30px', borderRadius:'10px', fontSize:'25px'}}>
            <a href="#" style={{textDecoration:'none'}}>Home</a>
            <a href="#" style={{textDecoration:'none'}}>About</a>
            <a href="#" style={{textDecoration:'none'}}>Contact</a>
            {!isLogged && (
                <>

                    <a href="#" onClick={toggle} style={{textDecoration:'none'}}>Register</a>
                    <a href="#" onClick={toggle} style={{textDecoration:'none'}}>Login</a>
                </>
            )}
            {isLogged && (
                <button onClick={toggle} style={{background:'red', color:'white', border:'none', padding:'10px', borderRadius:'5px', cursor:'pointer'}}>Logout</button>
            )}
        </nav>
    )
}
export default Firststate



// ! design a card in the cart our profile and on button subscribe Hi Manu plese subscribe to our primium package and it will render the next page with message "Congragulations! Manu Thank you for subscribing to our primium package !" and when click unsubscribe it will render the next page with message "Sorry to see you go Manu, you have unsubscribed from our primium package !"



const Firststate = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    
    function toggle(e) {
        e.preventDefault();
        setIsSubscribed(!isSubscribed);
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
            <div style={{
                backgroundColor: '#fff',
                width: '350px',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                textAlign: 'center',
                fontFamily: 'Segoe UI, Roboto, sans-serif',
                
            }}>
            <img src="data:image/jpeg;base64,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" alt="Profile Image" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '15px', objectFit: 'cover', border: '3px solid #007bff' }} />
            <h2 style={{ color: '#333', fontSize: '20px', marginBottom: '10px' }}>Kl Rahul Profile</h2>
            <p style={{ color: '#666', fontSize: '15px', marginBottom: '20px' }}>Hi KL Rahul, please subscribe to our premium package</p>
            
            <button onClick={toggle} style={{ background: isSubscribed ? '#6c757d' : '#007bff', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '30px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', width: '90%', marginBottom: '20px', transition: 'background 0.3s' }}>
                {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
                </button>
                
                {isSubscribed ? (
                    <p style={{ color: '#28a745', fontWeight: '500' }}>Congratulations! Kl Rahul, thank you for subscribing to our premium package!</p>
                ) : (
                    <p style={{ color: '#dc3545', fontSize: '14px' }}>Sorry to see you go Kl Rahul, you have unsubscribed from our premium package!</p>
                )}
                
            </div>
            </div>
        )
    }
    export default Firststate
    
*/

    
    