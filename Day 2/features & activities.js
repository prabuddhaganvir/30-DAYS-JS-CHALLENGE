// Activity 1: Arithmetic Operations

let a = 20;
let b = 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);


// Activity 2: Assignment Operators

let numA = 20;
let numB = 25;

numA += numB;
numB -= numA;

console.log(numA,numB);

// Activity 3: Comparison Operators

let num1 = 20;
let num2 = 10 ;

console.log( ">", num1>num2);
console.log( "<", num1<num2);
console.log( ">=", num1>=num2);
console.log( "<=", num1<=num2);
console.log( "==", num1==num2);
console.log( "===", num1===num2);


// Activity 4: Logical Operators

const isInternetConnect = false;
const isLoggedIn = true;


if(isLoggedIn && isInternetConnect){
    console.log("All Set");
}else{
    console.log("Check Your Interne Connection and Logged in");
}


const age = 17;
const country = "IND"
 
if( age>=18 || country =="IND" ){
  console.log("You Can Vote");
}else{
    console.log("Your are not eligible For Vote");
}



let fruit = "Mango";

if (fruit != "Mango") {
    console.log(`No Fruit Other Than ${fruit}`);
}else{
    console.log("Mango is Best");
}


// Activity 5: Ternary Operator

let num3 = 0;

 const result = (num3 >=0)?"Number is +ve":"Number is -ve";

 console.log(result);



//  feature 01///

// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction,
//     multiplication, division, remainder) on two numbers and logs the results.

function arithmeticOperatrors(num4,num5){
    let additon = num4 + num5;
    let subtraction = num4 - num5;
    let multiplication = num4 * num5;
    let division = num4 / num5;
    let remainder = num4 % num5;

  console.log(`additon ${additon}`);
  console.log(`subtraction ${subtraction}`);
  console.log(`multiplication ${multiplication}`);
  console.log(`division ${division}`);
  console.log(`remainder ${remainder}`);
}
arithmeticOperatrors(20,5);


//  Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators
// and combines conditions using logical operators, logging the results.

function comparisonOperators(num6 ,num7) {

    let greaterThan  = num6 > num7;
    let lessThan  = num6 <num7;
    let greaterThanEqualto = num6>=num7;
    let lessThanEqualto = num6 <= num7;
    let isEqualto = num6==num7;
    let strictEqualTo = num6 === num7;
    let and = num6 && num7;
    let or = num6 || num7;


    console.log(` ${num6} > ${num7} ${greaterThan} `);
    console.log(` ${num6} < ${num7} ${lessThan} `);
    console.log(` ${num6} >= ${num7} ${greaterThanEqualto} `);
    console.log(` ${num6} <= ${num7} ${lessThanEqualto} `);
    console.log(` ${num6} == ${num7} ${isEqualto} `);
    console.log(` ${num6} === ${num7} ${strictEqualTo} `);
    
    console.log(`${and}`);
    console.log(`${or}`);
}
comparisonOperators(5,10);



//  Ternary Operator Script: Write a! script that uses the ternary operator to determine if a number is positive or negative and
// logs the result.

const isNumberPositive = (num8)=>{
    num8 >=0 ? console.log("Number is +ve"): 
    console.log("Number is -ve");
};

isNumberPositive(-9);