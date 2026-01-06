
//! METHOD                            DEFINITION
// =======================================================================================================================

// document.getElementById()	        : Select the unique element with given id. 
//                                          In case there are 2 same ID then it selects the first element.
// document.getElementsByClassName()    :Select collection elements with given classname
// document.getElementsByTagName()	    :Select collection elements with given tagname
// document.querySelector()	            :Select element the first element on the basic of CSS string
// document.querySelectorALL()  	    :Select a list of elements on the basic of CSS string

// =========================================================================================================================

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

// let a = document.querySelectorAll("div")
// let b = document.querySelectorAll(".content")
// let c = document.querySelectorAll("#root")

// a[0].style.color="green"
// a[1].style.color="orange"
// a[2].style.color="red"
// console.log(a);


// let root = document.getElementById("root")
// root.style.color = "red"
// console.log(root.getAttribute("root"))
// console.log(root.getAttribute("style"))

// let a = document.getElementsByClassName("content")
// console.log(a.getAttribute("class"));

// let a = document.querySelector(".content")
// console.log(a.getAttribute("class"));

// let root=document.getElementById("root")
// root.setAttribute("class","root")
// root.setAttribute("id","root1")
// root.setAttribute("style","color:red;background-color:blue;width:fit-content")


// let newelement = document.createElement('h1')
// newelement.innerText = "I am newElement"
// newelement.setAttribute("id", "newelement")
// // root.appendChild(newelement)
// root.prepend(newelement)


// let img = document.createElement('img');
// // img.setAttribute("src", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60");
// img.setAttribute("src", "/assets/images/earth.png");
// img.setAttribute("alt", "Moonimage");
// img.style.width = "100px";
// img.style.height = "100px";
// root.appendChild(img);


// ======================================================================================================

// ! EVENETLISTNENR:

// let btn = document.getElementById("btn")
// btn.addEventListener("click",function info(){
//     console.log("i am using normal function")
// })

// let btn = document.getElementById("btn")
// btn.addEventListener("click",()=>{
//     console.log("i am using event")
// })


// btn.addEventListener("click",function info(){
//     console.log("i am using normal function")
// })
// !increment
   let count = 0;
        document.getElementById('btn').addEventListener('click', function() {
            count++;
            document.getElementById('count').innerText = 'Count: ' + count;
        });
// ! decrement
   let count1 = 0;
        document.getElementById('btn1').addEventListener('click', function() {
            count--;
            document.getElementById('count').innerText = 'Count: ' + count;
        });
// ! reset count

    let resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', function() {
        count = 0;
        document.getElementById('count').innerText = 'Count: ' + count;
    });
