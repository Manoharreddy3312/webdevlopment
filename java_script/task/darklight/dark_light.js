// let themeToggle = document.getElementById('themeToggle');
// let mode = "light";
// themeToggle.addEventListener('click', () => {
//     if (mode === "light") {
//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "white";
//         mode = "dark";
//         themeToggle.innerText = "light mode"
//     } else {
//         document.body.style.backgroundColor = "white";
//         document.body.style.color = "black";
//         mode = "light";
//         themeToggle.innerText = "dark mode"
//     }
// });


// random change color every click on button
let themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    document.body.style.color = "#" + randomColor;
    themeToggle.style.backgroundColor = "#" + randomColor;
    themeToggle.style.color = "#" + randomColor;
    themeToggle.innerText = `color theme code is #${randomColor}`;
});


// let themeToggle= document.getElementById("themeToggle")

// themeToggle.addEventListener("click",()=>{
//     let randomColor = Math.floor(Math.random()*1000000)
//     document.body.style.backgroundColor = `#${randomCode})`
//     addEventListener.style.backgroundColor = `#${randomCode})`
//     document.body.style.color = `#${randomColor})`
//     themeToggle.style.color = `#${randomColor})`
// // })





