 
//  Activity 1 : For loop

// printing 1 to 10
for (let i = 1; i <= 10 ; i++) {

// console.log(i);
    
}

// table of 5
for (let i = 1; i <= 10; i++) {
    // console.log(i*5);
}


//  addition from 1 to 10 
let sum = 0;
let num2 = 1;

while (num2 <= 10) {
  sum =+ num2;
    num2++;
    
}
// console.log(sum);
let num3 = 10;


// 10 to 1
while(num3 > 0){
    // console.log(num3);
    num3--;
}


// printnh 1 to 5
let i = 1;
do {
    // console.log(i);
    i++;
    
} while (i<=5);


// factorial 

let num4 = 3;
let result = 1;
let j = 1;
do {
   result *= j;
    j++;
} while ( j <= num4);

// console.log(result);


for (let i = 0; i < 5; i++) {
     
  for( let j = 0; j <= i; j++){
    process.stdout.write ("* ");
  }
  process.stdout.write ("\n");
}


for (let i = 0; i <= 10; i++) {

    if(i ==5)continue;
    // console.log(i);
    
}
for (let i = 0; i <= 10; i++) {

    if(i == 7)break;
    // console.log(i);
    
}