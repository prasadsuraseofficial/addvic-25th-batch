// --------------Difference Between let, const, var----------------

// 1. var vs let & const ->

// let numberOne = 100;
// const numberTwo = 200;
// var numberThree = 300;

// var numberFour = 400;

// if(true){
//     let numberFour = 00;
//     console.log("inside function : ", numberOne, numberTwo, numberThree, numberFour);
// }

// console.log("outside function : ", numberOne, numberTwo, numberThree, numberFour);


// 2. let vs const ->
// let numberOne = 5;
// const numberTwo = 10;

// console.log(numberOne, numberTwo);

// numberOne = 10;
// console.log("numberOne is Updated to : ", numberOne);

// numberTwo = 20;
// console.log("numberTwo is Updated to : ", numberTwo);

// working of const ->
// const test; //undefined
// // Uncaught SyntaxError: Missing initializer in const declaration
// // test = 50;
// console.log(test);

// where to use var, let & const ->
// 1. var - when we want the variable to be accessible throughout program.
// 2. let - when we want to use a variable inside a block only. 
//          (e.g. inside if, for, while etc)
// 3. const - when we're sure that the value will never going to update 
//          in future. (e.g. const PI = 3.14;)