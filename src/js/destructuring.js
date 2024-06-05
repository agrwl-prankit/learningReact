let arr = ['abc', '123'];
let firstVar = arr[0];
let lastVar = arr[1];
console.log(firstVar + lastVar);

// array destructuring

let [var1, var2] = ['abc', '123'];
console.log(var1 + var2);



const user = {
    name: 'ABC',
    age: 25
}
let userName = user.name;
let userAge = user.age;
console.log(userName + userAge);

// destructuring object

const {name: username, age} = {
    name: 'ABC',
    age: 25
}
console.log(username + age);