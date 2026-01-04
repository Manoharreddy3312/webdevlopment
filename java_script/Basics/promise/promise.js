// console.log("hellow");

// ! PROMISE():
//! A Promise is an object representing the eventual completion or failure of an asynchronous operation.
//! It has three states: pending, fulfilled, and rejected.
//! Promises are used to handle asynchronous operations in JavaScript.

// OR

//! IT IS USED TO PERFORM ASYNCHRONUS TASK/OPERATION IN JavaScript.
//! A Promise is an object representing the eventual completion or failure of an asynchronous operation.



// let p1 = new Promise((req, rej) => {
//     req("i am resolved")
//     rej("i am rejected")
// })

// p1.then(() => {
//     console.log("Resolved then");
// })

// p1.catch(() => {
//     console.log("rejected catch");

// })
// p1.finally(() => {
//     console.log("i am finally block");

// })
// ===================
// p1.then(()=>{
// console.log(v);
//     console.log("i am resolved");
// }).catch(()=>{
//     console.log("catch rejected");
// }).finally(()=>{
//     console.log("finally block");
// })

// ==================================================
// ! TYPES OF PROMUISE:

// 1.all
// 2.allSettled
// 3.race
// 4.any
//! 1.all:  This returned promise fulfills when all of the input's promises are fulfill
// let p1 = new Promise((res, rej) => {
//     res("I am reolved..")
// })

// let p2 = new Promise((res, rej) => {
//     res("I am res---p2")
// })
// let p3 = new Promise((res, rej) => {
//     res("I am p3---res")
// })

// Promise.all([p1, p2, p3]).then((v) => {
//     console.log(v);
//     console.log("then block");
// }).catch(() => {
//     console.log("catch block");
// }).finally(() => {
//     console.log("finally block");
// })

// ==================================================
//! 2.allSettled:  This returned promise fulfills when all of the input's promises settle

// let p1 = new Promise((res, rej) => {
//     res("I am reolved..")
// })

// let p2 = new Promise((res, rej) => {
//     res("I am res---p2")
// })
// let p3 = new Promise((res, rej) => {
//     res("I am p3---res")
// })

// Promise.allSettled([p1, p2, p3]).then((v) => {
//     console.log(v);
//     console.log("then block");
// }).catch(() => {
//     console.log("catch block");
// }).finally(() => {
//     console.log("finally block");
// })

// ==================================================
//! 3.race: This returned promise settles with the eventual state of the first promise that settles.

// let p1 = new Promise((res, rej) => {
//     res("I am reolved..")
// })

// let p2 = new Promise((res, rej) => {
//     res("I am res---p2")
// })
// let p3 = new Promise((res, rej) => {
//     res("I am p3---res")
// })

// Promise.race([p1, p2, p3]).then((v) => {
//     console.log(v);
//     console.log("then block");
// }).catch(() => {
//     console.log("catch block");
// }).finally(() => {
//     console.log("finally block");
// })

// ================

// setTimeout(()=>{
//     console.log("Happy new Year 2026");
// },5000)

// setInterval(()=>{
//     console.log("Happy new Year 2026");
// },5000)
// ================

// let p1 = new Promise((res, rej) => {
//     setTimeout(() => {
//        res("i am --p1");
//     }, 4000)
// })
// let p2 = new Promise((res, rej) => {
//     setTimeout(() => {
//        res("i am --p2");
//     }, 3000)
// })
// let p3 = new Promise((res, rej) => {
//     setTimeout(() => {
//        res("i am --p3");
//     }, 2000)
// })
// Promise.race([p1, p2, p3]).then((v) => {
//     console.log(v);
//     console.log("then block");
// }).catch(() => {
//     console.log("catch block");
// }).finally(() => {
//     console.log("finally block");
// })



// ==================================================
//! 4.any:  -> This returned promise fulfills when any of the input's promises fulfill, with this first fulfillment value.
// ! -> It rejects when all of the input's promises reject 


// let p1 = new Promise((res, rej) => {
//     rej("I am reolved..")
// })

// let p2 = new Promise((res, rej) => {
//     rej("I am ---p2")
// })
// let p3 = new Promise((res, rej) => {
//     rej("I am p3")
// })

// Promise.any([p1, p2, p3]).then((v) => {
//     console.log(v);
//     console.log("then block");
// }).catch(() => {
//     console.log("catch block");
// }).finally(() => {
//     console.log("finally block");
// })

// ==================

// let p1 = new Promise((res, rej) => {
//     setTimeout(() => {
//        rej("i am --p1");
//     }, 4000)
// })
// let p2 = new Promise((res, rej) => {
//     setTimeout(() => {
//        rej("i am --p2");
//     }, 3000)
// })
// let p3 = new Promise((res, rej) => {
//     setTimeout(() => {
//        rej("i am --p3");
//     }, 2000)
// })
// Promise.any([p1, p2, p3]).then((v) => {
//     console.log(v);
//     console.log("then block");
// }).catch(() => {
//     console.log("catch block");
// }).finally(() => {
//     console.log("finally block");
// })

// =====================================================================
// ! PROMISE CHAINING:

// let p1 = new Promise((res,rej)=>{
//     res("i am p1")
// })

// p1.then((v)=>{
//     console.log("then in p1");
// })

// let p2 = new Promise((res,rej)=>{
//     res("i am p2")
// })

// p2.then(()=>{
//     console.log("then in p2");
// })

// p2.catch(()=>{
//     console.log("catch in p2");
// })

// p2.finally(()=>{
//     console.log("finally in p2");
// })

// p1.catch((v)=>{
//     console.log("catch in p1");
// })

// let p3 = new Promise((res,rej)=>{
//     res("i am p3")
// })

// p3.then(()=>{
//     console.log("then in p3");
// })

// p3.catch(()=>{
//     console.log("catch in p3");
// })

// p3.finally(()=>{
//     console.log("finally in p3");
// })

// p1.finally((v)=>{
//     console.log("finally in p1");
// })





