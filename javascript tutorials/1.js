/*
document.getElementById("test").innerText = "changed text";

alert("hello user! how are you?");

let addition = 56 + 56;

document.write(addition);

alert(addition);

console.log("this is my first sentence written on console..!");
 console.log(addition)
 console.log(addition)
 console.log(addition)

 */

// console.log("this is string");
// console.log("addition of 3 & 5 is :", 3+5);

// variable

// console.log(50+10, 50-10, 50*10, 50/10, 50%10);
// console.log(50**10);

// let number1 = 50;
// let number2 = 100;

// console.log(number1, number2);
// console.log(number1+number2, number1-number2, number1*number2, number1/number2, number1%number2);


// let number1 = prompt("Enter First Number..!");
// let number2 = prompt("Enter Second Number..!");

// console.log(number1+number2, number1-number2, number1*number2, number1/number2, number1%number2);
 
// 1. Number
// 2. String -> a+b = ab i.e. 1+1=11
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt


// let personName = "Ramesh";
// let age = 25;
// let mobNumber = 8345454545;
// let isEligible = true;
// let accountNumber;
// let ifsc = '';
// let city = null;

// console.log(personName, typeof personName);
// console.log(age, typeof age);
// console.log(mobNumber, typeof mobNumber);
// console.log(isEligible, typeof isEligible);
// console.log(accountNumber, typeof accountNumber);
// console.log(ifsc, typeof ifsc);
// console.log(city, typeof city);

// difference between let, const & var.
// we use any one of them for declaring a variable in javascript.
// let number1 = 123;
// var number2 = 123;
// console.log(number1, typeof number1);

// number1 = 123456;
// console.log(number1, typeof number1);

// number1 = "Prasad";
// console.log(number1, typeof number1);

// number1 = false;
// console.log(number1, typeof number1);

// number1 = "true";
// console.log(number1, typeof number1);





// const PI = 3.14;




// string concatination
// let firstName = "Prasad";
// let lastName = "Surase";

// let fullName = firstName + " " + lastName;
// console.log(fullName);



// let num1 = prompt("enter first number"); // "100"
// let num2 = prompt("enter second number"); // "100"

// console.log(num1, typeof num1);
// console.log(num2, typeof num2);

// concatination
// let addition = num1 + num2;
// console.log("concationation : " + addition);

// addition
// let convertedNumber = Number(num1);
// console.log("addition : " + (Number(num1) + Number(num2)) );

// console.log(convertedNumber, typeof convertedNumber);
// console.log(num1, typeof num1);
// console.log(num1, typeof Number(num1));


//Naming Convensions (Rules Of Variable Declaration)
// 1. variable name should be in camel case.
// 2. constant variable name should be always in capital case.
// 3. variable name must be unique.
// 4. variable name should be meaningful.
// 5. varibale name should not too long.

// 1. arithmatic operators ->  (+, -, *, /, %, **)
// 2. logical operators -> (&&, ||, !)
// 3. Boolean Operators -> (true, false)
// 4. assignment operators -> (=, +=, -=, *=, /=)
// 5. comparison operators -> (<, >, <=, >=, ==, ===, !=, !==)
// 6. increment/decrement operators.


// 1. arithmatic operators => 
// console.log("addition :", 10 + 10);
// console.log("sub :", 10 - 10);
// console.log("mult :", 10 * 10);
// console.log("div :", 10 / 10);
// console.log("mod :", 10 % 10);
// console.log("exponantial/power :", 10 ** 10);

// 2. logical operators =>
// i. AND (&&) -> 

// if(10 < 20 && 10 < 50){
//     alert("both conditions are true");
// }

// if(10 <= 20 && 50 !== "50"){
//     alert("both conditions are true");
// }

// ii. OR (||) ->

// if(10 >= 11 || 50 != "50"){
//     alert("true");
// }

// iii. NOT (!) ->

// if("true" != "1"){
//     alert("true");
// }

// 3. boolean operators =>
// let mood = false;

// if(mood == true){
//     alert("let's go to college bro..!");
// }

// if(mood == false){
//     alert("kya karega padhake");
// }

// 4. assignment operators -> (=, +=, -=, *=, /=, %=)
// let num1 = 5;
// console.log(num1);

// let num2 = num1;
// console.log(num2);

// let num3 = 10;
// num3 += num2; // num3 = num3 + num2;
// console.log(num3); // 15

// num3 -= num2; // num3 = num3 - num2;
// console.log(num3); //10

// num3 *= num2; // num3 = num3 * num2;
// console.log(num3); //50

// num3 /= num2; // num3 = num3 / num2;
// console.log(num3); //10

// num3 %= num2; // num3 = num3 % num2;
// console.log(num3); //0


// 5. comparison operators 

// let a = 324;
// let b = 324;

// if(a > b){
//     alert(a + " is greater than " + b);
// }

// if(a < b){
//     alert(b + " is greater than " + a);
// }

// if(a == b){
//     alert("both numbers are equal");
// }

// <= - less than or equal to
// >= - greater than or equal to

// difference between =, == and ===
// 1. = - it is used to assign the value to variable
// e.g. let a = 5;

// 2. == - it is used to check the value of both the variables. 
// if matching, returns true otherwise false.
// e.g. if(5 == "5") => this will return true.

// if(5 == "5"){
//     alert("equal");
// }

// 3. === - it is used to check the value as well as the data type of both the variables.
// if matching, returns true otherwise false.
// e.g. if(5 === "5") => this will return false.

// if(5 === "5"){
//     alert("equal");
// }

// # != - returns true if the values are not matching otherwise false.
// e.g.
// if(5 != 3){
//     alert("not equal");
// }

// if(5 != "5"){
//     alert("not equal");
// }

// # !== - returns true if the values are not matching (and also if the datatype is different) otherwise return false.

// if(5 !== "5"){
//     alert("not equal");
// }

// 6. increment (++)/decrement (--) operators =>
// let number = 10;

// // prefix
// console.log(++number); //11
// console.log(--number); //10

// // postfix
// console.log(number++); //10
// console.log(number--); //11
// console.log(number); //10


// #DOM Introduction
// DOM - DOCUMENT OBJECT MODEL

// #Control Structures [MOST IMPORTANT]
// #difference between (and scope of) var, let and const

// let personName = "Nitin Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iusto ut deserunt nulla voluptas fugiat molestias minima! Est quidem voluptate numquam dignissimos, maiores possimus sunt recusandae autem itaque, facilis eaque in provident placeat nobis! Voluptas debitis qui quam! Id hic iste inventore cumque rem animi velit facilis odio commodi veritatis.";

// document.write(personName);

// console.log(personName);


// operator precedence =>
// (), **, /, *, +, -
// let calc = 10 / 2 * 5;

// console.log(calc); //30 or 50

// --------------------------------------------------------------------------------

// difference between Number() & parseInt() =>
// let number = Number(prompt("Enter a Number"));
// console.log(number);
// let number = parseInt(prompt("Enter a Number"));
// console.log(number);
// let number = parseFloat(prompt("Enter a Number"));
// console.log(number);

// --------------------------------------------------------------------------------
// #Arrays in JS
// => array is an collection of multiple data elements which can be accessible through array index.
// array index always starts from 0.

// normal variable -
// let studentRollNo = 255;
// let studentName = "Rakesh";
// let studentDiv = 'A';

// console.log(studentRollNo, studentName, studentDiv);

// let history = 95;
// let math = 20;
// let geography = 98;
// let science = 50;
// console.log(history, math, geography, science);

// array
// let studentMarks = [95, 20, 98, 50];
// let studentNames = ["Rakesh", "Nitin", "Nitesh", "Prajwal"];

// let studentDetails = ["Rahul", 255, true, null, ""];

// objects in javascripts
// let studentDetails1 = {
//     name1: "Rahul", 
//     college: "SIOM", 
//     marks: {
//         history: 50,
//         math: 20
//     }
// };

// console.log(studentMarks);

// console.log(studentMarks[1]);

// console.log(studentNames[4]);

// console.log(studentDetails);


// #Control Structures In Javascript
// => Control Structures
// 1. if
// let mood = true;

// if(mood === true){
//     alert("yes, let's go to shopping..!");
// }

// if(mood === false){
//     alert("not in the mood to go out..!");
// }

// e.g.2 -
// let firstNumber = 45;
// let secondNumber = 115;

// if(firstNumber > secondNumber){
//     alert("first number is greater");
// }

// if(secondNumber > firstNumber){
//     alert("second number is greater");
// }


// 2. if-else => 
// for e.g.

// let firstNumber = 110;
// let secondNumber = 115;

// if(firstNumber > secondNumber){
//     alert("first number is greater");
// }
// else {
//     alert("second number is greater");
// }


//e.g. 2 ->
// let firstNumber = 115;
// let secondNumber = 115;

// if(firstNumber > secondNumber){
//     alert("first number is greater");
// }else if(secondNumber > firstNumber){
//     alert("second number is greater");
// }
// else {
//     alert("both numbers are same/equal");
// } 

// 3. nested if/nested if-else =>
// let firstNumber = 115;
// let secondNumber = 115;
// let thirdNumber = 115;

// if(firstNumber > secondNumber && firstNumber > thirdNumber){
//     alert("first number is greater");
// }else if(secondNumber > firstNumber && secondNumber > thirdNumber){
//     alert("second number is greater");
// }
// else if(thirdNumber > firstNumber && thirdNumber > secondNumber){
//     alert("third number is greater");
// }else{
//     alert("all numbers are equal");
// }

// ---------------------------------------------------------
// write a program to compare three numbers and display a alert message
// for greater number out of 3 and also check if any number is equal to any other number.

// let firstNumber = prompt("Enter first Number");
// let secondNumber = prompt("Enter second Number");
// let thirdNumber = prompt("Enter third Number");

// if(firstNumber > secondNumber){
//     if(firstNumber > thirdNumber){
//         alert("first number is greater");
//     }
//     else{
//         alert("third number is greater");
//     }
// }else if(secondNumber > thirdNumber){
//         if(secondNumber === firstNumber){
//             alert("first & second number is equal");
//         }else{
//             alert("second number is greater");
//         }
// }else {
//     if(firstNumber === secondNumber){
//         alert("first & second number is equal");
//     }
    
//     if(firstNumber === thirdNumber){
//         alert("first & third number is equal");
//     }
//     if(secondNumber === thirdNumber){
//         alert("second & third number is equal");
//     }
//     if(firstNumber !== thirdNumber && secondNumber !== thirdNumber){
//         alert("third number is greater");
//     }
// }

// let numberOne = 3;
// let numberTwo = 10;

// console.log(numberOne < numberTwo);
// console.log(numberOne > numberTwo && numberOne != numberTwo);
// console.log(numberOne > numberTwo || numberOne != numberTwo);
// console.log(numberOne > numberTwo || numberOne != numberTwo);
// console.log(numberOne > numberTwo && numberOne != numberTwo);
// console.log(numberOne);
// console.log(numberOne >= 9);


// #truthy & falsy values

// @Truthy Values => number, string, boolean (true), 1
// @Falsy Values => null, undefined, boolean (false), "", 0

// let numberOne = false;

// if(numberOne ==false){
//     alert("inside if");
// }else if(numberOne != numberOne) {
//     alert("I never want to display this!");
// }

// let reverseValue = !numberOne;

// console.log(numberOne)
// console.log(reverseValue)

// syntax ->
// if(condition1){
//     // statements if condition is true
//     if(conditionB){
//         // statements if both condtion1 & condtionB are true
//     }
// }else if(condition2){
//     // statements if 2nd condition is true
// }else{
//     // statements if condition is false
// }

// -----------------------------------------------------------
// write a program to check maximum number out of 3 numbers. 
// and also check if all three are equal or not.

// let numberOne = Number(prompt("Enter First Number"));
// let numberTwo = Number(prompt("Enter Second Number"));
// let numberThree = Number(prompt("Enter Third Number"));

// if(numberOne > numberTwo){
//     // numberOne is greater than numberTwo
//     if(numberOne > numberThree){
//         // numberOne is greater than numberTwo & numberThree
//         alert("numberOne is greater");
//     }
    
//     if(numberOne === numberThree){
//         alert("numberOne is equal to numberThree");
//     }

//     if(numberTwo === numberThree){
//         alert("numberTwo is equal to numberThree");
//     }
    
//     if(numberOne < numberThree){
//         alert("numberThree is greater");
//     }
// }else if(numberTwo > numberThree){
//     // numberTwo is greater than numberOne & numberThree
//     if(numberTwo === numberOne){
//         alert("numberTwo is equal to numberOne");
//     }
    
//     if(numberTwo > numberOne){
//         alert("numberTwo is greater");
//     }
// }else {
//     if(numberThree === numberOne){
//         alert("numberThree is equal to numberOne");
//     }
    
//     if(numberThree === numberTwo){
//         alert("numberThree is equal to numberTwo");
//     }

//     if(numberOne === numberTwo){
//         alert("numberOne and numberTwo is equal");
//     }
    
//     if(numberThree === numberOne && numberThree === numberTwo){
//         alert("All three numbers are equal");
//     }

//     if(numberThree > numberOne && numberThree > numberTwo){
//         alert("numberThree is greater");
//     }
// }

// -----------------------------------------------------------
// ASSIGNMENT #1: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)

// 2. Log their values to the console

// let country = "INDIA";
// let continent = "ASIA";
// let population = 1390000000;

// console.log("Country : " + country);
// console.log("Continent : " + continent);
// console.log("Population : " + population);


// ASSIGNMENT #2: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your country. 
// The variable should hold a Boolean value. Also declare a variable 'language', 
// but don't assign it any value yet

// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

// let isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// -----------------------------------------------------------
// ASSIGNMENT #3: Operators and Control Structures
// 1. Calculate the average score for each team, using the test data below.

// 2. Compare the team’s average scores to determine the winner of the competition, and print it to the console. Don’t forget that there can be a draw, so test for that as well. (draw means they have the same average score)

// 3. Include a requirement for a minimum score of 100. with this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.
// HINT: use logical operator to test for minimum score as well as multiple else if blocks.

// 4. Minimum score also applies to a draw! So a draw only happens when both team have the same score and both have a score operator or equal 100 points. Otherwise no team wins the trophy.

// TEST DATA (For 1st & 2nd Point): 
// #Team MI score – 96, 108, 89
// #Team CSK score – 88, 91, 110

// TEST DATA (For 3rd Point) : 
// #Team MI score – 97, 112, 101
// #Team CSK score – 109, 95, 123

// TEST DATA (For 4th Point) : 
// #Team MI score – 97, 112, 101
// #Team CSK score – 109, 95, 106

// vaibhav =>
// let miScoreFirst= Number(prompt("Enter Mi Match 1 Score")); // "100" => 100
// let miScoreFirst= 50; // "100" => 100
// let miScoreSecond=50;
// let miScoreThird=50;
// let miTotalScore=miScoreFirst+miScoreSecond+miScoreThird;
// let miScoreAverage=miTotalScore/3;

// let cskScoreFirst=50;
// let cskScoreSecond=50;
// let cskScoreThird=50;
// let cskTotalScore=cskScoreFirst+cskScoreSecond+cskScoreThird;
// let cskScoreAverage=cskTotalScore/3;

// // Total
// console.log("miTotalScore"+" "+miTotalScore);
// console.log("cskTotalScore"+" "+cskTotalScore);

// // 1. Average
// console.log("miScoreAverage"+" "+miScoreAverage);
// console.log("cskScoreAverage"+" "+cskScoreAverage);


// 2
// if(miScoreAverage > cskScoreAverage){
//     console.log("The winner is MI team")
// }else if(cskScoreAverage > miScoreAverage){
//     console.log("The winner is CSK team")
// }else if(miScoreAverage == cskScoreAverage){
//     console.log("There will be a draw because both team have same score")
// }

// 3
// if(miTotalScore > cskTotalScore && miTotalScore >=100){
//     console.log("The winner is MI team")
// }else if(cskTotalScore > miTotalScore && cskTotalScore >=100){
//     console.log("The winner is CSK team")
// }else if(miScoreAverage < 100 && cskTotalScore < 100){
//     console.log("No one win because both have less then 100 score")
// }
// // 4
// else if(miTotalScore === cskTotalScore){
//     console.log("There will be a draw because both team have same score")
// }

// -----------------------------------------------------------

// 4. switch =>

// e.g. to do program using if-else =>

// let day = "Tuesday"; //go to shopping
// let day = "Tuesday"; //repair bike
// let day = "Wednesday"; //order pizza
// let day = "Thursday"; //pay rent
// let day = "Friday"; //go to sinhgad fort
// let day = "Saturday"; //watch avengers endgame movie
// let day = "Sunday"; //wash cloths

// let day = new Date().getDay();

// console.log("To Do For " + day + " =>");

// if(day === "Monday"){
//     console.log("1. go to shopping");
//     console.log("2. clean hall");
// }else if(day === "Tuesday"){
//     console.log("repair bike");
// }else if(day === "Wednesday"){
//     console.log("order pizza");
// }else if(day === "Thursday"){
//     console.log("pay rent");
// }else if(day === "Friday"){
//     console.log("go to sinhgad fort");
// }else if(day === "Saturday"){
//     console.log("watch avengers endgame movie");
// }else if(day === "Sunday"){
//     console.log("wash cloths");
// }else{
//     console.log("Invalid Entry!");
// }

// same to-do program using switch =>
// let day = prompt("Enter The Day to Check Your Tasks :");

// console.log("To Do For " + day + " =>");

// switch(day){
//     case "Monday":
//         console.log("1. go to shopping");
//         console.log("2. clean hall");
//         break;
//     case "Tuesday":
//         console.log("1. Repair bike");
//         console.log("2. Climb hill");
//         break;
//     case "Wednesday":
//         console.log("1. Order pizza");
//         break;
//     case "Thursday":
//     case "Friday":
//         console.log("1. Pay rent");
//         console.log("2. Go to sinhgad fort");
//         break;
//     case "Saturday":
//         console.log("1. Watch avengers endgame movie");
//         break;
//     case "Sunday":
//         console.log("1. Wash cloths");
//         break;
//     default:
//         console.log("Invalid Entry!");
//         alert("Invalid Entry!, Please Try Again..!");
// }

// console.log("End Of The List");

// Assignment #4 : Create a simple calculator using switch statement.
// 1. accept two numbers from user
// 2. display the menu to user and accept the input as a sign (operator)
// menu ->
// + => addition, 
// - => substraction
// * => multiplication
// / => division
// % => mod
// ** => power
// 3. display/write the output on the screen. (e.g. Addition = 45)
// HINT : use switch case.

// => loops - loops are used to repeat/execute the same code again and again.

// print the table of two without any loop ->
// let number = 2;
// console.log(number);
// console.log(number * 2);
// console.log(number * 3);
// console.log(number * 4);
// console.log(number * 5);
// console.log(number * 6);
// console.log(number * 7);
// console.log(number * 8);
// console.log(number * 9);
// console.log(number * 10);

// 5. for loop (break, continue) => 
// syntax =>
// for(initialization; condition; increment/decrement){
//     // statements;
// }

// e.g. print the table of any given number with for loop ->

// let number = Number(prompt("Enter a Number to Print Table :"));

// for(let i = 1; i <= 10; i++){
//     console.log(number * i);
// }

// Assignment #5: For Loop
// write a javascript program -
// 1. to accept a limit (any number) from user
// 2. convert it into number using parseInt
// 3. use a for loop to print only even numbers (on the screen) from 1 to given limit.

// 6. while loop =>
// syntax =>
// while(condition){
//     // statements
//     // increment/decrement;
// }

// e.g. 1
// let studentsArray = ["Prajwal", "Nitin", "Rahul", "Bhagyashree", "Rahul", "Dayanand", 
//                     "Amol", "Vaibhav", "Navjyot", "Rushikesh", "Rutwik", "Rajvi", 
//                     "Niranjan", "Mohsin", "Gauri", "Sharad", "Akash", "Vaishanv"];


// console.log(studentsArray.length);
// let i = 1;

// while(i < studentsArray.length){ // 1 < 18
//     console.log(studentsArray[i]);
//     i++; // 0 => 1 => 2 => 3 ======> 18
// }

// e.g. 2 
// let flag = true;
// let i = 0;
// let unknown = 100;

// while(flag){
//     console.log("hello " + i);

//     if(i === unknown){
//         console.log("catched the unknown person : " + i);
//         // break;
//         flag = false;
//     }

//     i++;
// }

// 7. do while loop
// syntax ->
// do {
//     // statement
// }while(condition);

// using while =>
// let flag = false;
// let i = 1;

// while(flag){
//     console.log("Hi, I'm Inside While..! " + i);
//     i++;

//     if(i > 10){
//         flag = false;
//     }
// }

// console.log("End Of While")

// using do while

// let flag = false;
// let i = 1;

// do {
//     console.log("Hi, I'm Inside While..! " + i);
//     i++;

//     if(i > 10){
//         flag = false;
//     }
// }while(flag);

// console.log("End Of Do While");

// Assignment #6: While Loop/Do-While
// write a javascript program to create a calculator having below features -
// 1. display a menu to user having below options -
//     menu ->
//     + => addition, 
//     - => substraction
//     * => multiplication
//     / => division
//     % => mod
//     ** => power
//     exit => Quit the Program

// 2. accept two numbers from user.

// 3. it should perform any arithmatic operations as per user's
//  choice.

// 4. just keep asking the user for input till the time he is
//  not choosing exit as option.

// 5. display the output of all the calculations on the screen at last.

// [HINT : Switch Case, While/Do-While, if-else]

// =>


// do{
//     let operator = prompt("menu -> + => addition, - => substraction, * => multiplication, / => division, % => mod, ** => power, exit => Quit the Program");
    
//     if(operator !== "exit"){
//         var firstNumber = parseFloat(prompt("Enter First Number")); //10
//         var secondNumber = parseFloat(prompt("Enter Second Number")); //20
//     }

//     switch(operator){
//         case "+":
//             // document.write("Addition : " + (firstNumber + secondNumber));
//             // document.write(`Addition Of ${firstNumber} And ${secondNumber} Is : ${firstNumber + secondNumber}`);
//             document.write("Addition Of " + firstNumber + " And " + secondNumber + " Is: " + (firstNumber + secondNumber));
//             break;
//         case "-":
//             document.write("Subtraction Of " + firstNumber + " And " + secondNumber + " Is: " + (firstNumber - secondNumber));
//             break;
//         case "*":
//             document.write("Multiplication Of " + firstNumber + " And " + secondNumber + " Is: " + (firstNumber * secondNumber));
//             break;
//         case "/":
//             document.write("Division Of " + firstNumber + " And " + secondNumber + " Is: " + (firstNumber / secondNumber));
//             break;
//         case "%":
//             document.write("Mod Of " + firstNumber + " And " + secondNumber + " Is: " + (firstNumber % secondNumber));
//             break;
//         case "**":
//             document.write("Power Of " + firstNumber + " And " + secondNumber + " Is: " + (firstNumber ** secondNumber));
//             break;
//         case "exit":
//             break;
//         default:
//             alert("Invalid Choice, Please Choose Correct Option From Menu!");
//     }
// }while(operator !== "exit");

// ---------------------------------------------------------------------------------

// #functions in javascript =>
// function is a block of resuable statements.

// Syntax =>
// function functionName(parameters){
//     // statements;
// }

// function add(){
//     alert("Inside Add Function..!");
// }

// add();

// write a javascript program to accept two numbers from user and display 
// all arithmatic operations for the numbers.

// function printArithmaticOperations(numberOne, numberTwo){
//     document.write("Addition : " + (numberOne + numberTwo) + "<br />");
//     document.write("Sub : " + (numberOne - numberTwo) + "<br />");
//     document.write("Mult : " + (numberOne * numberTwo) + "<br />");
//     document.write("Div : " + (numberOne / numberTwo) + "<br />");
//     document.write("Mod : " + (numberOne % numberTwo) + "<br />");
//     document.write("Power : " + (numberOne ** numberTwo) + "<br /> <br />");
// }

// let numberOne = parseFloat(prompt("Enter First Number"));
// let numberTwo = parseFloat(prompt("Enter Second Number"));

// let unknown = 50;
// let unknown1 = 100;

// let numberOne = unknown;
// let numberTwo = unknown1;

// document.write("Addition : " + (numberOne + numberTwo) + "<br />");
// document.write("Sub : " + (numberOne - numberTwo) + "<br />");
// document.write("Mult : " + (numberOne * numberTwo) + "<br />");
// document.write("Div : " + (numberOne / numberTwo) + "<br />");
// document.write("Mod : " + (numberOne % numberTwo) + "<br />");
// document.write("Power : " + (numberOne ** numberTwo) + "<br /> <br />");

// printArithmaticOperations(unknown, unknown1);
// printArithmaticOperations(100, 50); //function call

// document.write("Some other task to perform <br />");

// 50,000 lines of code here

// want to print the arithmatic operations for two unknown numbers again.

// numberOne = 100;
// numberTwo = 200;

// printArithmaticOperations(34, 10);
// printArithmaticOperations(20, 14);

// Assignment #7: functions
// write a javascript program -
// 1. to accept two numbers from user. (start, end).
// 2. write a function to print prime numbers between two numbers accepted from user.
// 3. make sure you're passing start and end numbers in parameters only.









