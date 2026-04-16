// ! destructuring : 

// ? Extracting the individual values from the array and object.

console.log("ARRAY DESTRUCTURING")
let arr = [1, 2, 3]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

console.log("------")

let[a, b, c] = arr;
console.log(a)
console.log(b)
console.log(c)

console.log("------")

let [x,,z] = [10,20]
console.log(x)
console.log(z)

console.log("------")

let p = 10
let q = 20
let [m, n] = [q, p]
console.log(m)
console.log(n)

console.log("------")

let [a_name,b_age,city = 'hyd'] = ['kl rahul', 30]
console.log(a_name)
console.log(b_age)
console.log(city)


console.log("------")


console.log("OBJECT DESTRUCTURING")

console.log("------")

let obj = {
    'name' : 'KL RAHUL',
    'age' : '30'
}

console.log(obj.name)
console.log(obj.age)

console.log("------")

let {name, age} = obj
console.log(name)
console.log(age)

console.log("------")

let obj1 = {
    user_name : 'KL RAHUL',
    u_age : 30
}
let {user_name,u_age} = obj1
console.log(user_name)
console.log(u_age)

console.log("------")

let student = {
    student_name : 'KL RAHUL',
    student_age : 30
}
let {student_name,student_age : s_age} = student
console.log(s_age)

function stu({student_name,student_age }){
    console.log(student_name)
    console.log(student_age)
}
stu(student)













