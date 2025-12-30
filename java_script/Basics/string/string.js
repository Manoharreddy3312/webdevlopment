// let str = 'im single';
// console.log(str)

// let str1 = 'im double';
// console.log(str1)


// let str2 = `im backtick ${6}`;
// console.log(str2)
//!---------------METHODS IN STRING====================
// give all the methods of string:
    //! 1. length :  returns the length of the string
    //! 2. toLowerCase() : returns the string in lowercase
    //! 3. toUpperCase() : returns the string in uppercase
    // !4. at(index) : returns the character at the specified index
    // !5. charAt(index) ;   returns the character at the specified index
    // !6. concat(str1, str2, ...) : concatenates two or more strings
    // !7. replace(searchValue, newValue) : replaces the first occurrence of a specified value with another value
    // !8. replaceAll(searchValue, newValue) : replaces all occurrences of a specified value with another value
    // !9. trim() :  removes whitespace from both ends of a string
    // !10. trimStart() : removes whitespace from the start of a string
    // !11. trimEnd() : removes whitespace from the end of a string
    // !12. repeat(count) : returns a new string with a specified number of copies of the original string
    // !13. startsWith(searchString, position) : checks if a string starts with a specified substring
    // !14. endsWith(searchString, position) : checks if a string ends with a specified substring
    // !15. includes(searchString, position) : checks if a string contains a specified substring
    // !16. indexOf(searchValue, position) : returns the index of the first occurrence of a specified value
    // !17. lastIndexOf(searchValue, position) : returns the index of the last occurrence of a specified value
    // !18. padStart(length, padString) : pads the beginning of a string with another string until it reaches the specified length
    // !19. padEnd(length, padString) :  pads the end of a string with another string until it reaches the specified length
    // !20. charCodeAt(index) : returns the Unicode of the character at the specified index
    // !21. slice(startIndex, endIndex) : extracts a part of a string and returns it as a new string
    // !22. substring(startIndex, endIndex) :  extracts characters from a string between two specified indices
    // !23. substr(startIndex, length) :  extracts a part of a string, starting at a specified index and extending for a given number of characters
    // !24. split(separator) :  splits a string into an array of substrings based on a specified separator


// ==================================================================================================================
//!---------------METHODS IN STRING====================

// str = "javascript";
// console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.at(3));
// console.log(str.at(-5));
// console.log(str.charAt(7));  //!will not accept -ve values or indexing like - console.log(str.charAt(-2)); 

// str1 = " is a language";
// str2 = " it is a ES-6";
// console.log(str.concat(str1, str2));

// str3 = "helppppp";
// console.log(str3.replace("p", "lo"));

// console.log(str3.replaceAll("LO", "P"));

// str4 = "  javascript  "
// console.log("i am learning", str4.trimStart(), "in es-6"); //!remove space from start
// console.log("i am learning", str4.trimEnd(), "in es-6"); //!remove space from last or end
// console.log("i am learning", str4.trim(), "in es-6"); //!remove space from both ends

// console.log(str.repeat(4))
// let rating = 3;
// console.log("❤️ ".repeat(rating), "🖤".repeat(2)); //! this metod will using for rating of a product or item

// console.log(str.startsWith('script')); //! it will check the starting character
// console.log(str.endsWith('script')); //! it will check the ending character
// console.log(str.includes('t')); //! search any item character will match with the items or products it will give the product/item to the output



// console.log(str.indexOf('v',6)); //! it will search from starting index
// console.log(str.lastIndexOf('p',9)); //! it will search from last index


// s = 'java';
// s1 = 'script';
// console.log(s.padStart(10,s1)); //!pad will added the start
// console.log(s.padEnd(8,s1)); //!pad will added the end of the string

// console.log(str.charCodeAt(2)); //! give the ascii values for a charactor

// console.log(str.slice(2,-4)); //! slice will accept negative indexing

// console.log(str.substring(4,10));  //! substring will not accept negative indexing
// console.log(str.substr(5,4));  //!the number of charactor to be extracted after the starting index

// console.log(str.split('')); //! convert string into array based on the condition


//! splice(): is used to convert string into array based on the condition

// let str5 = "i am learning javascript es6 features";
// let arr = str5.split(' ');

// ! slice(): it is used to extract a part of an array based on the condition
// let arr1 = arr.slice(3,5);
// console.log(arr1);


// ==================================================================================================================









































