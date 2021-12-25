// Assignment #7: functions
// write a javascript program -
// 1. to accept two numbers from user. (start, end).
// 2. write a function to print prime numbers between two numbers accepted from user.
// 3. make sure you're passing start and end numbers in parameters only.

let firstNum = parseInt(prompt("Enter starting number"));
let secondNum = parseInt(prompt("Enter ending number"));
 
function PrimeNumber(firstNum, secondNum) {
  let m;

  for (let i = firstNum; i <= secondNum; i++) {
    m = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        m++;
      }
    }
    if (m == 2) {
      document.write("<br>" + i);
    }
  }
}
PrimeNumber(firstNum, secondNum);
document.write("<br>")


