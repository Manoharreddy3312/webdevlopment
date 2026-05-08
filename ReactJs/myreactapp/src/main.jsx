import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// const { createElement } = require("react");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// import React from "react";
// import ReactDOM from "react-dom";

// console.log(React);
// console.log(ReactDOM);

// ! creating without attribute like className,style,id ....
// let a = React.createElement("h1",null,'i am using core way')

// ReactDOM.createRoot(document.getElementById('root').render(a));


// import { createElement } from "react";
// import { createRoot } from "react-dom/client";
//  ! creating attribute like className,style,id ....
// let a = createElement('h1', { id: 'heading', style: { color: 'red', backgroundColor: 'yellow', textAlign: 'center', border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '10px' },className:'heading' }, 'i am using react core way');
// createRoot(document.getElementById('root')).render(a);

// ! div inside the another div inside the div image

// import { createElement } from "react";
// import { createRoot } from "react-dom/client";

// let x = createElement('div',{id:'container'},
//   createElement('div',{id:'box'},
//     createElement("img",{
//       src:"https://images.pexels.com/photos/37299335/pexels-photo-37299335.jpeg",
//       height:200,
//       width:200
//     })))

// createRoot(document.getElementById('root')).render(x);

// ! USING JSX WAY:

// import { createRoot } from "react-dom/client";
// createRoot(document.getElementById('root')).render(
// 	<h1> I am Using Jsx Way</h1>
// )

// console.log(username);
// var username = 'hao';
// console.log(username);

