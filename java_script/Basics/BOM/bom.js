// BOM (BOWSER OBJECT MODEL):
// ============================

// IT IS USED BY JAVASCRIPT TO INTERACT WITH HTML ELEMENTS/BROWSER
// WINDOW IS TOP-LEVEL OBJECT

//! 1.WINDOW :

// open()        : opens any document in new window
// close()        : closes current window
// print()        : print current window
// alert()        : pops up message box
// prompt()        : pops up input box
// confirm()        : pops up confirm box with ok, cancel.

// =============================================================================

//! 2.Navigaton: it s used to extra information about browser

// appName        : It returns browser family name. [Netscape]
// appVersion    : Browser version
// userAgent        : All supported platforms
// platform        : Current OS platform
// language        : Current browser language.
// cookieEnabled    : Return cookie status.
// online        : It returns current connection status
//                 [online or offline]

// =============================================================================

//! 3. LOCATION:
// host        : server name / IP address
// port        : returns port number
// protocol        : returns protocol [http, ftp]
// href        : gets and set url.
// pathname        : folder and file name.
// search        : gets query string.
// hash        : returns hash location  [ # ]

// =============================================================================

//! 4.SCREEN:
// screen.width
// screen.height
// screen.availWidth
// screen.availHeight
// screen.colorDepth
// screen.pixelDepth
console.log(screen.height)
console.log(screen.availWidth)
console.log(screen.availHeight)
console.log(screen.colorDepth)
console.log(screen.pixelDepth)

// =============================================================================

//! 5. history

// length        : returns the total count of pages in
//                  current browsing history.

// back()        : moves to one page back in browsing
//                   history.

// forward()     : moves to one page forward.

// go()          : moves to specific page, by page               name or interger value.

// =============================================================================

//! 6.console:

// console.log()
// console.error()
// console.warth()
// console.table()

// =============================================================================

//! 7. document:

// - It provides the properties and methods that are used to control document elements.
//     document.write()
//     document.writeln()
//     document.getElementById()
//     document.querySelector() etc..

// =============================================================================

// GENERATE 6- DEGIT OTP

// let otp = Math.floor(100000 + Math.random() * 900000);
// console.log(otp);
// alert(otp);

// let userInput = prompt("Enter OTP");

// if (userInput == otp) {
    //     console.log("Your otp is correct");
    //     alert("Your otp is correct");
    // } else {
        //     console.log("Your otp is wrong");
//     alert("Your otp is wrong");
// }
// =============================================================================




