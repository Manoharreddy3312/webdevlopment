
//! 1️ Functions
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // 8

//! 1️ IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("IIFE executed immediately");
})();



//! 2️ Generator Function
function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

let gen = generateNumbers();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3



// ! 3️ Callback Function (Basic)
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Manohar", sayBye);



// ! Callback with setTimeout (Very common):

setTimeout(function () {
    console.log("This runs after 2 seconds");
}, 2000);

//! Promise

let myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Promise resolved!");
    } else {
        reject("Promise rejected!");
    }
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));

// ! Closures

function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    };
}

let counter = outer();
counter(); // 1
counter(); // 2


// ! 4 Fetch API]

fetch("https://dummyjson.com/products/1")
    .then(res => res.json())
    .then(data => console.log(data.title))
    .catch(err => console.log(err));

//! Async & Await

async function getProduct() {
    try {
        let res = await fetch("https://dummyjson.com/products/1");
        let data = await res.json();
        console.log(data.title);
    } catch (error) {
        console.log(error);
    }
}
getProduct();


//! Spread Operator

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

console.log(arr2); // [1,2,3,4,5]

// ! Rest Operator

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10


//! map()

let nums = [1, 2, 3, 4];

let squares = nums.map(n => n * n);
console.log(squares); // [1,4,9,16]


//! filter()

let numbers = [10, 15, 20, 25];

let result = numbers.filter(n => n > 15);
console.log(result); // [20,25]

// ! reduce()

let values = [1, 2, 3, 4];

let total = values.reduce((sum, val) => sum + val, 0);
console.log(total); // 10

// ! Destructuring
let user = {
    name: "Manohar",
    age: 23
};

let { name, age } = user;
console.log(name, age);

//!  Modules

export function add(a, b) {
    return a + b;
}

import { add } from "./math.js";

console.log(add(2, 3)); // 5


