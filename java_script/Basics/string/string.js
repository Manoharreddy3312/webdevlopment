// let str = 'im single';
// console.log(str)

// let str1 = 'im double';
// console.log(str1)


// let str2 = `im backtick ${6}`;
// console.log(str2)


//!---------------METHODS IN STRING====================

str = "javascript";
console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.at(3));
console.log(str.at(-5));
console.log(str.charAt(7));  //!will not accept -ve values or indexing like - console.log(str.charAt(-2)); 

str1 = " is a language";
str2 = " it is a ES-6";
console.log(str.concat(str1, str2));

str3 = "helppppp";
console.log(str3.replace("p", "lo"));

console.log(str3.replaceAll("LO", "P"));

str4 = "  javascript  "
console.log("i am learning", str4.trimStart(), "in es-6"); //!remove space from start
console.log("i am learning", str4.trimEnd(), "in es-6"); //!remove space from last or end
console.log("i am learning", str4.trim(), "in es-6"); //!remove space from both ends

console.log(str.repeat(4))
let rating = 3;
console.log("❤️ ".repeat(rating), "🖤".repeat(2)); //! this metod will using for rating of a product or item

console.log(str.startsWith('script'));
console.log(str.endsWith('script'));
console.log(str.includes('t')); //! search any item character will match with the items or products it will give the product/item to the output



console.log(str.indexOf('v',6));
console.log(str.lastIndexOf('p',9));


s = 'java';
s1 = 'script';
console.log(s.padStart(10,s1)); //!pad will added the start
console.log(s.padEnd(8,s1)); //!pad will added the end of the string

console.log(str.charCodeAt(2)); //! give the ascii values for a charactor

console.log(str.slice(2,-4));

console.log(str.substring(4,10));
console.log(str.substr(5,4));  //!the number of charactors

console.log(str.split(''));



















































