// "use strict";

// let hasDriversLience = false;
// let passTest = true;

// if(passTest){
//     hasDriversLience = true;
// }

// if(hasDriversLience){
//     alert("Vaibhav Can Drive Car!");
// }else{
//     alert("Sorry But Vaibhav Can't Drive Car!");
// }

// let interface = 500;
// console.log(interface);

// [let/const/var] unDeclared = 5;
// unDeclared = 5;
// let studentName = "Rahul";

// console.log(unDeclared, studentName);


// ---------------------Use Strict--------------------------
// 1] use Strict =>
// --------------
// syntax =>

// "use strict";

// 1. used to avoid potential bugs in the program.
// 2. makes our code more predictable.
// 3. gives error if we try to use any keyword which is reserved for future development. 
// i.e. can be added to javascript later on.
// 4. also gives error if we use variables without declarations.

// ---------------------functions--------------------------

// 2] functions =>
// ---------------
// 1. "function" keyword is used to declare a new function.
// 2. function name is used along with parenthesis '()' in order to execute/call/run the code inside function.
// 3. function can accept any number of parameters/arguments to take input data to use inside function.
// 4. we can also use function without passing/having any parameters.
// 5. 'return' keyword is used to return the value from function to calling program.
// i.e. to function call.
// 6. we can assign the value returned by a function to a variable. (let addition = add(5, 10);)
// 7. we can call the function as many times as we want.
// 8. function may or may not have the return keyword.. i.e. function may or may not return value.
// 9. we use functions to write reusable code to avoid repetation of code.
// 10. function works on the principle of 'DRY' [DON'T REPEAT YOURSELF!]

// saveStudentData(studentObj);
// updateStudentData(sid, studentObj);


// FUN FACT : there are many functions that we use throughout our daily javascript programs.
// for e.g.
// 	console.log();
// 	alert();
// 	document.write();
// 	prompt(); & many more..!
// these all are javascript's inbuilt functions.
 
// Syntax ->

// function functionName(parameter1, parameter2, ....., parameterN){
//     //statements;
// }

// example 1 ->

// console.log("Before Log Function");

// // function
// function log() {
//     console.log("Hi, My Job Is to Print this Line on Console!");
// }

// console.log("After Log Function");

// // calling/invoke/run/execute the function
// log(); //function call

// O/P - 
// Before Log Function
// After Log Function
// Hi, My Job Is to Print this Line on Console!


// example 2 -> function with parameters (parameterized function)

// function fruitProcessor(applesCount, orangesCount){
//     let juice = `Juice with ${applesCount} apples & ${orangesCount} oranges.`;
//     // console.log(juice);
//     return juice;
// }

// let juiceData = fruitProcessor(5, 10);
// console.log(juice);
// let stringData = "this is some data to print"
// alert(stringData);

// let numberOfApples = prompt("Enter Apples Count");
// let numberOfOranges = prompt("Enter Oranges Count");

// fruitProcessor(numberOfApples, numberOfOranges);
// fruitProcessor("fresh", "delicious");


// example 3 -> function with parameters & reutrn keyword

// function fruitProcessor(applesCount, orangesCount){
//     let juice = `Juice with ${applesCount} apples & ${orangesCount} oranges.`;
//     // console.log(juice);
//     let totalFruits = applesCount + orangesCount;

//     // if(xyz == true){
//     //     return totalFruits;
//     // }else{
//     //     return juice;
//     // }
//         return juice;
// }

// let numberOfApples = prompt("Enter Apples Count");
// let numberOfOranges = prompt("Enter Oranges Count");

// // fruitProcessor("fresh", "delicious");

// let myJuice = fruitProcessor(numberOfApples, numberOfOranges);

// console.log(myJuice);

// // console.log(fruitProcessor(numberOfApples, numberOfOranges));



// -----------------------------Function Expression----------------------------------------
// Statement vs Expression?
// break;
// vs 
// let add = 5 + 3; //expression

// function getFullName(fName, lName){
    //     const fullName = fName + " " + lName;
    //     return fullName;
    // }
    
    // const fullName = getFullName("Vaibhav", "Sontakke");
    // console.log(fullName);

// we can assign this type function to a variable.
// const test = 123;
// function express/anonymous function
// const getFullName = function (fName, lName){
//         const fullName = fName + " " + lName;
//         // const test = 456;
//         // console.log(test);
//         return fullName;
//     }
    
// console.log(getFullName); //print function code
// console.log(getFullName("Daya", "Sontakke")); //print output/running the function


// -------Difference Between Function & Function Expression (anonymous function)-----
// 1. function has name but function expression doesn't have any function name.
// 2. we can call regular functions using it's function name.. but we need to use 
// variable name to call the function expression/anonymous function.
// 3. 

// e.g.1 calling normal/regular function before initialization ->

// sayHello();

// function sayHello(){
//     alert("Hello Peoples!");
// }

// the above code is valid and will run without errors.
// ---------------------------------------------

// e.g.2 calling normal/regular function before initialization ->

// sayHello();

// const sayHello = function(){
//     alert("Hello Peoples!");
// }

// the above will give an error saying Cannot access 'sayHello' before initialization


// ----------------------------------Arrow Functions-----------------------------------
// normal/regular/general function
// function sayHello(){
//     alert("Hello All!");
// }

// sayHello();

// function expression/anonymous function
// const sayHello = function (){
//     alert("Hello All!");
// }

// sayHello();

// arrow function/fat arrow function -> | =>
// 1.arrow function is also a type of function expression/anonymous function.

// 1.1. arrow function with no parameters ->
// const sayHello = () => {
//     alert("Hello All!");
// }
// sayHello();

// 1.2. arrow function with parameters ->
// const sayHello = (appleCount, orangeCount) => {
//     alert(`Hello All, I Have ${appleCount} Apples And ${orangeCount} Oranges.`);
// }
// sayHello(5, 10);

// 1.3. arrow function with 1 parameter ->
// const sayHello = firstName => {
//     alert(`${firstName}, Nam to suna hi hoga..!`);
// }
// sayHello("Rahul");

// 1.4. arrow function with multi line code ->
// const sayHello = (firstNumber, secondNumber) => {
//     let add = firstNumber + secondNumber;
//     return add;
// }
// alert("Addition : " + sayHello(50, 100));

// 1.4. arrow function with single line code ->
// const sayHello = (firstNumber, secondNumber) => firstNumber + secondNumber;
// alert("Addition : " + sayHello(50, 100));


// const sayHello = firstName => `Hello, My Name Is ${firstName}`;

// let res = sayHello("Nitin");
// console.log(res);

// #in arrow function we don't have access to "this" keyword.


// ----------------------Nested Functions-------------------------------------

// function inside another function is called as nested functions

// function cutFruitPieces(fruitCount){
//     return fruitCount * 5;
// }

// function fruitProcessor(applesCount, orangesCount){
//     // let applePieces = applesCount*4;
//     // let orangesPieces = orangesCount*4;

//     let applePieces = cutFruitPieces(applesCount);
//     let orangesPieces = cutFruitPieces(orangesCount);

//     return `Juice with ${applePieces} apple pieces & ${orangesPieces} orange pieces.`;
// }

// console.log(fruitProcessor(5, 10));




