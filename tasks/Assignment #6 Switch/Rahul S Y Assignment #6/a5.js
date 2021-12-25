
let flag = true;
let i = 0;
while(flag){
let calc = prompt("Enter any oprators within this  '+' '-' '*' '/' '%' '**' 'exit' ");
let firstNO = parseInt(prompt("Enater any number"));
let secondNO = parseInt(prompt("Enater any number"));

  switch(calc){
    case "+":
    console.log(firstNO + secondNO);
    break;
    case "-":
    console.log(firstNO - secondNO);
    break;
    case "*":
    console.log(firstNO * secondNO);
    break;
    case "/":
    console.log(firstNO / secondNO);
    break;
    case "**":
    console.log(firstNO ** secondNO);
    break;
    case "%":
    console.log(firstNO * secondNO);
    break;
    default:
    console.log("invalid error")
  }
  if(calc ==='exit'){
    flag =false;
  }

}