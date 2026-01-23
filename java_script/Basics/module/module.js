//!---- default export----------
export default function add(a, b) {
    console.log(a + b)
}

//!------- named export ---------
 function sub(a, b) {
    console.log(a - b)
}

 function mul(a, b) {
    console.log(a * b)
}

// ! exporting  multiple values in a singele line
export{
    sub,mul
}


export{
    sub as substract ,mul as multiply
}





