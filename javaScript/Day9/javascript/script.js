let a = 10
//let a = 50 not possible
const b = "Hello"//possible
var c= 10
console.log(a)
console.log(b)
console.log(c)
var c="hello"
console.log(c)
c = "hi"
console.log(c)
const age = 20
let name = "Akhil"
console.log(`My name is ${name} and my age is ${age}`);
let arr1 = [1,2,3,4,5];
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}
console.log(arr1);
arr1[10] = 100
console.log(arr1);
arr1.push(200)//adds element at the end of the array
console.log(arr1);
arr1.pop()//removes element from the end of the array
arr1.pop()//removes element from the end of the array
console.log(arr1);
arr1.unshift(0)//adds element at the beginning of the array
console.log(arr1);
arr1.shift()//removes element from the beginning of the array
arr1.shift()//removes element from the beginning of the array
console.log(arr1);
//Objects
let person = {
    name: "Akhil",
    age: 20,
    city: "Hyderabad"
}
console.log(person);
console.log(person.name);
console.log(person["age"]);
let avengers = [
    {
        name: "Iron Man",
        alias: "Tony Stark",
        age : 48,
        email:"tond@dsa.com"

    },
    {
        name: "Captain America",
        alias: "captian america",
        age : 100,
        email:"sdfr@dfds.com"
    }
]
console.log(avengers);
console.log(avengers[0].name);
console.log(avengers[1]["alias"]);
