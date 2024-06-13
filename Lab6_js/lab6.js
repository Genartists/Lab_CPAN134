//task 1
const myNumber = 10;
myString = "Hello, JavaScript!";

console.log(myNumber); // print out the values of myNumber
console.log(myString); // print out the values of myString
console.log(" ");

//task 2
// loop from 0 to 10
for (let i = 0; i <= 10; i++) {
  console.log(i); // print out the value of i (from 0 to 10)
}
console.log(" ");

// loop from 0 to 5
for (let i = 0; i <= 5; i++) {
  console.log(i * 3); // for every loop, take the value of i and multiply it by 3, then print it out
}
console.log(" ");

//task 3
function addNumbers(num1, num2) {
  return num1 + num2; // return the total of num1 and num2
}
const res = addNumbers(2, 5); // call function addNumbers with the arguments 2 and 5
console.log(res); // print out the result of the function

let multiplyNumbers = (num1, num2) => num1 * num2; // arrow function to multiply two numbers
let res2 = multiplyNumbers(2, 5); // call the function with the arguments 2 and 5
console.log(res2);
console.log(" ");
