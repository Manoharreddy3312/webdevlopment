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
// }

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

document.getElementById("btn").onclick = function info(e){
    console.log(e.clientX)
    console.log(e.clientY)
    console.log(e.target)
    console.log(e)


    console.log("I am using onclik event")
}





