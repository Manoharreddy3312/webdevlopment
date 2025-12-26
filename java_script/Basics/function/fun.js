// Function is name. it perform a specific task and it also reuse the code block

// ! No input and No output it means no parameters and arguments
// let a = 100;
// let b = 200;

// function add(){
//     let c;
//     c = a+b
//     console.log(c);

// }
// add(); //==>//! CALLING FUNCTION

//===================================================================================
//! using return Keyword

// let a = 100;
// let b = 200;

// function add(){
//     let c
//     c = a+b;
//     return c;
// }
// let res = add();
// console.log(res);

//===================================================================================

//! Using parameters  
// function add(x, y) {
    //     let c;
    //     c = x + y;
    //     return c;
    // }
    // let res = add(100, 200);
    // console.log(res);
//===================================================================================
// ! How use and impliment Functions
// function marks(gainmarks,totalmarks){
//     let student = (gainmarks/totalmarks)*100;
//     let student_marks;
    
//     if(student>=90){
//         student_marks = 'A';
//     }
//     else if(student>=80){
//         student_marks = 'B';
//     }
    
//     else if(student>=70){
//         student_marks = 'C';
//     }
    
//     else if(student>=60){
//         student_marks = 'D';
//     }
//     else {
//         student_marks = 'F';
//     }
//     console.log(student_marks);
    
// }
// marks(72,100);
// marks(45,100);
// marks(100,100);
// marks(82,100);
//===================================================================================

// 1. fuction declaration
// 2. Function Expression
// 3. Arrow Function
// 4. immediat invoked Function expression - IIFE
// 5. Generator function
// 6. callback Function
// 7. Higher order function -HOF
// 8. first order function
// 9. nested Function
// 10.Anonymus Function
 
//===================================================================================
// !1. Named Function

// Definition:
// A function that has a name and can be called using that name.

// Example:

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5

// !2. Anonymous Function

// Definition:
// A function without a name, usually assigned to a variable or passed as an argument.

// Example:

let multiply = function (a, b) {
  return a * b;
};

console.log(multiply(3, 4)); // 12

// !3. Function Expression

// Definition:
// A function stored in a variable. It can be named or anonymous.

// Example:

const square = function (x) {
  return x * x;
};

console.log(square(5)); // 25

// !4. First Order Function

// Definition:
// A function that does not take another function as an argument and does not return a function.

// Example:

function greet() {
  return "Hello!";
}

console.log(greet());

// !5. Arrow Function

// Definition:
// A shorter syntax for writing functions using =>.

// Example:

const subtract = (a, b) => a - b;

console.log(subtract(10, 4)); // 6

// !6. Immediately Invoked Function Expression (IIFE)

// Definition:
// A function that runs immediately after it is defined.

// Example:

(function () {
  console.log("IIFE executed");
})();

// !7. Nested Function

// Definition:
// A function defined inside another function.

// Example:

function outer() {
  function inner() {
    return "Inner function";
  }
  return inner();
}

console.log(outer());

// !8. Recursive Function

// Definition:
// A function that calls itself until a condition is met.

// Example:

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// !9. Generator Function

// Definition:
// A function that can pause execution using yield and resume later.

// Example:

function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numbers();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

// !10. Higher Order Function (HOF)

// Definition:
// A function that accepts another function as an argument or returns a function.

// Example:

function operate(a, b, operation) {
  return operation(a, b);
}

console.log(operate(4, 5, (x, y) => x + y)); // 9

// ! 11. Callback Function

// Definition:
// A function passed as an argument to another function and executed later.

// Example:

function fetchData(callback) {
  callback("Data received");
}

fetchData(function (message) {
  console.log(message);
});


// 1. Closures
// Definition:

// A closure is a function that remembers and can access variables from its outer function, even after the outer function has finished executing.

function bankAccount() {
  let balance = 1000;

  return function () {
    return balance;
  };
}

let account = bankAccount();
console.log(account()); // 1000



// 2. Currying
// Definition:

// Currying is a technique where a function with multiple arguments is converted into a sequence of functions, each taking one argument.

// Example:

function multiply(a) {
  return function (b) {
    return a * b;
  };
}

console.log(multiply(4)(5)); // 20























