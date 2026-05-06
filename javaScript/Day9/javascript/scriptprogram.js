// conditional statements
let ag = 25
if(ag>=18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}
//elseif
let price = 56
if(price>100){
    console.log("Expensive");

}
else if(price>50){
    console.log("Moderate");
}
else{
    console.log("Cheap");
}
//switch case
let light = "Red"
switch(light){
    case("Red"):
        console.log("Stop");
        break;
    case("Yellow"):
        console.log("Get Ready");
        break;
    case("green"):
        console.log("Go");
        break;
default:
    console.log("invalid color");
}
// Script Check
let num1 = 234
let num2 = "234"
console.log(num1==num2);//true
console.log(num1===num2);//false
//Ternary operator
let num3 = 10;
(num3%2==0)? console.log("Even") : console.log("Odd");
// max of three numbers
let x = 10
let y = 10
let z = 9
let max = (x>y && x>z)? x:(y>z)? y: z
console.log(`The maximum number is ${max}`);
//Another Method
if(x>y && x>z){
    console.log(`₹ the max is{x}`);
}
else if(y>z){
    console.log(`the max is ${y}`);
}
else{
    console.log(`the max is ${z}`);
}
