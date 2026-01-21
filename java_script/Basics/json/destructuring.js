let emp = {
    name: "shubham sir",
    age: 28,
    posission: ["trainer","developer","tester","manager"]
}

const {name,age,posission} = emp

console.log(name)
console.log(age)
console.log(posission)

posission.map((v,i)=>{
    console.log(v,i)
})

