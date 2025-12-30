//!--- NAMED FUNCTION (fuction with a name)

// function add(){
//     console.log("im a function");

// }

// add();

//or

// function Myfun(msg){
//     console.log(msg);

// }
// Myfun("i Love JS")


// function sum(x,y){
//     s = x+y
//     return s;
// }
// let a = sum(3,4)
// console.log(a);

//!---- ANONYMOUS FUNCTION (fuction without a name)

// function (){
//     console.log("anonymous funcrtion");

// }

//!---- FUNCTION WITH EXPRESSION

// let a = function(a,b){
//     console.log(a+b);

// }
// a(10,20);

// let a = function demo(){
//     console.log("FUNCTION WITH EXPRESSION-2");

// }
// a();

// ! PARAMETER FUNCTION

// function demo(a,b){
// let c = a+b;
//     console.log(a+b);
//     console.log(a-b)
//     console.log(a*b)
//     console.log(a/b)
//     console.log(a%b)
// }
// demo(10,50);



// ! ARROW FUNCTION (in 2-WAYS (BUT DO NOT RECOMMEND SHW))

// let a = (a,b)=>{
//     console.log(a+b);

// }
// a(100,200);

// let add = (a,b)=>(a+b);
// console.log(add(2,3));

// let a = b =>{
//     console.log(b);

// }
// a(3)

// let info = (a,b)=>{
//     let c = a+b;
//     return c
// }
// console.log(info(2,3));

//! using arrow function find factorial of a number

// let fact = (num)=>{
//     let f = 1;
//     for(let i = 1; i<num;i++){
//         f = f*i
//     }
//     return f;
// }
// console.log(fact(5));

// let a = (num)=>{
//     let fact=1;
//     for (let i=num;i>0;i--){
//         fact *=i;
//     }
//     console.log(fact);

// }
// a(5)

// ! IIFE (FUNCTIN THAT EXECUTE IMMEDIATELY AFTER THE EXECUTION)
// let = (function(){
//     console.log('I Run when immideatly...');

// })();

// ! NESTED FUNCTION

// function bank(){
//     function fd(){
//         console.log("second");
//         let fd_blc = 20000;
//         function total(){
//             console.log("Third");

//         }
//         let total = saving + fd_blc
//             console.log(total);


//         return total

//     }
//     return fd_blc

// }bank()()();


//! GENERATOR FUNCTION

// function * p(){
//     yield 101;
//     yield 102;
//     yield 103;
// }

// let pid = p();
//     console.log("bab",pid.next().value);
//     console.log("pen",pid.next().value);
//     console.log("sheow",pid.next().value);


// function* p() {
//     yield 101;
//     for (i = 101; i <= 106; i++) {
//         yield i;
//         i++
//     }
// }

// let pid = p();
// console.log("bab", pid.next().value);
// console.log("pen", pid.next().value);
// console.log("sheow", pid.next().value);
// console.log("pen", pid.next().value);


//! write a generator function to generate the first 5-natural numbers
// function * naturalNumbers(n){
//     for(let i=1;i<=n;i++){
//         yield i;
//     }
// }
// let numbers = naturalNumbers(5);
// console.log(numbers.next().value);
// console.log(numbers.next().value);
// console.log(numbers.next().value);
// console.log(numbers.next().value);
// console.log(numbers.next().value);



//! wap program on generator function .
// function * gen(){
//     let i = 0;
//     while(true){
//         yield i++;
//     }
// }
// let g = gen();
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);


//!-----RECURSSIVE FUNCTION(A FUNCTION CALLING ITSELF FROM  ITS  BODY )

// function info(){
//     console.log("recurssive function");
//     info()

// }
//! for above progrmam we want to print only 10 times
// let count = 0;
// function info(){
//     if(count<=10){
//         console.log("recurssive function");
//         count++;
//         info()
//     }
// }
// info()


//! using recurssive function find the factorial of a number
// function fact(n) {
//     if (n == 0) {
//         return 1;
//     } else {
//         return n * fact(n - 1);
//     }
// }
// console.log(fact(6));

//! HIGHER ORDER FUNCTION & CALLBACK FUNCTION

// function add(a, b, c) {
//     let d = a + b;
//     return c(d);
// }
// function result(z) {
//     console.log(z);
// }
// add(2, 4, result)

// ! FIRST ORDER FUNCTION
// function area(s) {
//     return s * s;
// }
// function parameter(p) {
//     return 4 * b;
// }
// function square(a, b) {
//     return b(a);
// }
// console.log(4, area);
// console.log(3, parameter);


function greet(name){
    return "Hello "+name;
}
console.log(greet("Manohar"));




