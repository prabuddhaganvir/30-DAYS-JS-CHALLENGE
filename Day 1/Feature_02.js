// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let 
// and const when it comes to reassignment.

let score = 333;
console.log(" Your Previous Score =", score);
let newScore = 444;
score = newScore;
console.log(" Your New Score =", score);


const id = 339;
console.log(" Your Previous Id =", id);
const newId = 340;
// id = newId;  we cannot re-assign the const value
// console.log(" Your New Id =", id);   getting error => Assignment to constant variable.





// const re-assign in objects

const myObj = {
    name:"Prabuddha",
    country : "india",
};

console.log( "Your Old Details" , myObj);
myObj.name = 'PG'
console.log("Your Updated Details" , myObj);

// in objects we can re-assign the values because values are passed by reference

