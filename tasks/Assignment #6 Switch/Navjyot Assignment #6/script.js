//let i = 0;
let flag = true;

while (flag) {
  let operate = prompt(
    'Select the option for arithmatic operation i.e "+" for addition, "-" for substraction , "*" for multiplication, "/" for division , "%" for modulus , "**" for exponential and "exit" for exit.'
  );

  let firstNum = parseInt(prompt("Enter first Number"));
  let secondNum = parseInt(prompt("Enter second Number"));
  switch (operate) {
    case "+":
    //   console.log("Addition is : " + (firstNum + secondNum));
    document.write('Addition is : ' + (firstNum + secondNum));
    document.write('<br>');
      break;
    case "-":
        document.write('Substraction is : ' + (firstNum - secondNum));
        document.write('<br>');
      break;
    case "*":
        document.write('Multiplication is : ' + (firstNum * secondNum));
        document.write('<br>');
      break;
    case "/":
        document.write('Division is : ' + (firstNum / secondNum));
        document.write('<br>');
      break;
    case "%":
        document.write('Modulus is : ' + (firstNum % secondNum));
        document.write('<br>');
      break;
    case "**":
        document.write('Exponential is : ' + (firstNum ** secondNum));
        document.write('<br>');
      break;
    // case "exit":
    //   console.log("you have exit the loop");
    //   break;
    default:
      console.log("invalid input or you have to exit the loop");
  }
  if (operate === "exit") {
      alert('it will not do the operations further and gives previous calculations');
    flag = false;  // you are now out of the loop
  }
}
