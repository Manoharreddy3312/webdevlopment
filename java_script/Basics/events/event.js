
// ! ---------1st way---------
// function info(){
//     alert("I am using inline event")
// }

// ! ---------2nd way---------
// document.getElementById("btn").onclick = function info(){
//     alert("I am using onclick event")
// }

// function info(){
//     alert("I am using inline event")
// }.

// ==========================================================================================================

// ! ---------3rd way---------.
// document.getElementById("btn").addEventListener("click",function info(){
//     alert("I am using addEventListener event")
// },false)
// document.getElementById("btn").addEventListener("click",info,false)



//! dbclick:
// document.getElementById("btn").addEventListener("dblclick",function info(){
//     alert("I am using dblclick event")
// },false)

//! Mouseover:

// document.getElementById("btn").addEventListener("mouseover",function info(){
//     alert("I am using mouseover event")
// },false)

//! Mouseout:

// document.getElementById("btn").addEventListener("mouseout",function info(){
//     alert("I am using mouseout event")
// },false)


//! mousemove:

// document.getElementById("btn").addEventListener("mousemove",function info(){
//     alert("I am using mousemove event")
// },false)

//! mouseenter:

// document.getElementById("btn").addEventListener("mouseenter",function info(){
//     alert("I am using mouseneter event")
// },false)


//! mouseleave:

// document.getElementById("btn").addEventListener("mouseleave",function info(){
//     alert("I am using mouseleave event")
// },false)

// document.getElementById("btn").onclick = function info(e){
//     console.log(e.clientX)
//     console.log(e.clientY)
//     console.log(e.target)
//     console.log(e)

//     console.log("I am using onclik event")
// }

// ==========================================================================================================


//!   KEYBOARD EVENTS

// let user  = document.getElementById("username")
// user.onkeypress = function info(){
//     alert("I am using onkeypress event")
// }

// user.onkeydown = function info(){
//     alert("I am using onkeydown event")
// }

// user.onkeyup = function info(){
//     alert("I am using onkeyup event")
// }

// user.onblur = function info(){
//     alert("I am using onblur event")
// }

// user.onfocus = function info(){
//     alert("I am using onfocus event")
// }
// user.addEventListener("keypress",function info(e)){
//     console.log(e.target.value)
// }

// ==========================================================================================================


// ! FORM EVENTS

// user.onsubmit = function info(){
//     alert("I am using onsubmit event")
// }

// user.onreset = function info(){
//     alert("I am using onreset event")
// }

// user.oninput = function info(){
//     alert("I am using oninput event")
// }

// user.oninvalid = function info(){
//     alert("I am using oninvalid event")
// }
// user.focus = function info(){
//     alert("I am using onfocus event")
// }

// user.blur = function info(){
//     alert("I am using onblur event")
// }

// user.addEventListener("input",function info(e){
//     console.log(e.target.value)
// })

// user.addEventListener("change",function info(e){
//     console.log(e.target.value)
// })

// user.addEventListener("blur",function info(e){
//     console.log(e.target.value,"blurevent")
// })
// user.addEventListener("focus",function info(e){
//     console.log(e.target.value,"focusevent")
// })

// ==========================================================================================================


//! POINTER EVENT :

// document.getElementById("btn").addEventListener("pointerdown",function info(){
//     console.log("I am using pointerdown event")
// },false)

// document.getElementById("btn").addEventListener("pointerup",function info(){
//     console.log("I am using pointerup event")
// },false)

// document.getElementById("btn").addEventListener("pointerover",function info(){
//     console.log("I am using pointerover event")
// },false)

// document.getElementById("btn").addEventListener("pointerout",function info(){
//     console.log("I am using pointerout event")
// },false)

// document.getElementById("btn").addEventListener("pointerenter",function info(){
//     console.log("I am using pointerenter event")
// },false)

// document.getElementById("btn").addEventListener("pointerleave",function info(){
//     console.log("I am using pointerleave event")
// },false)

// document.getElementById("btn").addEventListener("pointermove",function info(){
//     console.log("I am using pointermove event")
// },false)

// ==========================================================================================================
// ! video task:

// let video = document.getElementById("myVideo");

// video.addEventListener("mouseover", function () {
//     this.play();
// });

// video.addEventListener("mouseout", function () {
//     this.pause();
// });

// ==========================================================================================================

//! EVENT PROPAGATION:


let gp = document.getElementById("gp")
let parent = document.getElementById("parent")
let child = document.getElementById("child")


gp.addEventListener("click",function(){
    console.log()
},false)












