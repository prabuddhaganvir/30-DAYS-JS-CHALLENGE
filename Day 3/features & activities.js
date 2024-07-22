// activity 1 : if-else Statement

let num1 = 2;

if (num1>=0) {
    console.log("number is +ve");
}else if(num == 0){
    console.log("nuber is zero");
}else{
    console.log("number is -ve");
}


let age = 20;

if (age >= 18) {
    console.log("Your Can Vote");
}else{
    console.log("You are not eligible for vote");
}

let num2 = 99;
let num3 = 29;
let num4 = 2;

if(num2 > num3){

    if (num2>num4) {
        console.log(`${num2} is Greater`);
    }else{
        console.log(`${num4} is Greater`);
    }
}else{
        console.log(`${num3} is Greater`);
    
}

const dayInWeek = 9;

switch (dayInWeek) {
    case 1:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
    break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
    console.log("Thursday");
    break;
    case 6 :
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Only Seven Days in week");
        break;
}

let Score = 70;

switch (Score) {
    case 90:
        console.log(`You Got A Grade`);
        break;
    case 80:
        console.log(`You Got B Grade`);
        break;
    case 70:
        console.log(`You Got C Grade`);
        break;
    case 60:
        console.log(`You Got D Grade`);
        break;
    default:
        console.log(`You Got F Grade`);
        break;
}


let num5 = 11;

let isOdd = num5 % 2 == 0 ? false: true;

if (isOdd) {
    console.log("number is odd");
}else{
    console.log("number is even");
}


let year = 2023;

if( (year % 4 == 0 && year % 100 != 0) || year % 400 == 0){

    console.log("year is Leap Year");

}else{
    console.log("year is not leap Year");
}


// feature


let checkNum = (num) => {

    if (num>0) {
        console.log(`Number is +ve ${num}`);
    }else if(num ==0){
        console.log(`Number is ${num}`);
    }else{
        console.log(`Number is -ve ${num}`);
    }
}

console.log(checkNum(0));



const isVote = (personAge) => {

    if (personAge >= 18 ) {
        console.log(`You can Vote`);
    }else{
        console.log(`You Cannot Vote`);
    }
}
console.log(isVote(1))


const weekDays = (DayNum)=>{
     
    switch (DayNum) {
            
        case 1:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
    break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
    console.log("Thursday");
    break;
    case 6 :
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Only Seven Days in week");
        break;
    }

}

weekDays(7);


 const grade = (ScoreTwo)=>{

let grades;

switch (true) {
    case  ScoreTwo <= 100 && ScoreTwo >=91:
    grades ="A";
        break;
        case  ScoreTwo <= 90 && ScoreTwo >=81:
        grades ="B";
        break;
        case  ScoreTwo <= 80 && ScoreTwo >=71:
        grades="C";
        break;
        case  ScoreTwo <= 70 && ScoreTwo >=61:
        grades ="D";
        break;
    default:
        grades ="E";
        break;
}
console.log(`Grade ${grades}`);
 }

grade(78);



const isLeapYear = (year)=>{
    if ((year % 4 ==0 && year % 100 != 0) || year % 400 ==0) {
        console.log("year is leap Year");
    }else{
        console.log("year is not leap year");
    }
}