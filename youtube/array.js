// console.log("array");


// let num = [1,4,9,16];

// function squareRoot(x)
// {
//     return Math.sqrt(x);
// }

// let result = num.map(squareRoot)
// =========== OR ==========
// let result = num.map(x=>Math.sqrt(x));
// console.log(num);
// console.log(result);


// let age = [32, 15, 19, 12];

// let res = age.filter((a) => {
//     if (a < 18) {
//         return true
//     }
//     else {
//         return false
//     }

// })

// console.log(age);
// console.log(res);


// ! REDUSE():

// iv=0
// let num = [10,20,30,40]

// let add = num.reduce((acc,cv)=>acc+cv,iv)
// console.log(add);


// iv = 1;
// let no = [10,40,49,53]

// let ad = no.reduce((acc,cv)=>acc*cv,iv)
// console.log(ad);

// ! some():

// let score  = [78.66,90,65]

// let grade = score.some((x)=>x>89);
// console.log(grade);

// ! every():

// let gradeq = score.every((x)=>x>70);
// console.log(gradeq);



//!======2D-ARRAY======

//Dimension means the amout of data or information required to access the 
// contents inside an Array

// let ar = [
//     [24, 78, 65],
//     [76, 56, 43],
//     [90, 23, 56]
// ];

// console.log(ar);

// let i;
// let j;

// for (i = 0; i < ar.length; i++) {
//     for (j = 0; j < ar[i].length; j++) {
//         console.log(ar[i][j]);
//     }
// }

//!======3D-ARRAY======

let ar = [
    [
        [50, 30],
        [86, 78]
    ],
    [
        [23, 34],
        [36, 57]
    ]
];
console.log(ar);

let i;
let j;
let k;

for (i = 0; i < ar.length; i++) {
    for (j = 0; j < ar[i].length; j++) {
        for (k = 0; k < ar[i][j].length; k++) {
            console.log(ar[i][j][k]);
        }
    }
}































