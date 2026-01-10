// ! USING  LITERALS:
// let arr = ["html","css"]
// console.log(arr);

// let arr = ["html","css","javascript",1,2,3]
// console.log(arr);

// console.log(arr[0]);

// let arr1 = ["html","css"]
// arr[2] = "javascript"

// arr1[1] = "react js" #==>Adding a elemnt / inserting
// console.log(arr1);
// delete arr1[1] #==>delete a elemnt
// console.log(arr1);
// console.log(arr1[1]);

// !using Array constructor:

// let arr2 = new Array()   #==>creating an array and adding
// console.log(arr2);
// arr2[0] = 1
// console.log(arr2);



// ! METHODS OF ARRAY :
// ====================

// Basic Array Methods:
// =============================================================================
//! 1.Array length : length property of an array returns the number of elements in that array.

//! 2.Array toString():toString() method converts an array to a string of comma-separated values.

//! 3.Array at(): at() method takes an integer value and returns the item at that index, allowing for positive and negative integers.

//! 4.Array join(): join() method creates and returns a new string by concatenating all of the elements in an array

//! 5.Array pop(): pop() method removes the last element from an array and returns that element. This method changes the length of the array.

//! 6.Array push(): push() method adds one or more elements to the end of an array and returns the new length of the array.

//! 7.Array shift(): shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

//! 8.Array unshift(): unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

//! 9.Array isArray(): isArray() method determines whether the passed value is an Array.

//! 10.Array delete(): delete() operator removes an element from an array at a specified index.

//! 11.Array concat(): concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

//! 12.Array copyWithin(): copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.

//! 13.Array flat(): flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

//! 14.Array slice(): slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.

//! 15.Array splice(): splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

//! 16.Array toSpliced(): toSpliced() method returns a new array with some elements removed and/or replaced, without modifying the original array.

//! 17.Array fill(): fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

//! 18.Array indexOf(): indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

//! 19.Array lastIndexOf(): lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

//! 20.Array reverse(): reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

//! 21.Array sort(): sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into

//! 22.Array flatMap(): flatMap() method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map() followed by a flat() of depth 1.

//! 23.Array from(): from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

//! 24.Array isArray(): isArray() method determines whether the passed value is an Array.

//! 25.Array of(): of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

// ====================================================================================================================
//! 1.LENGTH:

// let arr = ["html","css","js"]
// console.log(arr.length);

//! 2.PUSH: ADD AN ELEMENT THE ENDING OF THE ARRAY

// arr.push("Bootstrap","React js")
// console.log(arr);

//! 3.POP: REMOVE AN ELEMENT FROM THE ENDING OF THE ARRAY

// arr.pop()
// console.log(arr);

//! 4.UNSHIFT: REMOVE ENDING OF THE ARRAY

// arr.unshift("java","sql")
// console.log(arr);

//! 5.SHIFT: REMOVE STARTING OF THE ARRAY
// arr.shift("java","sql")
// console.log(arr);


//! 6.SLICE(START-INDEX,END-INDEX): method adds new items to an array. IT WILL NOT EFFECT ORIGINAL ARRAY
// let arr1 = arr.slice(0,3)
// console.log(arr1);

//! 7.SPLICE(START-INDEX,COUNT): NO OF ELEMENTS TO REMOVE FROM THE  GIVEN ARRAY. IT WILL EFFECT ORIGINAL ARRAY

// arr.splice(1,2,"java","sql","python")
// console.log(arr);

// ! 8.MAP() :used for iteration.it will return a new array witch will strore the another varable.

// let arr = [10,20,30,40,50]
// console.log(arr);


// let arr1 = arr.map(a=>{
//     return a+5;
// })
// console.log(arr1);


// let arr2 = arr.map(a=>{
//     return a-5;
// })
// console.log(arr2);


// ! 9.filter(): it used to filter the array based on the condition

// let arr = [2,7,5,11,28]
// let arr1 = arr.filter((a)=>{
//     return a%2==0;
// })
// console.log(arr1);

// let arr = [110,82,64,51,140,99,33]
// o/p: [210,182,240,199] using map and filter i want this output

// let arr1 = arr.filter((a)=>{
//     return a>64;
// }).map((a)=>{
//     return a+100;
// })
// console.log(arr1);



// java_script\Basics\array> node .\array.js

// wap to filter the array to print only number
// let arr = [20, null, undefined, 12, true, 16]
// o/p : [20,12,16]

// let arr1 = arr.filter((a) => {
//     return typeof a == 'number';
// })
// console.log(arr1);


// let = food = [
//     'Chicken biryani',
//     'panner biryani',
//     'Chilly chicken',
//     'panner kadai',
//     'Chicken masala',
//     'fried rice',
//     'gulab jamun',
//     'Paneer chilli']
// 0/p : ['Chicken biryani','Chilly chicken','Chicken masala','fried rice']
// where food items contain the word starts with ch'

// let arr1 = food.filter((a) => {
//     return a.toLowerCase().includes('ch');
// })
// console.log(arr1);


//! 10.some():if atleast one element satisfy the condition it will return true

// let arr = [2,4,6,8,9]
// let res = arr.some((a)=>{
//     return a%2!=0;
// })
// console.log(res);

// let arr = [2,7,6,9,2,1,0,3,6,1,45,76]
// let arr2 = arr.some((z)=>{
//     return z>70;
// })
// console.log(arr2);


// ! 11.every():in case of every all the elements should satisfy the condition it will return true

// let arr1 = [2,4,6,8,10]
// let res1 = arr1.every((a)=>{
//     return a%2==0;
// })
// console.log(res1);

// ! 12.includes():

// let arr = ['hrml','css','js','react js']
// let arr1 = arr.includes('js')
// console.log(arr1);

// ! 13.concat():
// let a = ['html','css']
// let b = ['js','react']
// let c = ['bootsrap','tilwindcss']
// let newArray = a.concat(b,c)
// console.log(newArray);

// ! 14.indexOf():.
// let arr = ['html','css','js','react js','js']
// let arr1 = arr.indexOf('js',3)
// console.log(arr1);

// ! 15.lastIndexOf():
// let arr = ['html','css','js','react js','js']
// let arr1 = arr.lastIndexOf('js',3)
// console.log(arr1);
// ! 16.reverse(): this will effect will change original array
// let arr = ['html','css','js','react js']
// let arr1 = arr.reverse()
// console.log(arr1);


// ! 17.flat(): flatening the array

// let a = ['Html',['css',['javaScript',['React Js']]]]
// let a1 = a.flat(3)
// console.log(a1);
// a1.map((b)=>{
//     console.log(b);
// })

// ! 18.fill(): it will fill the array with static value
// let arr = [1,2,3,4,5]
// let arr1 = arr.fill("hi",1,4)
// console.log(arr1);


// let z = ['Html','Css','Js','React js']
// z.fill('Go Lang',1,3)
//  console.log(z);

// ! 19.toString():
// let y = ['Html','Css','Js','React js']
// z.fill('Go Lang',1,3)
//  console.log(y.toString());

// ! 20.from():

// let str = 'javascript';
// let arr = Array.from(str)
// console.log(arr);

// ! 21.find(): it will return the first element that satisfy the condition
// let arr = [10,25,30,45,50]
// let arr1 = arr.find((a)=>{
//     return a>30;
// })
// console.log(arr1);

// let u = ['html','css','html','javascript']
// let v = u.find((w)=>{
//     return w == 'css'
// })
// console.log(v);

// ! 22.findIndex(): it will return the index of first element that satisfy the condition
// let arr = [10,25,30,45,50]
// let arr1 = arr.findIndex((a)=>{
//     return a>30;
// })
// console.log(arr1);
// ! 23.reduce(): it will reduce the array to a single value based on the condition
// let arr = [10,20,30,40,50]
// let arr1 = arr.reduce((accumulator,currentValue)=>{
//     return accumulator + currentValue;
// },0)
// console.log(arr1);

// let iv  = 0;
// let arr = [1,2,3,4,6]
// let arr1 = arr.reduce((acc,cv)=>acc+cv,iv)
// console.log(arr1);

// let iv  = 1;
// let arr = [1,2,3,4,5]
// let arr1 = arr.reduce((acc,cv)=>acc*cv,iv)
// console.log(arr1);


// ! 24.reduceRight(): it will reduce the array to a single value based on the condition from right side
// let arr2 = arr.reduceRight((accumulator,currentValue)=>{
//     return accumulator + currentValue;
// },0)
// console.log(arr2);










// create a array of 10 random numbers
// let arr = []
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * 100));
// }
// console.log(arr);

// array: it is a collection of items as a list of items in js array is an object
// array is a collection of items as a list of items in js array is an object


// i want to fetch any dummy api
// let url = 'https://jsonplaceholder.typicode.com/posts'
// fetch(url).then((response)=>{
//     response.json().then((data)=>{
//         console.log(data);
//     })
// })
// .then((error)=>{
//     console.log(error);
// })


// i wannt to fetch the data from the api
// let url = 'https://jsonplaceholder.typicode.com/posts'
// fetch(url).then((response)=>{
//     response.json().then((data)=>{
//         console.log(data);
//     })
// })
// .then((error)=>{
//     console.log(error);
// })

// ! Fetching products from dummyjson API
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const container = document.getElementById("products-container");
        data.products.map((product) => {
            console.log(product.title, product.price);
            if (container) {
                const card = document.createElement("div");
                card.className = "product-card";
                card.innerHTML = `
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>Price: $${product.price}</p>
                `;
                container.appendChild(card);
            }
        })
    })
    .catch(err => console.log(err));
