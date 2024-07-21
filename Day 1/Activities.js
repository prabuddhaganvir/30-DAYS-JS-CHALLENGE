// Activity 1: Variable Declaration

//  Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var Score = 200;
console.log(Score);

//  Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let Myname = "Pabuddha";
console.log(Myname);



// Activity 2: Constant Declaration

//  Task 3: Declare a variable using const , assign it a boolean value, and log the value to the console.
const IsLoggedIn = true;
console.log(IsLoggedIn);



// Activity 3: Data Types

// Task 4: Create variables of different data types (number, string, boolean, object, array) and
//  log each variable's type using the typeof operator.

let age = 19;
let fruit = "mango";
let isAvailavle = false;
let Obj = {
    name:"Prabuddha",
    age :28
}
const DifferentColors =["yellow","green","blue","red"]

console.log(typeof age);
console.log(typeof fruit);
console.log(typeof isAvailavle);
console.log(typeof Obj);
console.log(typeof DifferentColors);



// Activity 4: Reassigning Variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, 
// and log both values to the console.

let ScoreTwo = 444;
let NewScoreTwo = 333;

ScoreTwo = NewScoreTwo

console.log(ScoreTwo,NewScoreTwo);


// Activity 5: Understanding const

// * Task 6: Try reassigning a variable declared with const and observe the error.

const level = 33;
 level = 34;
console.log(level);