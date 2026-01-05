// let a = document.getElementById("root");
// console.log(a);

// a.innerHTML = "i am learning DOm";
// a.innerHTML = "<h1>I am learning dom and innerHtml</h1>";

// let b = "<div><h1>i am learning dom</h1></div>";

// a.innerHTML = b;

// console.log(a.innerHTML);

// a.style.color = "green";


// give background image to the div
// a.style.backgroundImage = "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')";
// a.style.height = "500px";
// a.style.width = "500px";
// a.style.backgroundSize = "cover";

// a.innerText = "i am using innerText"
// a.textContent = "i am using textContent"
// a.textContent = "<h1> i am using innerContent</h1>"



// let b = document.getElementById("content")
// console.log(b.innerText);
// console.log(b.textContent);


// ! DOM METHODS

// let root = document.getElementById("root")

// let content = document.getElementsByClassName("content")
// content[0].style.color = "red"
// console.log(content);
// content[1].style.backgroundColor = "orange"
// content[1].style.color = "white"

// content.item(1).style.backgroundColor = "orange"
// content.item(1).style.color = "black"
// content.item(1).style.width= "fit-content"
// content.item(1).style.padding= "10px"
// content.item(1).style.borderRadius = "10px"
// content.item(1).style.textSize = "bold"
// content.item(1).style.marginTop = "10px"

// let tag = document.getElementsByTagName("div")
// console.log(tag);
// tag[0].style.color = "green"
// tag[1].style.backgroundColor = "orange"
// tag[1].style.color = "black"
// tag[2].style.color = "red"

// ! querySelector :  it will return one element when it is matched i.e 1st element
// let query = document.querySelector("#root")
// let query1 = document.querySelector(".content")
// let query2 = document.querySelector("div")
// console.log(query);
// console.log(query1);
// console.log(query2);
// query.style.color="red"
// query1.style.color="orange"

//! querySelectorAll(): This method returns a static NodeList of all elements that are found within the HTML document with the specific selector.

let a = document.querySelectorAll("div")
let b = document.querySelectorAll(".content")
let c = document.querySelectorAll("#root")

a[0].style.color="green"
a[1].style.color="orange"
a[2].style.color="red"

console.log(a);






























































