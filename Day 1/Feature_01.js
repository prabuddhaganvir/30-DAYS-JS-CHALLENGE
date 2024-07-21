// 1. Variable Types Console Log: Write a script that declares variables of different data types and 
// logs both the value and type of each variable to the console.

let age = 19;
let fruit = "mango";
let isAvailavle = false;
let Obj = {
    name:"Prabuddha",
    age :28
}
let Colors = ["yellow","green","blue","red"]

console.log(`${age} ${typeof age}`);
console.log(`${fruit} ${typeof fruit}`);
console.log(`${isAvailavle} ${typeof isAvailavle}`);

console.log(`${Object.keys(Obj).map((key)=>`${key}:${Obj[key]}`)} ${typeof Obj}`) 
console.log(`${Colors} ${typeof Colors}`);