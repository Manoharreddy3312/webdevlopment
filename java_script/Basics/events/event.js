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
document.getElementById("btn").addEventListener("click",function info(){
    alert("I am using addEventListener event")
},false)
document.getElementById("btn").addEventListener("click",info,false)





